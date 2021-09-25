=>내 처음 풀이
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const String = input[0].split('');
let IndexOfCursor = String.length;


function leftmove() {
    if (IndexOfCursor != 0) {
        IndexOfCursor--;
    }
}

function rightmove() {
    if (IndexOfCursor != String.length) {
        IndexOfCursor++;
    }
}

function erase() {
    if (IndexOfCursor != 0) {
        String.splice(IndexOfCursor-1, 1);
        IndexOfCursor--;
    }
}

function add(n) {
    String.splice(IndexOfCursor, 0, input[i].split(' ')[1]);
    IndexOfCursor++;
}


for(i = 2; i <= Number(input[1])+1; i++) {
    if (input[i] === 'L') {
        leftmove();
    } else if (input[i] === 'D') {
        rightmove();
    } else if (input[i] === 'B') {
        erase();
    } else if (input[i].indexOf('P') != -1) {
        add(i);
    }
}

console.log(String.join(''));

문제의 의도를 제대로 파악하지 못한 것 같다. Stack의 성질인 LIFO를 잘 활용했어야하는데
그러지 못하고 Stack을 하나만 사용하여 해당 스택 안에서 왼쪽오른쪽을 따져가며 splice()
같은 메소드를 사용하다보니 시간초과가 발생한 것 같다. 내 풀이도 정상적인 풀이긴 하였으나
시간초과가 난걸로 보아 문제가 정확히 요구하는 바에는 부응하지 못한 듯 하다.


=> 구글에서 찾은 풀이
let input = require('fs').readFileSync('input.txt').toString().trim().split( '\n');

const inputLength = input.length;
	const wordLength = input[0].length;
	let left = [];
	let right = [];

	for (let i = 0; i < wordLength; i++) {
  		left.push(input[0][i]);
	}

	for (let i = 2; i < inputLength; i++) {
  		if (input[i][0] === "L") {
    		if (left.length) {
      			right.push(left.pop());
    		}
  		} 
        else if (input[i][0] === "D") {
    		if (right.length) {
      			left.push(right.pop());
    		}
  		} 
        else if (input[i][0] === "B") {
    		if (left.length) {
      			left.pop();
    		}
  		} 
        else if (input[i][0] === "P") {
    		left.push(input[i][2]);
  		}
	}

	while (right.length) {
  		left.push(right.pop());
	}

	console.log(left.join(""));

이렇게도 생각할 수 있구나 하고 놀란 풀이였다! 커서를 중심으로
Left, Right를 나누어 주어진 문자열을 두 개의 Stack을 통해 나누어 놓았다.
그리고 L과 D와 같이 커서가 움직이는 명령어인 경우 Left와 Right 사이에서 Pop => Push하는
과정을 통해 커서의 움직임을 표현하였다. 입력, 제거의 경우에 push, pop을 이용한 방법을 생각해
냈으면 좋았을텐데...아쉽다!
