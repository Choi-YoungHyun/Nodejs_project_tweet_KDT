// Node Project Manager
// https://www.npmjs.com/
// 노드js 라이브러리는 오픈소스여서 자주 애용하는 사이트다

// package.json 만들기
// [문법] npm init
// npm i -y: 기본 설정으로 만들기

// 패키지이름 -> 버전 -> 설명 -> 엔트리 포인트(최우선적) -> test command -> git repository -> keywords -> author -> license

// 버전 (1.0.0) = 해석: 대규모 업데이트 / 기능 추가 / 버그 


//cf) index.html인 이유 = 닷홈이 그냥 정한 것 (최우선적으로 index.html를 찾아라(entry point라고 함))


//npm script 안에 
//      (기본 명령어)
//    "start": "node 1-npm" 
//start라는 명령어를 넣었을 때 저 노드 파일을 실행하겠다.
//[실행방법]: npm start

// 명령어를 추가해보자
// "younghyun": "node 1-npm" = 해석: younghyun이란 명령어를 실행하면 node 1-npm을 실행해라
// [실행방법] npm run younghyun


console.log('npm  배우기!')
console.log('노드몬 배우기 !!')


//npm i express (express 모듈을 설치하자)
//dependence(상호작용하는 라이브러리를 알아서 다운)

//nodemon 설치하기
// npm i nodemon --save-dev (개발툴로 쓰겠다.라는 뜻)
// 사용하기
//1.package.js 이동
//2.start 명령어를 nodemon js파일명 으로 변경
//3.cmd 창에 npm start 실행
//결과 해당 js파일의 변경사항을 라이브로 볼 수 있다.