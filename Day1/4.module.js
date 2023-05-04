

//require(): 다른쪽에 있는 모듈을 가져와서 사용 
const counter = import('./counter.js')

counter.increase;
counter.increase;
counter.increase;
counter.increase;
console.log(counter.getCount);