//수정 메서드
//Push 메서드
let a = ["a","b","c"];
a.push("d");
console.log(a); // [ 'a', 'b', 'c', 'd' ]

let a = ["a","b","c"];
a.push("d","e");
console.log(a); // [ 'a', 'b', 'c', 'd', 'e' ]

//pop 메서드
let a = ["a","b","c"]
a.pop();
console.log(a); // [ 'a', 'b' ]

//shift 메서드
let a = ["a","b","c"];
a.shift();
console.log(a); // [ 'b', 'c' ]

//unshift 메소드
let a = ["a","b","c"];
a.unshift("x");
console.log(a); // [ 'x', 'a', 'b', 'c' ]

//splice 메소드
let a = ["a","b","c","d","e"];
a.splice(2)
console.log(a); // [ 'a', 'b' ]

let a = ["a","b","c","d","e"];
a.splice(-3)
console.log(a); // [ 'a', 'b' ]

let a = ["a","b","c","d","e"];
a.splice(1,0, "x","y")
console.log(a); // ['a', 'x', 'y','b', 'c', 'd','e']

//sort 메소드
let a = [1,5,4,3,2];
a.sort(function(a,b) {return a-b})
console.log(a); //[ 1, 2, 3, 4, 5 ]

//접근자 메서드

//join
let a = ["A","B","C"];
a.join("+")
console.log(a); // "A+B+C"

//concat 
let a = ["a","b","c"]
a.concat(["d","e"]);
console.log(a); // ["a","b","c","d","e"]

//slice
let a = ["a","b","c"]
a.slice(1);
console.log(a); // a,c

//indexOf와 lastindexOf
let a = ["a","b","c","c","d"]
a.indexOf("c");// 2

a.lastIndexOf("c")// 3

 //forEach
 let a = [1,2,3,4,5]

//배열의 합을 구한다.
let sum = 0;
a.forEach(function(value) {sum += value})
console.log(sum);
//각 배열 요소의 제곱을 구한다.
a.forEach(function(v,i,a){a[i] = v*v})
console.log(a);
// 15
// [ 1, 4, 9, 16, 25 ]

//map
let a = [1,2,3,4,5];
let b = a.map(function(x) {return 2*x})
console.log(b);
//[ 2, 4, 6, 8, 10 ]


let a = [1,4,9,16,25]
let b = a.map(Math.sqrt) //sqrt는 제곱근을 구함
console.log(b);
//[ 1, 2, 3, 4, 5 ]

let persons = [
    {name: "Tom1", age: 17},
    {name: "Tom2", age: 18},
    {name: "Tom3", age: 16}
];

let names = persons.map(person => person.name);
let ages = persons.map(person => person.age)
console.log(names);
console.log(ages);
// [ 'Tom1', 'Tom2', 'Tom3' ]
// [ 17, 18, 16 ]

//reduce
let a = [1,2,3,4,5]

a.reduce(function(prev, value){return prev + value}, 0) // 15
console.log(a);
a.reduce(function(prev, value){return prev + value}) // 15
console.log(a);

