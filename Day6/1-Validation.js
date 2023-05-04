import express from 'express'
import {body,param, validationResult} from 'express-validator'

const app = express()
app.use(express.json()) //제이슨으로 받기위해 미들웨어 등록


const validate = (req,res,next)=>{
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    }
    return res.status(400).json({message: errors.array()})
}


app.post(
    '/users',
    [body('name')
    .trim()                                           //공백제거
    .isLength({min:4})                                //validation 
    .withMessage('이름은 4글자 이상으로 입력하세요.'), //핸들러

    body('age')
    .isInt()
    .withMessage('숫자를 입력하세요.'),
    
    body('email')
    .isEmail()
    .withMessage('이메일 형식을 확인하세요')
    //형식 체크 후 전원 소문자로 변경해준다.
    .normalizeEmail(),
    
    body('job.name')
    .notEmpty()
    .withMessage('job : {name}이 없다!'),

    //에러시
    validate],
    (req,res)=>{
        console.log(req.body)
        res.sendStatus(201);
    }
)

app.get(
    '/:email',
    [
        param('email')
        .isEmail()
        .withMessage('이메일 형식을 확인하세요.'),
        validate
    ],
    (req,res,next)=>{
        res.sendStatus(200)
    }
)


app.listen(8080)