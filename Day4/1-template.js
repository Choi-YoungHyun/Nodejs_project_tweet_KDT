// https://ejs.co/
// 템플릿 엔진을 왜 쓰냐? 
// javascript는 브라우저에서 실행 
// EJS사용시 서버에서 실행 가능

const http = Require('http')
const fs = Require('fs')
const ejs = Require('ejs') // 따로 설치 필요


//설치 법 
// package.json 생성 (npm init -y)
// npm i ejs 
// 노드몬 설치(개발툴에서) = npm i nodemon --save-dev
// package.json에 들어간다 = "start": "nodemon 1-template"
// html파일을 생성(🔴 확장자는 ejs로)

const name = 'apple';
const skills = [
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'JavaScript'},
    {name: 'Python'},
    {name: 'Nodejs'},
]

//서버 렌더링이라고 한다 !

const server = http.createServer((req,res)=>{
    const url = req.url //사용자의 url를 변수로 저장
    res.setHeader('Content-Type','text/html') // 브라우저 html 해석 준비
    if(url === '/'){
        ejs
        .renderFile('./template/index.ejs',{ name: name }) //name은 백엔드 소스를 ejs에 보여주기 위한 객체(내가 생성 해야되는 것)
        .then((data)=> res.end(data)) 
        //랜더파일한 데이터를 사용자에게 보내라
    }else if(url ==='/mypage'){
        ejs
        .renderFile('./template/mypage.ejs', {skills: skills})
        .then((data)=> res.end(data))
    }else{
        ejs
        .renderFile('./template/notfound.ejs', {name:name})
        .then((data)=> res.end(data))
    }
    //위 페이지 외에 호출시 notfound.ejs 페이지를 출력
    // xxx님이 요청하신 페이지를 찾을 수 없습니다. (Not found)
});

server.listen(8080); //사용자를 포트8080에서 기다린다.
