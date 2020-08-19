// function norm(x){
//     let sum2 = sumSquare();
//     return Math.sqrt(sum2);
//     function sumSquare(){
//         sum = 0;
//         for(let i = 0; i<x.length; i++) sum += x[i]*x[i];
//         return sum;
//     }
//     let a = [2,1,3,5,7]
//     let n = norm(a);
//     console.log(n);
// }

// function fact(n) {
//     if(n<=1) return 1;
//     return n*fact(n-1);
// }
// fact(5); // 120


// function hanoi(n, a, b, c) {
//   if (n < 1) {
//     return;
//   }
//   hanoi(n - 1, a, c, b);
//   console.log(n + "번째 원반:" + a + "->" + c);
//   hanoi(n - 1, b, a, c);
// }
// hanoi(4, "A", "B", "C");

// var tom = {
//   name: "Tom",
//   sayHello: function () {
//     tom.sayHello();

//     console.log("Hello" + this.name);

//     let huck = { name: "Huck" };
//     huck.sayHello = tom.sayHello; // Hello Huck
//   },
// };


//apply , call
// function say(greestings, honorifics) {
//   console.log(greestings + " " + honorifics + this.name);
// }

// let tom = { name: "Tom Sawyer" };
// let becky = { name: "Becky Thatcher" };

// say.apply(tom, ["Hello!", "Mr."]);
// say.apply(becky, ["Hi!", "Ms."]);
// say.call(tom, "Hello", "Mr.");
// say.call(becky, "Hi!", "Ms.");

function say(greestings,honorifics){
    console.log(greestings + " "+honorifics +this.name);
}

let tom = {name : "Tom Sawyer"};
let sayTom = say.bind(tom);
sayTom("Hello", "Mr.")

// sayTom함수를 호출하면 항상 this가 객체tom을 가리킵니다. 
// 이처럼 say.bind(tom)은 tom객체를 함수 say의 this로 설정한 새로운 함수를 만들어서 반환