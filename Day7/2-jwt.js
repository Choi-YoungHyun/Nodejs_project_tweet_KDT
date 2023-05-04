// jwt
// npm i jsonwebtoken

//https://www.lastpass.com/features/password-generator

const jwt = require('jsonwebtoken')

const secretkey = 'd8TASO9G3ad@agNR^ZpRFp7anvdc%S'


//1번째 저장할 객체, 2번쨰 시크릿키, 3번째 옵션값 (expiresIn 초단위 토큰값 저장)
const token = jwt.sign(
    {
        id:'apple',
        name:'김사과',
        isAdmin:false
    },
    secretkey,
    {
        expiresIn: 20
    }
);

setTimeout(() => {
    //다시 복원시키는 메소드
    jwt.verify(token,secretkey,(error,decode)=>{
        console.log(error,decode)
    })
}, 3000);

console.log(token)

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFwcGxlIiwibmFtZSI6Iuq5gOyCrOqzvCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODMwNzk0NTMsImV4cCI6MTY4MzA3OTQ3M30.yRHiNwfaFLcVic340TqX2JHKZ6m13lebVVGwMDPV4VA