let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input[0]);
const stack = [];
const result = [];


function filter(n) {
    if (n.length == 3) {
        if (n === 'top') {
            return result.push(stack.length != 0 ? stack[stack.length-1] : -1);
        } else {
            return result.push(stack.length != 0 ? stack.pop() : -1);
        }//pop
    } else if (n.length == 4) {
        return result.push(stack.length);
        //size
    } else if (n.length == 5) {
        return result.push(stack.length != 0 ? 0 : 1);
        //empty
    } else {
        let command = n.split(' ');
        return stack.push(Number(command[1]));
    }//push X
}

for(i = 1; i <= N; i++) {
    filter(input[i]);
}
console.log(result.join('\n'));
// puxh X = length == 6
// pop length == 3
// top length == 3
// size length == 4
// empty length == 5
/*
input의 길이에 따라 명령어들을 구분하고 길이가 같은 명령어에 대해서는
문자열과 같은지 비교하여 구분하였다.
그리고 시간이 오래걸릴거 같아서 처음엔 filter함수를 실행시킬때마다
출력하려고 하였으나 result배열을 하나 더 추가하여 한번에 출력하는 방식을 사용하였다.
*/
