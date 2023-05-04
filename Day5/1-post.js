import express from 'express'

const app = express();


//바디로 데이터를 받을 수 있게 해준다.
app.use(express.json()); //미들웨어..?

app.post('/posts',(req,res)=>{
    console.log(req.body);
    res.status(201).send('Create 되었습니다!')

})


app.listen(8080)