import express from 'express'

const router = express.Router()

// router.use() //app.use()랑 상당히 유사

router.use((req,res,next)=>{
    console.log('user에 존재하는 미들웨어!');
    next()
})

router.get('/',(req, res) => {
        res.status(200).send('GET: /users')
    })
    
router.post('/',(req, res) => {
        res.status(201).send('POST: /users')
    })

router.put('/:id',(req, res) => {
        res.status(201).send('PUT: /users/:id')
    })
router.delete('/:id',(req, res) => {
        res.status(200).send('DELETE:/users/:id')
    })

export default router; 
//router라는 명으로 내보낼 것이다.(모듈로)