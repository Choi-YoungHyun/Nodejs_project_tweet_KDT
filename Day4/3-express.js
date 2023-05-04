/*
REST(Representational State Transfer)
자원을 이름으로 구분하여 해당 자원의 상태를 주고 받는 모든 것을 의미

API(Application Program Interface)
기능의 집합을 제공해서 컴퓨터 프로그램간 상호 작용을 하도록 하는 것

REST API
REST 기반으로 서비스 API를 구현 한 것

CRUD Operation
POST: 생성(create)
GET: 조회(Read)
PUT: 수정(Update)
Delete: 삭제(Delete)
*/ 


//express 설치 (npm i express)

// 모듈로 사용하기
// type: module   - -  package.json에 입력


import express from 'express';

const app = express();

app.get('/',(req,res,next) =>{
    //사용자에게 데이터를 전달해줄때 사용하는 method
    res.send('<h2>익스프레스 서버로 만든 첫번째 페이지</h2>')
})

app.get('/hello',(req,res,next)=>{
    res.setHeader('Content-Type','application/json')
    res.status(200).json({name:'apple', age:20})
})

//express 서버 기본이: html으로 되어있어서 ConTent-Type,text/html을 입력 안해도 된다.

app.use((req,res,next)=>{
    res.setHeader('node-skill','node middleware!!')
})

app.listen(8080);
