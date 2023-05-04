const http = require('http')
//node js 내장 모듈 
//가볍게 웹사이트를 돌리는데 문제 없음

const fs =require('fs')

// console.log('http 모듈 테스트!')

const server = http.createServer((req,res)=>{
    console.log('서버가 동작중입니다!');
    console.log(req.headers)
    console.log('--------')
    console.log(req.method)
    console.log('===========')
    console.log(req.url)

    const url = req.url;
    res.setHeader('Content-Type','text/html') 
    //Content-Type 키 : 
    //text/html 받을 준비를 해라.
    //사용자에게 전달할 객체를 이용할 때 responsed
    //사용자 브라우저: 나는 html파일 파싱을 준비한다. 
    //(js면 javascript 파싱 준비)

    if(url === '/'){
        fs.createReadStream('./html/index.html').pipe(res);
        //res를 출력해라 
    }else if(url ==='/mypage'){
        fs.createReadStream('./html/mypage.html').pipe(res)
    }else{
        fs.createReadStream('./html/notfound.html').pipe(res)
    }

})

//ryuzy.com:80
//localhost:8080
server.listen(8080);