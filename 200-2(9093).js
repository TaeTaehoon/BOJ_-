let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const T = Number(input[0]);
const sentence = [];
function reverse() {
    for (i = 1; i<= T; i++) {
        let words = input[i].split(' ');
        const revWords = [];

        for (j = 0; j <= words.length-1; j++) {
            if (words[j].length > 1) {
                let target = words[j].split('');
                revWords.push(target.reverse().join(''));
            } else {
                revWords.push(words[j]);
            }
        }

        sentence.push(revWords.join(' '));

    }
}
reverse();
console.log(sentence.join('\n'));
/*
처음에는 for문을 이용하여 reverse()를 T번 호출하는 형태로 코드를 구성하였었다.
그랬더니 띠용 850초가 나오길래 출력을 함수 내에 넣지않고 reverse()함수는
뒤집은 문장을 push하는 기능으로 바꾸고 sentence라는 배열을 추가해 해당 배열을
한번에 출력하게 바꾸니까 작동시간이 절반으로 줄었다 야호! 괜히 구조가 중요한게 아니구나..싶다!
문장 => 단어로 쪼개고 단어의 길이가 2이상인 경우에만 해당 단어를 또 쪼개서 .reverse메소드를
이용하여 뒤집은뒤에 revWords에 저장했다. 단어의 길이가 1인 경우에는 그냥 바로 저장.
*/
