let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
동해물과 백두산이 마르고 닳도록
`

console.log(
    str.match(/h..p/g)
);
console.log(
    str.match(/fox | dog+/g)
);
console.log(
    str.match(/https?/g)
);
// \w => 숫자와 알파벳을 포함한다는 의미
// \b ~ \b => ~안의 내용에대한 경계를 지정해줌
console.log(
    str.match(/\b\w{2,3}\b/g)
);
console.log(
    str.match(/[0-9]{1,}/g)
);
console.log(
    str.match(/[가-힣]{1,}/g)
)
console.log(
    str.match(/\w/g)
)
console.log(
    str.match(/\bf\w{1,}\b/g)
)
console.log(
    str.match(/\d{1,}/g)
)

const h = `  the hello  world       !

`

// 밑처럼 구현하면 모든 공백을 삭제할 수 있다!!!
console.log(
    h.replace(/\s/g, '')
);

// 특정한 문자를 기준으로 앞으로 일치하는 문자를 출력
console.log(
    str.match(/.{1,}(?=@)/g)
)
console.log(
    str.match(/(?<=@).{1,}/g)
)
