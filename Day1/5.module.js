
// js파일 안에 모든 함수 가져오기

// import * as counter from './counter2.js'
// counter.increase();
// counter.increase();
// counter.increase();
// counter.increase();
// counter.increase();

// console.log(counter.getCount());


//원하는 것만 가져와서 사용하기
import { increase, getCount } from "./counter2.js"; 

increase();
increase();
increase();
increase();

console.log(getCount());