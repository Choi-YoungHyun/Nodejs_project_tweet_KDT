
//process는 static으로 만들어져있는 내장 모듈 (안해도 된다)
const process = require('process');


//프로퍼티이다 !
console.log(process.execPath); //현재 노드 실행 경로
console.log(process.version);

console.log(process.pid);  //운영체제에서 프로세스에게 번호를 할당받는다. 그 번호를 나타냄

console.log(process.ppid); // 부모의 프로세스 번호 

console.log(process.platform);

console.log('=============================')

console.log(process.env); 
//env = 환경변수 : 어디서나 실행될 수 있게 만들어주는 변수

console.log('=============================')

console.log(process.uptime()); 
// 실행되면서 걸린 시간

console.log(process.cwd());
//현재 파일 경로

console.log(process.cpuUsage());
//파일의 용량 (시스템과 유저에서 사용했을 때 용량)



//메인스레드
//(전체 스텍에 있던게 실행되고 나서(위에 코드) -> 큐에 들어있는 콜백함수가 실행된다.)
// 아무리 0초여도
setTimeout(() => {
    console.log('콜백함수는 큐에 들어가 있다가 전체 스텍이 실행 된 후 실행 된다 !: setTimeout')    
}, 0);

//우선순위를 가지게 해주는 메소드
process.nextTick(() =>{ 
    console.log('우선순위를 가지게 해주는 메소드 : process.nextTick()')
})

process.nextTick(() =>{ 
    console.log('우선순위를 가지게 해주는 메소드 : process.nextTick()')
})




for (let i=0; i<1000; i++){
    console.log('for loop' , i);
}

//결과: setTimeout()이 제일 마지막 실행

