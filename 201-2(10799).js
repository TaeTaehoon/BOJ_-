let input = require('fs').readFileSync('input.txt').toString().trim();

const split = input.split('');
const stack = [];
let result = 0;

for(i = 0; i <= input.length-1; i++) {
    stack.push(split[i]);
    
    const n = stack.length-1;
    if (stack[n-1] == '(' && stack[n] == ')') {
        stack.pop();
        stack.pop();

        if (split[i-1] != split[i]) {
            result += stack.length;
        } else if (split[i-1] == split[i]){
            result += 1;
        }
    }
}
console.log(result);

처음 며칠간은 문제에 대한 접근방법조차 떠오르지 않아 막막했다. 머릿속으로 여러풀이가 생각나긴 했지만
그걸 실제로 구현할 자신이 없었을뿐더러 아무리 생각해도 매우 복잡한 알고리즘이 될 것 같았다.
그래서 일단 머리를 비우고 'stack'이라는 문제의 컨셉에 충실해보기로 했다. stack에 input값들이 lifo에 따라 
추가되고 제거되면서 중간에 레이저에 의해 잘리는 걸 구현해보기로 했다. 그랬더니 쉽게 해결이 되었다!
그동안 접근조차 하지 않았던 이유는 내가 봉들이 위로 쌓여있기때문에 봉들을 코드내에서 분류하려고 집착하였기 때문이었다.
왼쪽에서 오른쪽으로 stack의 순서처럼 생각하면 쉽게 풀 수 있는 문제였다.
