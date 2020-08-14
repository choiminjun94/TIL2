//객체 리터널로 객체 생성하기
let card = {suit: "하트", rank:"A"}

console.log(card.suit); // 하트 
console.log(card);

// 값추가 하기
card.value = 14;
console.log(card);

delete card.value;
console.log(card);

//회원 정보 표현하는 객체 
let person = {
    name : "최민준",
    age : 27,
    sex : "male"
}

console.log(person);

//Date 생성자 
let date = new Date(2008,5,10);
console.log(date);

//Function 생성자
let square = new Function("x", "return x * x");
console.log(square);

//배열 리터널 
let a = [2, , 5]
console.log(a);
console.log(a["5"]);

//length 프로퍼티
let b = [2,3,4,5]
console.log(b.length);

//추가 
let c = ["a","b","c"]
c[3] = "d"
console.log(c);
//배열 끝에 추가하가
c.push("f")
console.log(c);
//삭제
delete c[1]
console.log(c);

