// `(빽틱) 기호로 문자 데이터를 만들면 안에 줄바꿈이 가능함
const str = `
    010-1234-5678
    thesecon@gmail.com
    https://www.omdbapi.com/?apikey=7035c60c&s=frozen
    The quick brown fox jumps over the lazy dog.
    abbcccdddd
    `

// const regexp = new RegExp('the', 'gi');  // 여기서 g에 해당하는 애들을 flag라고 부른다
const regexp = /fox/gi;

console.log(str.match(regexp))          // 배열 데이터가 되는데 그 index 중 0번만 확인하면 됌
console.log('=================================================')
console.log(regexp.test(str));
console.log('=================================================')
// str.replace(정규식, '대체문자') => 정규식에 해당하는 문자를 대체문자로 전환
console.log(str.replace(regexp, 'AAA'));   
// str = str.replace(regexp, 'AAA');

const regexp1 = /the/gi
console.log('=================================================')
console.log(str.match(regexp1));
console.log('=================================================')

console.log(str.match(/\.$/gi));        // 문자 데이터의 끝 부분이 . 인지 찾는 패턴
// m옵션으로 시각적으로 보이는 각각의 줄에 있는 데이터 검색 시 m 플래그 사용
console.log('=================================================')
console.log(str.match(/\.$/gim));        // 문자 데이터의 끝 부분이 . 인지 찾는 패턴
console.log('=================================================')

console.log(
    str.match(/d$/gm)
);
console.log(
    str.match(/^t/gm)
);



