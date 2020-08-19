let objA ={
    name : "Tom",
    sayHello: function(){console.log("Hello!" + this.name);}
}
let objB = {
    name : "Huck"
};
objB.__proto__=objA
let objC = {};
objC.__proto__=objB;
objC.sayHello();

//new 연신지
function Circle(center, radius){
    this.center = center
    this.radius = radius;
}
Circle.prototype.area = function(){
    return Math.PI*this.radius*this.radius
};

let c = new Circle({x:0, y:0}, 2.0);

let newObj = {};

newObj.__proto__ = Circle.prototype;

Circle.apply(newObj, arguments)
return new Object;

//isPrototypeOf 연산자
function F() {};
let obj = new F();
console.log(obj instanceof F);
console.log(obj instanceof Object);
console.log(obj instanceof Date);

//instanceof 연산자는 인스턴스가 생성자의 포로토타입 객체를 상속받았는지 확인

//isPrototypeOf 메서드

function F() {};
let obj = new F();

console.log(F.prototype.isPrototypeOf(obj));
console.log(Object.prototype.isPrototypeOf(obj));
console.log(Date.prototype.isPrototypeOf(obj));

//접근자 프로퍼티

let person = {
    _name: "Tom",
    get name(){
        return this._name;
    },
    set name(value){
        let str = value.charAt(0).toUpperCase()+value.substring(1);
        this._name = str;
    }
};

console.log(person.name);
person.name = "huck";
console.log(person.name);


//접근자 프로퍼티2 get, set
let point = {
    x : 1.0,
    y : 1.0,
    get r() {return Math.sqrt(this.x*this.x+this.y*this.y);},
    get theta(){return Math.atan2(this.y, this.x)},
    set polarCoordinates(pc){
        this.x = pc.r*Math.cos(pc.theta)
        this.y = pc.r*Math.sin(pc.theta)
    }
};

console.log(point.r);
console.log(point.theta);

//in 연산자
let person = {name : "Tom"}
console.log("name" in person); //이 객체가 소유한 프로퍼티
console.log("age" in person); // 프로퍼티가 없다.
console.log("toString" in person); // person은 toString을 상속

//hasOwnProPerty메소드

let person = {name: "Tom"};
console.log(person.hasOwnProperty("name")); // true : 이 객체가 소유한 프로퍼티 
console.log(person.hasOwnProperty("toString")); // false : 상속받은 프로퍼티

//propertyEnumerable 메소드

let person1 = {name : "Tom", age: 17}
let person2 = Object.create(person1);
person2.name = "Huck";

console.log(person2.propertyIsEnumerable("name")); 
//true : 이 객체가 소유한 열거가능 프로퍼티
console.log(person2.propertyIsEnumerable("age")); 
// false : 상속받은 프로퍼티
console.log(Object.prototype.propertyIsEnumerable("toString"));
//false : 열거할 수 없는 프로퍼티

//for/in문
//1
let person1 = {name : "Tom", age : 17};
let person2 = Object.create(person1)

person2.name = "Huck";
for(let p in person2) console.log(p);

//2.
let a = [0, 2, 4, 6, 8]
a.name="evens";
for(let i in a) console.log(i);

// Object.keys 메서드
let group = {groupName: "Tennis circle"}
let person = Object.create(group);
person.name = "Tom";
person.age = 17
person.sayHello = function(){console.log("Hello!" +this.name);}
Object.defineProperty(person, "sayHello", {enumerable: false});
console.log(Object.keys(person));

//JSON

JSON.stringify({}); // '{}'
JSON.stringify(3.14) // '3.14'
JSON.stringify("abc") // '"abc"'
JSON.stringify(true)
JSON.stringify([2,4,null])