import express from 'express'
import morgan from 'morgan' 
// 사용자가 서버에 들어올 때마다 간단한 정보를 보여주는 모듈
import cors from 'cors';

const app = express()

app.use(morgan('common'))
app.use(cors())

app.get('/',(req,res)=>{
    console.log('/ get으로 메인페이지 호출')
    res.send('welcome') //뭐라도 보내야 멈추니까
})

app.listen(9090)