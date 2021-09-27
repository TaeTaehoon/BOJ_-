let input = require('fs').readFileSync('input.txt').toString().trim().split(' ');

const N = Number(input[0]);
const K = Number(input[1]);
let count = 1;
let josepus = [];
const result = [];

while(josepus.length < N) {
    josepus.push(count);
    count++;
}
// n == K
function spliter(n) {
    let front = [];
    let back = josepus;
    let i = 0; 
    while(i < n) {
        if (back.length == 0) {
            back = front;
            front = [];
        }
        front.push(back.shift());
        i++;
    }
    result.push(front.pop());
    josepus = back.concat(front);
    if (result.length == N) return;
    spliter(n);
    
}
spliter(K);
console.log(result);

예전 편집기 문제에서 영감을 얻었다. 원형처럼 동작하는 배열을 얻기 위해 앞 뒤로 배열을 나누었다.
그렇게 하여 해당숫자의 앞 뒤로 숫자들을 나눈뒤 재할당을 통해 재귀적으로 동작하도록 코드를 짰다.
그리고 만약 K보다 남은 숫자들의 수가 적다면 back과 front의 값을 서로 바꾸어 계속 동작하도록 했다.
좀 오래걸리긴 했지만...만족함!
