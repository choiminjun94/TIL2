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

// 크롬 개발자 모드에서 실행
// Promise를 실패로 처리하는 reject 함수와 catch 메서드

let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let n = parseInt(prompt("10미만 숫자를 입력하시오"))
        if(n <= 10){
            resolve(n)
        }else{
            reject(`오류 : ${n}은 10 이상입니다.`)
        }
    }, 1000)
});

promise
.then(function(num){
    console.log(`2^${num} = ${Math.pow(2,num)}`);
})
.catch(function(error){
    console.log(error);
})

// 크롬 개발자 모드에서 실행
// then의 두번째 인수

let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let n = parseInt(prompt("10미만의 숫자를 입력"));
      if (n <= 10) {
        resolve(n);
      } else {
        reject(`오류 : ${n}은 10이상입니다.`);
      }
    }, 1000);
  });
  
  promise.then(
    //처리가 성공적으로 끝났을 때 호출되는 콜백 함수
    function (num) {
      console.log(`2^${num}=${Math.pow(2, num)}`);
    },
    //처리가 실패로 끝났을 때 호출되는 콜백 함수
    function (error) {
      console.log(error);
    }
  );
  