//fs module 사용
//파일 관련된 메소드와 프로퍼티가 존재


/* 
방법 3가지    
1. rename(...,callback(error))    //비동기 [에러시에만 콜백함수]
    
2.  try{renameSync(...)          //동기 (try,catch로 묶는 것이 좋다.)
    }catch(e){
        
    }      

3. promises.rename(...).then().catch()               
*/



const fs = require('fs')


//동기식
try{
    fs.renameSync('./test.txt','./new-test.txt');
}catch(e){
    console.error(e)
}


//비동기식

fs.rename('./new-test.txt','./test-new-new.txt', (error)=>{
    console.log(error)
});

console.log('파일이름 바꾸기 완료 !')


console.log('======================================')


//fs. promises.rename(...).then().catch()  

fs.promises.rename('./test-new-new.txt','./test.txt')
.then(()=> {console.log('Done!')})
.catch((error)=> {console.log(error)})