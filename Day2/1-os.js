const os = require('os');


//End of line
console.log(os.EOL === '\n')       //mac os에서만 true / window false

//enter키 쳐져있는걸 이걸로 확인 해야함
console.log(os.EOL === '\r\n')     //mac os에서만 false / window True


console.log(os.totalmem());     //총 메모리
console.log(os.freemem());      //현재 사용량 제외 잔여 메모리
console.log(os.type());         //운영체재 타입
console.log('============================')
console.log(os.userInfo());
console.log('==================')
// console.log(os.cpus()); //cpui
console.log(os.homedir());
console.log(os.hostname());
