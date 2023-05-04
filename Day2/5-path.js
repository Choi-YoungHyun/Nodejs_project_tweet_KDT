const path =require('path');


//리눅스와 mac은 posix라는 주소 형태를 사용: users/temp/5-path.js
//window 경우: 'C:\\temp\\5-path.js/

console.log(__dirname) 
console.log(__filename)


console.log('======================')
console.log('각각 경로를 구분자가 무엇인지 알려주는 것'+ path.sep)
console.log('구분획자를 알려준다.'+ path.delimiter)

console.log('======================')
//파일 이름만 가져오기
console.log(path.basename(__filename))
//파일 이름에서 확장자 빼고 가져오기
console.log(path.basename(__filename,'.js')) 
//파일이 존재하는 디렉토리 알아오는 것 
console.log(path.dirname(__filename))
//확장명 가져오기
console.log(path.extname(__filename))




//파일 경로를 객체화 시켜 가져온다.
const parsed = path.parse(__filename)
console.log(parsed)
console.log(typeof(parsed))

//따로 따로 가져오기
console.log(parsed.dir)
console.log(parsed['dir'])

console.log(parsed.base)
console.log(parsed['base'])

console.log('======================================')

//문자열로 바꾸기
const str = path.format(parsed)
console.log(str)
console.log(typeof(str))


console.log('======================================')

//절대 경로인지 확인 하는 법 
console.log('절대경로 :' , path.isAbsolute(__dirname))
console.log('상대경로 :' , path.isAbsolute('../'))

console.log('======================================')

// 상대 경로 -> 절대 경로로 만들어주는 기능
console.log(path.normalize('./nodejs///////sub///123.js'))


console.log('==================간단한 문제===================')
//C:\KDT_0302\Nodejs\Day2\images 만들기
//방법 1
console.log(__dirname + path.sep + 'images')
//방법 2
console.log(path.join(__dirname,'images'))

