function buyAsync(mymoney){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
          let payment = parseInt(prompt("지블하고자 하는 금액을 입력"))
          let balance = mymoney - payment;
          if(balance > 0){
              console.log(`${payment}원을 지불했습니다.`);
              resolve(balance)
          }else{
              reject(`잔액은 ${payment}원 입니다. 구매 할 수 없습니다.`)
          }
      },1000)  
    })
}
buyAsync(500)
    .then(function(balance){
        console.log(`잔액은 ${balance}원 입니다.`);
    })
    .catch(function(error){
        console.log(error);
    })