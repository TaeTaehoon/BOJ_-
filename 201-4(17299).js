let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input[0]);
const splited = input[1].split(' ').map((x) => +x);
let stack = [];
let count = [];

splited.forEach(
    (x) => {
        count[x] = (count[x] || 0) + 1;
    }
)

for(i = 0; i < N; i++) {
    while (
        stack.length &&
        count[splited[stack[stack.length - 1]]] < count[splited[i]]
      ) {
        splited[stack.pop()] = splited[i];
      }
    stack.push(i);
}

while(stack.length != 0) {
    splited[stack.pop()] = -1;
}

console.log(splited.join(' '));



문제의 개형자체는 201-3번과 거의 똑같아서 해당 문제의 풀이과정을 참고했다.
대신 처음에 숫자들의 출현빈도를 세야하는데 F를 만들어서 쓰니까 메모리 초과가 났다.
아무래도 숫자의 가짓수가 많아지다보면 F가 너무 많아져서 그런것 같다.
그래서 그냥 count 라는 배열을 만들어서 해당 배열에 숫자 순서대로 출현빈도가 저장되도록 하였다.
그 이후에는 201-3번처럼 stack에 들어간 index의 값들끼리 비교하고 오등큰수인 경우에는 해당 자리에
오등큰수를 넣어주고 오등큰수가 존재하지 않는경우에는 마지막에 while문을 이용하여 해당 index의 값을
-1로 바꿔주었다.
