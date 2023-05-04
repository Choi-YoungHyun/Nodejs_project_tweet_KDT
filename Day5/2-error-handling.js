import express from 'express'
import fs from 'fs'
import fsAsync from 'fs/promises'

const app = express();

app.use(express.json());
//미들웨어로 body로 등록할 수 있게(json 으로 작성된 )

app.get('/file1', (req, res) => {
    fs.readFile('/file1.txt', (err, data) => {
        if (err) {
            res.sendStatus(404);
        }
    })
})

//문제 1 동기식 에러처리하기
app.get('/file2', (req, res) => {
    try {
        const data = fs.readFileSync('/file2.txt')
    } catch (error) {
        res.sendStatus(404).send('파일 에러 발생 !')
    }
})


//문제 2 에러처리하기 
app.get('/file3', (req, res) => {
    fsAsync
        .readFile('/file3.txt')
        .catch(()=>{res.sendStatus(404)}) //무조건 콜백함수를 사용
})


//문제3 에러처리하기
app.get('/file4', async (req, res) => {
    try {
        const data = await fsAsync.readFile('/file4.txt')
    } catch {
        console.error(error)
        res.sendStatus(404)
    }
})



//에러처리를 안한 것을 미리 해놓는 것 (최후의 수단)
app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).join({ message: '서버 에러 !' })
})

app.listen(9090);


