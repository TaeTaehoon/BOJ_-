let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');


const T = Number(input[0]);
const suspect = [];

function inspect(n) {
    input[n] = input[n].split('()').join('');

    if (input[n].length != 0) {
        if (input[n].indexOf('()') == -1) {
            return suspect.push('NO');
        } else {
            inspect(n);
        }
    } else {
        return suspect.push('YES');
    }

}

for (i = 1; i <= T; i++) {
    inspect(i);
}

console.log(suspect.join('\n'));

처음에는 재귀함수를 이용하려다가 자꾸 오류를 뿜길래 이게 뭔가 싶었다.
input[n]을 target이라는 변수를 만들어 할당시켰는데 재귀함수를 실행할 때마다
할당, 재귀, 할당, 재귀가 무한반복되면서 오류를 뿜는것이었다.
그래서 그냥 input[n]자체에 재귀 전에 실행한 걸 할당시키니까 문제가 사라졌다!
위 코드는 재귀를 통해 주어진 PS내의 ()를 찾아 없어질때까지 ()를 없애며 해당
PS가 VPS인지 아닌지 판별한다.
