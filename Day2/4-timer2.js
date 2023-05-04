console.log('code1');

console.time('timeout 0')

setTimeout(() => {
    console.log('settimeout: 0')
    console.timeEnd('timeout 0')
}, 0);

console.log('code2');

//등록된 콜백함수를 실행
setImmediate(()=>{
    console.log('setImmediate')
},0)

console.log('code3')

//process는 static으로 만들어져있는 내장 모듈 (안해도 된다)
process.nextTick(()=>{
    console.log('process.nextTick')
})


//결과 code1 > code2 >code3 > process.nextTick >settimeout: 0 > setImmediate

////비동기식임으로 순서가 바뀔수 있음(settimeout과 setImmediate 사이에)