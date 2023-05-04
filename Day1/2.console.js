console.log('로딩중........')
console.clear();

//개발시 콘솔 사용법
console.log('log')
console.log('info')
console.log('warn')
console.log('error')

//assert(조건을 만족하지 않으면 에러 메세지를 출력)
console.assert(2 === 2, '두 값이 같아요!'); //값이 출력X
console.assert(2 === 3, '두 값이 달라요 !') //값이 출력

const user = {userid: 'apple',username:'김사과',age:20, company:{name:'SK',address:'서울시 중구'}}

console.log(user)

//console.table(테이블 형식으로)
console.table(user)
console.log('=============================')


//console.dir
console.dir(user,{showHidden: true,depth:0})
console.dir(user,{showHidden: true,depth:0, colors: false})
console.log('==========================')

// 실행시간 확인(console.time  +  console.timeEnd)

console.time('for loop'); 

for(let i=0;i<10;i++){
    console.log(i);
}
console.timeEnd('for loop');


//함수 실행 카운트(console.count)
function func1(){
    console.log('func1()이 실행 !')
    console.log('===================')
    console.count('func1 function')
}

function func2(){
    console.log('func2()이 실행 !!')
}

func1()
func2();
func1();

//console.countReset('콘솔의 문구');
console.countReset('func1 function');
func1();

//trace 사용법
function func3(){
    func4()
}

function func4(){
    func5()
}

function func5(){
    console.log('func5()가 실행되었다!')
    console.trace();
}

func3();

