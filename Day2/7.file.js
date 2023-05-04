
const fs = require('fs').promises;

//파일 읽기

//매개변수(파일명, 인코딩방식)

fs.readFile('./test.txt','utf-8')
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))


//파일에 쓰기

fs.writeFile('./write.txt','파일 출력 예제 입니다!')
.catch(console.error)

//파일 추가 출력
fs.appendFile('./write.txt','\n추가작성한 글: 가나다라마바사')
.catch(console.error)

//파일 복사
fs.copyFile('./test.txt','./test2.txt')
.catch(console.error)

//디렉토리 생성
fs.mkdir('subdir')
.catch(console.error)

//디렉터리 내 리스트 확인
fs.readdir('./')
.then(console.log)
.catch(console.error)

