//함수 내의 this
function hello() {
    console.log(this)
    console.log(this === global)
}

hello(); //global이 출력

console.log('============================')

//클래스 내 this
class A {
    constructor(num) {
        this.num = num
    }
    memberFunction() {
        console.log('---- object------')
        console.log(this);
    }
}

const a = new A(10)
a.memberFunction();

console.log('---global scope----')
console.log(this)

//프로그램 logic이 아니라, 미리만들어 놓은 파일의 정보를 저장해 놓은 곳이 this
console.log(this === module.exports)  //true 
