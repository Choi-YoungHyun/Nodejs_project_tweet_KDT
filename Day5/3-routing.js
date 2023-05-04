//예제
import express from 'express'

const app = express()

//라우터 설정하기
//정형적인 방법
app
    .route('/posts')
    .get((req, res) => {
        res.status(200).send('GET: /posts')
    }).post((req, res) => {
        res.status(201).send('POST: /posts')
    })

app
    .route('/posts/:id')
    .put((req, res) => {
        res.status(201).send('PUT: /posts/:id')
    }).delete((req, res) => {
        res.status(200).send('DELETE:/posts/:id')
    })

app.listen(8080)


