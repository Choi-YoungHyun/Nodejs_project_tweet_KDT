import express from 'express'

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    console.log('/ get으로 실행')
    res.status(200).send('get으로 첫 페이지 실행')
})

//퍼블릭 폴더안에 파일들을 직접 접속 가능 
app.use(express.static('public'));
//http://localhost:9090/index.html 
//http://localhost:9090/beachball.png
//이런식으로 접근 가능

app.use('/files',express.static('public'))
//http://localhost:9090/files/index.html

app.listen(9090)
