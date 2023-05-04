let num = 1;
const interval = setInterval(() =>{
    console.log(num++)
}, 1000) //원래 window꺼  현재는 global

//멈추기 ctrl + c


setTimeout(()=>{
    console.log('Timeout!');
    clearInterval(interval)     //변수 interval은 setInerval()의 ID값이 등록
},5000)