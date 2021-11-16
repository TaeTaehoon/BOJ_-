let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input[0]);
const splited = input[1].split(' ');
let stack = [];

for(i = 0; i < N; i++) {
    while(stack.length !== 0 && Number(splited[i]) > Number(splited[stack[stack.length-1]])) {
        splited[stack.pop()] = splited[i];
    }
    stack.push(i);
}

while(stack.length != 0) {
    splited[stack.pop()] = -1;
}

console.log(splited.join(' '));

위의 코드에서 for문 내의 while문이 나의 고민거리를 해결해주었다. 몇날몇일을 고민하였는데 결국
어떻게 해도 시간초과를 해결하지 못해 구글링을 하게되었다. 큰 수가 나올때까지만 반복하는 경우를 
어떻게 만들어야할지 몰랐는데 해당 코드를 유심히 읽어보니 어떤식으로 작동하는지 알 수 있었다.
나는 stack에 index값을 넣는다는 생각 자체를 하지 못했다. 계속 주어진 수열의 숫자 자체를 넣어서
해결하려고 했었는데 이렇게 접근하는 방식을 보니 좀 새로웠다. 해당 stack에 index값이 존재한다는 것은
위에서 오큰수에 해당하는 숫자가 존재하지 않았다는 뜻이고 마지막 while문에서 처리해주는 것도 재미있었다.

+) 아직 내가 for, while문의 사용에 미숙하다는 것을 깨달았다. 다시한번 풀어봐야할듯...
for( while())문을 통해 위의 풀이는 현재 i index에 해당하는 값과 이전에 남아있던 값들의 비교도 할 수 있다.
나는 그걸 어떻게 처리해야할지 감을 못 잡고 있었는데... 코딩 어렵다!
