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
