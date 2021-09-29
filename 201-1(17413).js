let input = require('fs').readFileSync('input.txt').toString().trim();

const re = /(<.+?>|\s)/g;
// <>에 문자 하나 이상 포함하는 문자열 혹은 공백 문자, 
//split할 때 기억했다 정규식 포함하는 애들까지 나누기 위해 ()
const tmp = input.split(re);

let result = [];
tmp.map((x) => {
  if (re.test(x)) { // 정규식.text(문자열) ==> 해당 정규식을 따르는 문자열은 true 반환
    result += x; // 이에 포함되면 그냥 문자열 넣기
  } else { // 정규식에 포함되지 않은 문자열 (<>과 공백 아닌 문자열)
    let a = x.split("").reverse().join(""); //문자마다 뒤집음
    result += a; //
  }
});
console.log(result);

정규표현식을 나타내는법을 구글에서 찾아 코드를 따왔다.
<>로 감싸진 태그문자들과 그렇지 않은 일반 문자열로 나누어 풀면 될 것 같았는데
표현하는 법을 도저히 모르겠어서 구글링을 통해 검색하였다!
