/* 
    bcrypt
    - 패스워드 암호화 알고리즘
    - 단방향 해싱 함수(해싱: 고정된 길이로 인코딩하는 것)
    - ex) 1234 ->asdasdsa21312cas 가능 (반대 복호화는 불가..)
    
    - 분류 : Alg + Cost + Salt + Hash 로 나뉜다.

    설치
    npm i bcrypt
*/


const bcrypt = require('bcrypt');
const password = 'abcd1234';
const hashed = bcrypt.hashSync(password,10) // 10번 알고리즘을 실행해 달라

console.log(`password: ${password}, hashed: ${hashed}`)
//결과: password: abcd1234, hashed: $2b     $10     $697D3aph6EIGKXx5fQtqwupoV8nn5Fen7qk9bw. KixWwBMYeBm7Tq
//                                  Alg     Cost    Salt                                        Hash



//해쉬와 비교하는 메소드
const result = bcrypt.compareSync('abcd1234',hashed)
console.log(result)