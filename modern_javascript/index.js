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