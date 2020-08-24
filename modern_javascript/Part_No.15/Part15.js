// 비동기 처리를 간결하게 작성하는 Promise

let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("A");
        resolve();
    },1000)
});

promise.then(function(){
    console.log("B");
})
// 1초가 지나고 A가 표시되고 나중에 B가 표시

//Promise를 종류시키는 resolve함수와 then 메소드
// 크롬 계발자 모드 console에 입력
let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let name = prompt("이름 입력");
        resolve(name);
    },1000)
});

promise.then(function(name){
    console.log("안녕하세여, " +name+ "님!");
    
})