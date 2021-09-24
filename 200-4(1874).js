let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const n = Number(input[0]);
const stack = [];    
const process = [];
let stackcount = 1;
let numcount = 1;

while(true) {
    
    stack.push(stackcount);
    process.push('+');
    while(true) {
        if (stack[stack.length-1] == Number(input[numcount])) {
            stack.pop();
            process.push('-');
            numcount++;
        } else {
            break;
        }
    }
    if (stackcount == n) {break;}
    stackcount++;

}
console.log(stack.length == 0 ? process.join('\n') : 'NO');

처음에는 stack과 stack에서 push.pop한 결과를 저장할 numArray를 하나 더 만들어 문제를 풀어봤다.
하지만 실제 풀이에는 numArray는 필요하지 않은 요소였기 때문에 정상적으로 작동한다는 것을 확인하고는
numArray는 삭제! 불필요한 건 쳐낼 필요가 있다는 걸 알게 된 듯. 그리고 위 알고리즘이 동작하고도
stack에 숫자가 남아있다는 건 불가능하다는 것이기 때문에 마지막 줄에 삼항연산자를 통해
조건을 걸어 출력문을 결정하였다.
