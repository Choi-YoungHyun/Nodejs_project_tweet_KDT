const { createWriteStream, createReadStream} = require('fs');


//파일 만들기
const stream = createWriteStream('output.txt')
stream.write('최영현 연습\n')
stream.write('최영현 연습2\n')
stream.write('최영현 연습3\n')
stream.end()

const stream2 = createReadStream('output.txt')
//on이라는 메소드로 이벤드 헨들러를 등록한다.(이벤트 이름은 data)
//chunk에 인수를 그대로 입력받아 그대로 출력

stream2.on('data',(chunk)=>{
    console.log(`chunk: ${chunk}`)
})



