const http = require('http')
const fs = require('fs')

const skills = [
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'Nodejs'},
    {name: 'Python'},
]

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    // console.log(url)

    // console.log(method) 
    //GET방식! = url로 접속하면 무조건 
    // host를 호출 하려면 form태그 이용
    if(method === 'GET'){
        //2xx: 정상적인 호출, 4xx:잘못된 페이지 호출, 5xx: 서버 에러
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(skills)) //json데이터를 문자열로 바꾸는 것


    //host를 이용하는 것: 서버에 데이터를 새로 추가 입력할 때 사용
    //🔴포스트맨 : host에서 접속하기 위해 프로그램 설치 
    //구글 연동
    //workspace -> my workspace
    //포스트맨으로 데이터 전송 

    //post로 접속
    // body -> raw -> json 
    // 내용입력
    }else if(method === 'POST'){
        const body = []
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end',()=>{
            const bodyStr = Buffer.concat(body).toString()
            //buffer객체에서 스트링으로 변경
            
            const skill = JSON.parse(bodyStr) 
            //객체형식으로 바꿔준다

            skills.push(skill)
            console.log(skill)
            res.writeHead(201)
            res.end();
        })

    }
})

server.listen(8080);


//서버 사이드 렌더링: request에 의해서 서버가 웹으로 보여주는 것을 의미