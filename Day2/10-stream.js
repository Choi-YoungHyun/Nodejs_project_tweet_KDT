const fs = require('fs');
const { encode } = require('punycode');

const readStream = fs.createReadStream('./file.txt',{
    //highWaterMark: 8 (8byte씩 읽어가겠다. 기본값 64KB)
    //encoding: utf-8

    // highWaterMark:8,
    encoding : 'utf-8'
})//파일에서 읽어올때 스트림해보겠다.(어떻게 읽을지, 어떻게 쪼갤지.. 등등)

const beforeMem = process.memoryUsage().rss
const data = [];


readStream.on('data', (chunk)=>{
    console.log(chunk);
    console.count('data');
    readStream.close();
})

readStream.on('close', ()=>{
    const afterMem = process.memoryUsage().rss;
    const diff = afterMem-beforeMem
    const consumed = diff/1024/1024

    console.log(diff)
    console.log('==================')
    console.log('Consumed Memory:',consumed,'MB')
}) 
//data이벤트가 발생했을 때, 뒤에 함수로 처리해라