


console.log(global);


global.hello = () =>{
    //console.log('hello');
    global.console.log('Hello')
}



//두개 같음(global 생략 가능)
console.log()
global.hello(); 
hello();


