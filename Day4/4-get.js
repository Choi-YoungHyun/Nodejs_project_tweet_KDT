import express from 'express'

const app = express();

app.get('/posts',(req,res,next)=>{
    console.log('post를 호출')
    console.log('path:',req.path)
    console.log('params:',req.params)
    
    console.log('query:',req.query) // {number: '1'}
    // http://localhost:8080/posts?number=1
    // ?이후부터 쿼리문이다 !!!
    res.sendStatus(200);
});

//게시판 호출 시 많이 사용하는 방법

app.get('/posts/:id',(req,res)=>{
    console.log('🔴/posts/:id🔴로 호출 했다 !')
    console.log('path:',req.path)

    // http://localhost:8080/posts/1
    console.log('params:',req.params)//{ id: '1' }
    
    console.log('query:',req.query)
    res.sendStatus(200);
})

app.delete('/posts/:id',(req,res)=>{
    console.log(('delete /post/:id로 호출 되었습니다.'))
    console.log(`${req.params.id}번호가 삭제 되었다.`)
    res.sendStatus(200);
})

app.get(['/mypage','/myroom'],(req,res)=>{
    res.send('<h1>mypage와 myroom은 같은 페이지이다.</h1>')
})


app.listen(8080);