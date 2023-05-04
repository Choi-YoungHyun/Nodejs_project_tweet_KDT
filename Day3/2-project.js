/*

1. 사용자가 정리하고자 하는  폴더를 선택하게 함 

cf) 입력: node 2-project test (테스트 폴더에 정리해달라.)
    인덱슥 0      1        2

2. 사용자가 원하는 폴더안에 video,captured, duplicated 폴더를 만들기

3. 폴더 안에 있는 파일들을 조건에 맞게 정리한다.
    a.mp4,mov 확장명 = video로 이동
    b.png,aae 확장명 = captured로 이동
    c.IMG_로 시작되는 파일 = duplicated로 이동 
    d.IMG_E로 시작되는 파일을 그대로 둠


    이동시키는 법 rename
    
    예시)
    fs.promises.rename('./test-new-new.txt','./test.txt')
    .then(()=> {console.log('Done!')})
    .catch((error)=> {console.log(error)})
*/


const fs = require('fs').promises
const path = require('path');

fs.mkdir('test/video')
.catch('이미 파일이 있습니다')
fs.mkdir('test/captured')
.catch('이미 파일이 있습니다')
fs.mkdir('test/duplicated')
.catch('이미 파일이 있습니다')



fs.readdir('./test')
.then((data) => {
    func1(data)
}).catch(console.error)



function func1(file) {
    for (let i of file) {
        if (i.includes('.png') || i.includes('.aae')) {
            fs.rename(`./test/${i}`, `./test/captured/${i}`)
        } else if (i.includes('.mov')  || i.includes('.mp4')) {
            fs.rename(
                `./test/${i}`, `./test/video/${i}`)
        } else if (i.includes('IMG_') && !i.includes('IMG_E')) {
            fs.rename(
                `./test/${i}`, `./test/duplicated/${i}`)
        }
    }
}
