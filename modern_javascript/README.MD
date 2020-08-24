0814
====================

2장
====================

3장
====================

4장  
객체에 포함된 데이터 하나를 가리켜 객체의 프로퍼티 라고 한다.
프로퍼티의 이름 부분을 프로퍼티 이름 OR 키라고 한다.
let card = {suit: "하트", rank:"A"}
{....} 부분이 바로 객체 리터널이며 객체 변수 card에 대입

값추가 하기 
변수이름에 .key을 입력후 원하는 것을 입력하면 값을 넣을수 있다. 

메서드 
프로퍼티에 저장된 값의 타입이 함수면 그 프러포티를 메소드 라고 한다. 

함수의 장점 
1. 재사용 가능
2. 수정 간단

생성자
Date 생성자 

Function생성자
function은 함수를 생성하는 내장 생성자이다. 

배열 
배열 리터널 
- 없는 것을 출력 하면 undefined가 출력

length 프로터티

요소 추가와 삭제 
추가

배열 끝에 추가
push

삭제
delete
====================

5장 표현식과 연산자 
그룹 연산자 
우선 순위 ()안에 들어 있으면 표현식이 가장 먼저 평가
2+(2*4) = 10
*가 +보다 우선순위로 평가 된다.
(24/6) * 4+2 = 18

문자열 제어 
- 문자열 연결
- 문자열을 조작하는 메소드 
====================


6장 웹브라우저에서의 입출력 
대화 상자
- 경고창 (alert)
- 입력 대확창 (prompt) 
prompt가 반환하는 값은 문자열이다.
숫자값을 구하려면 perseInt나 parseFloat메소드를 이용해 숫자로 바꾸어줌
- 확인 대화 상자(confirm)

console객체의 메소드
- console.dir : 객체의 프로퍼티를 나열 
- console.time : 타이머 이름을 뜻하는 문자열을 인자로 넘겨 호출
- console.timeEnd : 실행시간을 측정하는 작업이 끝난 후에 타이머 이름을  인수로 넘겨서 호출

이벤트 처리기 등록 및 타이머 알아보기

이벤트란 사용자가 버튼을 클릭하는 행위처럼 단말기와 애플리케이션이 처리 할 수 있는 동작이나 사건을 뜻함

이벤트 주도형 프로그램이란 이벤트가 발생할 때까지 기다렷다가 이벤트가 발생했을 때 미리 등록해 둔 작업을 수행

HTML요소의 속성에 이벤트 처리기 등록하기
예제 1번

DOM에서 가져온 HTML요소에 이벤트 처리기 지정하기
DOM은 JS등의 프로그램이 HTML요소를 조작할 수 있게 하는 인터페이스 입니다. 
DOM의 주요 객체
- window : window객체라고 부르며 웹 브라우저 윈도우 하나 또는 탭 하나를 가리킨다.
- document : document객체라고 부르며 HTML문서 전체를 가리킵니다. HTML 문서에서 HTML요소 객체를 가져오거나 HTML요소를 새로 만드는 등 HTML문서 전반에 걸친 기능제공 

- 요소 객체 : HTML문서의 요소를 가리키는 객체
Act6.html 2번 예제
1. Dom에서 이벤트 처리기를 등록하는 가장 큰 목적은 HTML과 JS를 분리 하기 위해서 임 - 가독성과 유지보수를 높여줌
구현 하기 위해서 script요소를 head요소의 자식 요소로 배치 
DOM을 사용하면 body요소의 바깥에서 body요소 안에 있는 HTMl요소를 조작

2. let button = dicument.getElemnetId("button")메서드로 요소 객체를 가져온다. 
전달 받은 인수를 id속성의 값으로 가지고 있는 HTML요소의 요소객체를 반환 && 요소를 찾지 못하면 null을 반환

3. 이벤트 처리기 프로퍼티에 이벤트 처리기로 동작할 함수를 등록

4. 이벤트 처리기 제거
button.onclick = displayTime; 대신 밑의 코드를 입력
button.onclick = null
console.log(button.onkeydown);

타이머 
지정된 시간이 흐른 후에 함수 실행하기 : setTimeout
ex) 
setTimeout(function(){
    console.log(new Date());
},2000)

지정된 시간마다 반복해서 실행하기 : setInterval
ex)
setInterval(function(){
    console.log(new Date());
},1000)

HTML 요소의 innerHTML 프로퍼티로 읽고 쓰기
Act6.html 3번 예제

폼 컨트롤의 입력 값 읽기
Act6.html 4번 예제

=============================

8장 함수
1. 함수 선언문으로 정의 
function a(x) {return x*x}

2. 함수 리터널로 정의하는 방법
let test = function(x) {return x*x}

3. function 생성자로 정의하는 방법
let test = new function("x", "return x*x")

4. 화살표 함수 표현식으로 정의하는 방법
let test = x => x*x;

중첩 함수
특정 함수의 내부에 선언된 함수를 가리켜 그 함수의 중첩함수 라고 한다.
중첩함수 또는 지역함수 또는 내부함수 라고도 한다.

함수 호출
1. 함수 호출
let s = square(5);

2. 메소드 호출
객체의 프로퍼티에 저장된 값이 함수 타입일 때는 그 프로퍼티를 메서드라고 부른다. 메서드를 호출할 때는 그룹 연산자인 ()를 붙여서 호출합니다. 
obj.m = function(){.....};
obj.m();

3. 생성자 호출
함수 또는 메소드를 호출할 때 함수의 참조를 저장한 변수 앞에 new키워드를 추가하면 함수가 생성자로 동작 \
let obj = new Object();

4.call, apply를 사용한 간접호출
함수의 call과 apply메소드를 사용하면 함수를  

함수 즉시 실행 
익명 함수를 실행할 때는 익명 함수의 참조를 변수에 할당한 후에 그룹 연산자인()를 붙여서 실행
let f = function() {....};
f()

JS에서 익명함수를 정의하고 곧바로 실행하는 '즉시 실행 함수'라는 구문이 잇다. 
1. (function() {....})();
ex) (function(a,b) {....})(1,2);

2. (function() {....}());
ex) (function fact(n){
    if(n<=1) return 1;
    return n*fact(n-1)
})(5);

인수의 생략
함수의 정의식에 작성된 인자 개수보다 인수를 적게 전달해서 함수를 실행하면 인수에서 생략한 인자는 undefined가 된다.
function f(x,y){
    console.log("x =" +x+ ", y= "+y)
};
f(2) // x=2, y=undefined

호출할 때 인수를 생략할 수 있는 함수를 정의할 수 있다. 이를 구현하려면  함수 정의식에서 인수를 생략했을 때 사용할 초깃값을 설정해야 한다.
function multiply(a, b){
    b = b || 1; //b의 값을 1로 설정
    return a*b;
}
multiply(2,3); // 6
multiply(2); // 2

재귀함수 
함수가 자기 자신을 호출하는 행위를 재귀호출 이다. 재귀호출을 수행하는 함수를 재귀함수라고 한다.

실행 가능한 코드
- 전역코드
- 함수코드
- eval코드

가장 중요한 컴포넌트는 렉시컬 환경 컴포넌트, 변수 환경 컴포넌트, 디스 바인딩 컴포넌트

this 값
함수가 호출되어 실행되는 시점에 this 값이 결정

1. 최상위 레벨 코드의 this
전역 객체를 가리킨다. 실행 문맥이 초기화될 때 그안의 컴포너트가 전역환경을 가리키도록 초기화 된다.

2. 이벤트 처리기 안에 있는 this
이벤트 처리기 안에 있는 this는 이벤트가 발생한 요소 객체를 가리킨다.
15장에 설명

3. 생성자 함수 안에 있는 this
사용자가 정의한 생성자 함수 안에 있는 this는 그 생성자로 생성한 객체를 가리킵니다.

4. 생성자 prototype 메서드 안에 있는 this
생성자 prototype 메서드 안에 있는 this는 그 생성자로 생성한 객체를 가리킨다.

5. 직접 호출한 함수 안에 있는 this 
함수를 최상위 레벨의 코드에서 호출하면 함수 안에 있는 this가 전역 객체를 가리킵니다.

function f(){console.log(this); }
// 함수 f를 호출할 때 함수 앞에 아무것도 붙이지 않으면
// 함수 f가 속한 실행 문맥의 디스 바인딩 컴포넌트가 전역 객체를 가리킨다.

f(); // -> window

객체로서의 함수

함수의 프로퍼티
caller -> 현재 실행 중인 함수를 호출한 함수
length -> 함수의 인자 개수
name -> 함수를 표시할 때 사용하는 이름
prototype -> 프로토타입 객체의 참조

function.prototype의 프로퍼티
apply() -> 선택한 this와 인수를 사용하여 함수를 호출한다. 인수는 배열 객체
bind() -> 선택한 this와 인수를 적용한 새로운 함수를 반환
call() -> 선택한 this와 인수를 사용하여 함수를 호출. 인수는 쉼표로 구분한 값
constructor -> function 생성자의 참조
toString() -> 함수의 소스코드를 문자열로 만들어 반환

apply와 call 메소드 
apply의 인수는 배열이고 call의 인수는 쉼표로 구분한 값의 목록

bind메서드

function객체의 bind 메소드는 객체에 함수를 바인드 한다. 

callback 함수

함수 f의 인수로 넘겨진 함수인 g가 콜백 함수 입니다. 이렇게 작성하면 호출한 함수 f안에서 특정 콜백 함수를 실행시켜서 그 콜백 함수에 제어권을 부여 할수 있다. 

- 콜백 함수는 함수를 호출할 때 무언가 새로운 일이 생기거나 그 함수의 실행이 끝나면 지정한 콜백 함수를 실행한 주도록 함수에 요청햐여 할 때 사용
- 이때는 콜백 함수의 주체는 어디까지나 함수를 호출한 호출자 이다. 
- 호출자가 목적에 따라 어떠한 콜백 함수를 사용할 것인지 정합니다. 호출된 함수는 콜백함수를 실행하지만 그 콜백 함수가 작업하는 내용에는 관여하지 않는다.

=============================

9장 객체

객체의 생성
프로토타입
생성자 안에서 메소드를 정의하는 방식의 문제점
여러개 생성하면 같은 작업을 하는 메서드를 인스턴스 개수 만큼 생성하게 되며 결과적으로 그 만큼의 메모리를 소비

프로토타입  객체
JS에서는 함수도 객체이므로 함수 객체이므로 함수 객체가 기본적으로 prototype프로퍼티fmf 갖고 잇다. 
function F(){};
console.log(F.prototype); // -> Object {}

함수의 prototype 프로퍼티가 가리키는 객체를 그 함수의 프로토타입 객체라고 한다.
prototype프로퍼티는 기본적으로 빈 객체를 가리킨다.

프로토타입 상속
상속
일반적으로 특정객체가 다른 객체로부터 기능을 이어받는 것 이다.
자바스크립트에서는 클래스가 아닌 객체를 상속

상속 이유
상속을 사용하면 이미 정의된 프로퍼티와 메소드의 코드를 재사용할 수 있고 새로운 기능을 추가해서 확정된 객체를 만들 수도 있다.

프로토타입 체인 
내부 프로퍼티[[prototype]]
모든 객체는 내부 프로퍼티[[prototype]]을 가진다.
함수 객체의 prototype프로퍼티와는 다른 객체 입니다. 
ECMAScript6부터는 __proto__라고 한다. // 밑에서 부터는 __proto__라고 쓰겠다. 

프로토타입 체인
객체의 __proto__ 프로퍼티는 그 객체에게 상속을 해 준 부모 객체를 가리킨다. 따라서 객체는 __proto__프로퍼티가 가리키는 부모 객체의 프로퍼티를 사용할 수 있다. 

프로토타입 상속을 하는 객체 지향 언어를 가리켜 프로토타입 기반 객체 지향 언어

프로토타입 가져오기
객체의 프로토타입은 Object.getPrototypeOf 메소드로 가져올수 있다. 
function F(){}
let obj = new F();
console.log(Object.getPrototypeOf(obj)); // ->Object{}

new 연산자의 역할
생성자를 new연산자로 호출해서 인스턴스를 생성하면 내부적으로는 어떤 작업은 밑에서 설명하겠다. 

프로토타입 객체의 프로퍼티
함수를 정의하면 함수 객체는 기본적으로 prototype프로퍼티를 갖게 된다.
constructor프로퍼티 [[prototype]](__proto__)을 가지고 있다.

Constructor프로퍼티
constructor 프로퍼티는 함수 객체의 참조를 값으로 갖고 있다.

function F(){};
console.log(F.prototype.constructor);

생성자와 생성자의 프로토타입 객체는 서로 참조한다. 서로 참조하지만 직접적인 연결 고리가 없다.

프로토타입의 확인
특정 프로토타입 객체가 그 객체의 프로토타입 체인에 포함되어 잇는지 확인하는 방법에는 instanceof연산자를 사용하는 방법과 isPrototypeOf 메서드를 사용하는 방법이 있다. 

isPrototypeOf 연산자

isPrototypeOf연산자는 지정한 객체의 프로토타입 체인에 지정한 생성자의 프로토타입 객체가 포함되어 있는지 판정.
isPrototypeOf연산자는 논리값을 반환하는 이항 연산자로 사용법은 다음과 같다. 

|| 객체 instanceof 생성자 ||

isPrototypeOf 메서드

isPrototypeOf 메서드는 특정 객체가 다른 객체의 프로토타입 체인에 포함되어 있는지 판정
|| 프로토타입객체.isPrototypeOf(객체) ||


Object.prototype

Object.prototype의 메서드는 모든 내장 객체로 전파되며 모든 인스턴스에서 사용할 수 잇다. 공부 이전에 Object 생성자와 Object 생성자의 프로퍼티와 메서드를 정리

Object 생성자
object 생성자는 내장 생성자로 일반적인 객체를 생성. Object 생성자를 인수 없이 실행하면 Object생성자는 빈 객체를 생성

let obj = new Object();

이는 객체 리터럴로 작성한 빈 객체와 완전 같다.
let obj = {};

인수에 값을 지정하면 그 값을 Object 객체로 변환한 인스턴스를 생성
let obj = new Object("ABC");

Object 생성자는 new 없이 호출해도 new를 붙여서 호출 했을 때와 같은 방식으로 동작.
let obj = Object(); // let obj = new Object()와 같다.

접근자 프로퍼티

프로퍼티의 종류
데이터 프로퍼티 : 값을 저장하기 위한 프로퍼티
접근자 프로퍼티 : 값이 없음. 프로퍼티를 읽거나 쓸 때 호출하는 함수를 값 대신에 지정할 수 있는 프로퍼티

접근자란 객체지향 프로그래밍에서 객체가 가진 프로퍼티 값을 객체 바깥에서 읽거나 쓸 수 있도록 제공하는 메서드를 말한다.

접근자 프로퍼티 하나에 대해 그 프로퍼티를 읽을 때의 처리를 담당하는 게터 함수와 쓸 때의 처리를 담당하는 세터 함수를 정의할 수 있다.
접근자 프로퍼티는 getter와 setter 중에서 하나만 정의 할 수도 있지만 모두 정의할 수 있다.

접근자 프로퍼티에 getter, setter를 정의하려면 function 키워드 대신 get, set키워드를 사용한 함수를 작성

프로퍼티의 속성

쓰기 기능(writable)
-
열거 기능(enumerable)
-
재정의 기능(configurable)
-

프로퍼티가 있는지 확인하기
in연산자
- in연산자는 객체 안에 지명한 프로퍼티가 있는지 검색하며, 그 검색 대상은 그 객체가 소유한 프로퍼티와 상속받은 프로퍼티 모두이다.

hasOwnProPerty메소드
- hasOwnProPerty메서드는 지명한 프로퍼티가 그 객체가 소유한 프로퍼티면 true를 반환하고 상속 받은 프로퍼티면 false를 반환. 

propertyEnumerable 메소드
- propertyEnumerable 메소드는 지정한 프로퍼티가 그 객체가 소유한 프로퍼티이며 열거할 수 있을 때 true를 반환한다.

프로퍼티의 열거

for/in문

Object.keys 메서드
Object.keys메서드는 지정한 객체가 소유한 프로퍼티 중에서 열거할  수 있는 프로퍼티 이름만 배열로 만들어서 반환합니다. 

JSON
json은 JS 객체를 문자열로 표현하는 데이터 포맷이다.
json을 사용하며 객체를 직렬화 할 수 있다.직렬화란 컴퓨터의 메모리 속에 잇는 객체를 똑같은 객체로 환원할 수 있는 문자열로 변환하는 과정이다.

표시 방법
JSON의 포맷은 JS의 리터럴 표시법에 기반을 두고 있다. 
객체 리터럴을 JSON 데이터로 바꾸면 다음과 같다. 
'{"name": "Tom", "age":17, "marriage":false, "data": [2,5,null]}'

JSON의 변환과 환원
JS객체를 JSON 문자열로 변환하기 : JSON.stringify
|| JSON.stringify(value[, replacer[, space]]) ||

첫번째 인수 인 value에는 JSON으로 변환할 객체를 지정. 두번째 인수 인 replacer에는 함수 또는 배열을 지정.
두번째 인수로 함수를 지정하면 문자열로 만다는 프로퍼티의 키와 값을 함수의 인수로 받아서 프로퍼티 값을 표현하는 문자열을 반환.

====================

10장 - 배열의 다양한 기능
배열의 메서드
Array타입 객체이며 Array.prototype의 프로퍼티를 상속 받는다.

수정 메서드
- push 메서드
push 메서드는 배열 마지막에 하나 이상의 요소를 추가한 다음에 그 배열의 길이를 반환

- pop 메서드
pop 메서드는 배열의 마지막 요소를 잘라내어 반환

- shift 메서드
shift 메서드는 배열의 첫번째 요소를 제거한 후 모든 배열 요소를 왼쪽으로 이동, 반환값은 삭제된 요소의 값이다.

- unshift 메소드
unshift 메소드는 배열 앞부분에 요소를 한개 이상 추가한 후 모든 배열 요소를 오른쪽으로 이동시킨고 반환값은 그 배열의  길이 이다.

- splice 메소드
splice 메소드는 특정 인덱스의 배열 요소를 갈아 끼울 때 사용하는 범용 메소드이다. 요소를 끼워 넣기만 할 수도 삭제만 할수도 있다.

- sort 메소드
sort 메소드는 배열 안의 요소를 정리한다. 
f(a,b) < 0
f(a,b) == 0
f(a,b) > 0

접근자 메서드
접근자 메서드는 배열을 다른 모습으로 가공한 새로운 배열을 반환하며 원래 배열은 수정하지 않는다.

*중요*  원래 배열 값은 수정되지 않는다 *중요*
- join 메소드
join 메소드는 배열의 모든 요소 값을 문자열로 바꾼 후에 인수롤 받은 문자로 연결해서 반환 한다. 
요소 값이 undefinde나 null일 때는 그 요소 값을 빈 문자로 간주

- concat 메서드
concat 메서드는 인수로 받는 값을 그 배열의 요소롤 추가해서 새로운 배열을 생성한다. 받은 인수가 배열이면 펼친 후에 배열에 추가

- slice 메서드
slice 메서드는 배열이 일부 요소를 제거한 새로운 배열을 반환한다. 

- indexOf와 lastindexOf 메소드
배열 안에서 인수로 지정한 값을 검색해서 가장 먼저 찾은 요소의 인덱스를 반환, 찾지 못하면 -1을 반환

- toString과 toLocaleString 메소드
toString과 toLocaleString 메서드는 배열의 요소를 문자열로 변환하여 쉼표로 연결한 문자열을 반환
이 메서드는 Object.prototype에 있는 같은 이름의 메서드를 다시 정의한 것이다.

반복 메서드
반복 메서드는 배열의 모든 요소를 순회하며 특정한 작업을 수행하거나 특정 조건을 만족하는 요소를 가져올 때 사용하는 메 서드이다. 반복 메서드 대부분은 첫번째 인수로 함수의 참조를 받는 고차 함수이다. 
- 1 번째 인수(value): 현재 처리하고 있는 배열  요소의 값 
- 2 번째 인수(index): 현재 처리하고 있는 배열요소의 인덱스
- 3 번쨰 인수(array): 메서드가 적용되는 배열의 참조

forEach 메서드
forEach 메서드는인수로 받은 함수를 배열의 요소별로 한 번씩 실행. 그 함수에는 인수 세개(value, index, array)가 전달

map 메서드
map 메서드는 인수로 받은 함수를 배열의 요소별로 한 번씩 실행하며, 마지막에는 그 함수가 반환한 값으로 새로운 배열을 생성. map 메서드의 인수로 넘기는 함수는 반드시 값을 반환해야 한다.

reduce 메서드
reduce 메서드는 배열의 첫 번째 요소부터 마지막 요소까지의 합성 곱 처리를 한다. 합성 곱 처리란 배열 요소 하나를 함수로 처리한 후에 그 반환값을 다음 번 요소를 처리할 때 함수의 입력 값으로 사용하는 처리 방법을 말한다. 또한 마지막 요소를 처리한 함수가 값을 반환한다.

reduce 메서드의 인수
- callback: 합성 곱을 하는 함수
- initial : callback이 처음 호출 되었을 때의 첫번째 인수의 값

callback 함수는 다음과 같은 인수
- prev: 이전 요소를 처리한 함수의 반환값 또는 initial or 첫 번째 요소의 값
- value: 현재 처리하는 배열 요소의 값
- index: 현재 처리하는 배열 요소의 인덱스
- array: 메서드르 적용 중인 배열의 참조

비구조화 할당
비구주화 할당은 배열, 객체, 반복 가능 객체에서 값을 꺼내어 그 값을 별도의 변수에 대입하는 문장

배열의 비구조화 할당
1. 기본적인 사용법
- let [a,b] = [1,2]
- [a,b] = [2*a, 3*b] // a=2*a, b = 3*b와 같음
- [a,b] = [b,a]     // a값과 b값을 교환
우변의 값의 개수가 좌변 변수의 개수가 같을 필요는 없다. 남는 좌변의 변수에는 undefind가 할당 된다.

2. 나머지 요소
배열의 비구조화 할당을 할 때는 함수의 나머지 매개변수와 마찬가지로 전개 연산자인 ...을 사용하여 나머지 요소를 이용
[a,b ...rest] = [1,2,3,4] // a=1, b=2, rest=[3,4]
좌변의 ...rest부분이 나머지 요소이며, 변수 rest변수에는 할당되지 않은 우변의 남은 요소들이 배열로 할당

3. 요소의 기본값
벼열의 비구조화 할당을 할 때는 함수의 인수와 마찬가지로 기본값을 설정 할 수 있다. 
비구조화 할당하는 좌변의 변수에 undefined가 할당하면 undefined 대신에 기본값을 할당

[a=0, b=1, c=2] = [1,2]; // a=1,b=2,c=2와 같다.

4. 함수가 배열로 반환한 값을 비구조화 할당받기

function rotation(x,y,theta){
    let s = Math.sin(theta), c = Math.cos(theta);
    return [c*x - s*y, s*x + c*y]
}
let [a, b] = rotation(1,2 Math.PI/3)

객체의 비구조화 할당
1.기본적인 사용법
let {a: x, b: y} = {a: 1, b: 2} // x=1, y=2

let {a: x, b: y} = {a: 1, c: 2} // x=1, y=undefined

let {a: x, b: y} = {a: y, b: x} // x값과 y값 교환

2. 프로퍼터의 기본값
배열의 비구조화 할당을 할 때는 함수의 인수와 마찬가지로 기본값을 설정 가능 비구조화 할당하는 좌변의 변수에 undefined가 할당되면 그 대신에 기본값을 할당
{a: x=1, b: y=2, c: z=3} = {a: 2,b: 4} // x=2, y=4, z=3

3. 프로퍼티 이름 생략하기
좌변에는 변수 이름만 쉼표로 구분해서 작성할 수 있다.이때 프로퍼티 이름이 변수의 이름이 된다.
{a,b} = {a: 1, b: 2} //{a: a, b: b} = {a: 1, b: 2}
{a=1, b=2, c=3} = {a: 2, b: 4} // a=2, b=4, c=3

ArrayBuffer와 형식화 배열

ArrayBuffer 생성자
ArrayBuffer 생성자는 메모리에 고정 길이를 가진 인접한 영역을 확보
단, ArrayBuffer는 메모리에 영역을 확보하는 역할만 할 뿐 버퍼를 조작하는 메서드는 제공하지 않는다.

let buffer = new ArrayBuffer(1024)

console.log(buffer.byteLength) // 1024

Map

Map 객체는 데이터를 수집하여 활용하기 위한 객체. 값의 고유한 식별 정보인 '키'와 값의 쌍을 Map객체 안에 저장해서 사용. 
Map 객체 안에서 키는 고유한 값입니다. 따라서 Map 객체는 키로 값을 사상한 객체로 간주. 
Map 객체는 외부에서 키를 사용하여 원하는 값을 추가/삭제/검색할 수 있다.

- Map 객체에는 데이터를 수집하기 위한 다양한 메서드가 마련
- Object 객체는 키로 문자열만 사용할 수 있지만 Map 객체는 키 타입에 제안이 없다.
- Map 객체는 반복 가능하며 for/of 문으로 순회하면 키와 값으로 구성되 배열을 반환
- Map 객체는 데이터 개수를 size 프로퍼티로 구할 수 있다. 하지만 Object 객체는 프로퍼티 개수를 수동으로 계산

Map객체의 생성
Map객체는 Map 생성자 함수로 생성. 인수를 지정하지 않으면 데이터가 없는 비Map 객체가 생성

데이터 추가
set(key, value)

set 
set객체는 중복되지 않는 유일한 데이터를 수집하여 활용하기 위한 객체이다. 
set객체는 데이터 값의 단순 집합으로 간주. set객체는 외부에서 키를 사용하여 데이터 값을 추가/삭제/검색할 수 있다.
값의 데이터 타입에는 제한이 없다. 
객체 타입도 사용할 수 있고 원시 타입도 사용할 수 있다.

Set객체의 생성
set객체는 set 생성자 함수로 생성. 인수를 넘기지 않으면 데이터가 없는 빈 Set객체가 생성

초기 데이터를 인수로 지정해서 생성할 수도 있다. 이때의 초기 데이터는 값을 가지는 반복 가능한 객체이다.

====================

14장 
문서제어

DOM 트리
문서를 제어하는 API인 DOM의 개요를 설명
웹 페이지의 내용은 Document 객체가 관리. 웹 브라우저가 웹 페이지를 읽어 들이면 렌더링 엔진은 웹 페이지의 HTML 문서 구문을 해석하고 Document 객체에서 문서 내용을 관리하는 DOM트리
라고 하는 객체의 트리 구조를 만든다. 

DOM트리를 구성하는 객체 하나를 노드(Node)라고 한다. 기본적인 노드

문서 노드: 전체 문서를 가리키는 Document 객체. document로 참조
HTML 요소 노드: HTML 요소를 가리키는 객체 (즉 요소 객체라고 한다.)
텍스트 노드:  텍스트를 가리키는 객체 (즉 텍스트 객체라고 한다.)

노드 객체의 프로퍼티
- parentNode
- childNode
- firstNode
- lastNode
- nextSibling
- previousSibling
- nodeType
- nodeValue
- nodeName

HTML 요소의 트리
- childNodes
- parentElement
- firstElementChild
- lastElementChild
- nextElementSibling
- previousElementSibling
- childElementCount

주요 노드 객체
  노드의 종류    생성자     

- 문서 노드   | HTMLDoucument 
- 요소 노드   | HTMLElemnt
- 텍스트 노드  | Text
- 주석 노드   | Comment
- 속성 노드   | Attr

노드 객체 가져오기

id 속성으로 노드 가져오기

HTML 문서의 요소에는 id속성을 지정할 수 있습니다. id 속성 값은 문서에서 유일한 값이어야 한다. 따라서 id 속성 값으로 요소 하나를 가리킨다. 
id 값으로 요소 객체를 가져올 때는 getElementById 메서드를 사용한다. 

|| document.getElementById(id값) ||

요소의 이름으르 노드 가져오기
|| document.getElementsByTagName(요소의 태그 이름)

Class 속성 값으로 노드 가져오기
|| document.getElementsByClassName(class의_이름) ||

name 속성 값으로 노드 가져오기
|| document.getElementsByName(name 속성 값) ||

CSS 선택자로 노드 가져오기
h1
*
#title
h1[title]
h1[class="maintitle"]
input:checked
h1:hover
#title span
#title > sapn
body>h1:first-child
p, #title

|| document.quertSelectorAll("선택자") ||

|| document.quertSelector("선택자") ||

속성 값의 읽기와 쓰기

요소 객체의 프로퍼티로 요소의 속성을 읽고 쓰기

|| 요소 객체.속성 이름 ||

속성이 잇는지 확인하기
|| 요소 객체.hasAttribute(속성 이름) ||

속성 삭제하기
|| 요소 객체.removeAttribute(속성 이름) ||

전체 속성의 목록 가져오기
요소 객체에는 attributes 프로퍼티가 정의되어 잇다. 
이 프로퍼티는 NamedNodeMap 객체로 그 요소에 설정된 모든 속성의 속성 노드 객체가 담겨 있다. 
또한 NameNodeMap 객체는 유사배열 객체이며 읽기 전용이다. 

====================

15장
이벤트 처리

이벤트 처리기를 등록하는 방법

1. HTML 요소의 이벤트 처리기 속성에 설정하는 방법
<input type="button" onClick="changeColor();">

2. DOM요소 객체의 이벤트 처리기 프로퍼티에 설정하는 방법
let btn = document.getElementById("button")
btn.onclick = changeColor();

3. addEventListener 메서드를 사용하는 방법
let btn = document.getElementById("button")
btn.addEventListener("click", changeColor, false)

이벤트 리스너를 등록하고 삭제하는 방법
addEventListener로 등록한 함수는 이벤트 리스너라는 이름으로 부른다. addEventListener메서드를 이용하면 같은 요소의 같은 이벤트에 이벤트 리스너를 여러 개 등록할 수 있다. 

|| target.addEventListener(type, listener, useCapture) ||

구성 요소의 의미

- target : 이벤트 리스너를 등록할 DOM 노드
- type : 이벤트 유형을 뜻하는 문자열("click", "mouseup")
- listener : 이벤트가 발생했을 때 처리를 담당하는 콜백 함수의 참조
- useCapture : 이벤트 단계

useCapture는 다음 값 중 하나가 될 수 있다.

- true : 캡처링 단계
- false : 버블링 단계(생략했을 때의 기본값)

addEventListener를 사용해서 얻을 수 있는 장점
- 같은 요소의 같은 이벤트에 이벤트 리스너를 여러 개 등록할 수 있다. 
- HTML요소를 포함한 모든 DOM 노드에 이벤트 리스너를 등록할 수 있다. 

removeEventListener 메서드로 이벤트 리스너 삭제하기

|| target.removeEventListener(type, listener, useCapture) || 

이벤트 객체 

이벤트 처리기와 이벤트 리스너는 이벤트 객체를 인수 받는다.
ex) 

function changeColor(e){
    e.currentTarget.style.backgroundColor ="red";
}
이 함수의 인수 e가 이벤트 객체이다. e는 event를 나타내는 관례이다.

이벤트 객체의 공통 프로퍼티

- 프로퍼티             | 값의 타입       | 설명

- type                - 문자           - 이벤트 이름
- target              - 요소객체        - 이벤트가 발생한 요소
- currentTarget       - 요소객체        - 처리를 담당하는 이벤트 리스너가 등록된 요소 객체
- eventPhase          - 정수           - 이벤트 전파 단계(1. 캡처링 단계, 2. 타깃 단계, 3.버블링 단계)
- timeStamp           - 정수           - 이벤트 발생 시간
- bubbles             - 논리값          - 버블링 단계인지를 뜻하는 값 
- cancelable          - 논리값          - preventDefault()로 기본 이벤트를 취소할 수 잇는지 뜻하는 값  
- defaultPrevented    - 논리값          - preventDefault()로 기본 작업이 취소 되었는지를 뜻하는 값
- isTrustred          - 논리값          - 해당 이벤트가 사용자의 액션에 의해 생성 되었는지를 뜻하는 값 

이벤트의 전파

이벤트의 단계

- 이벤트가 발생한 요소는 이벤트 타깃이라고 한다. 또한 이벤트를 발생시키는 것을 가리켜 이벤트를 발사 한다고 표현

1. 캡처링 단계
- 이벤트가 window 객체에서 출발해서 DOM트리를 타고 이벤트 타깃까지 전파. 

2. 타깃 단계
- 이벤트가 이벤트 타깃에 전파되는 단계. 이벤트 타깃에 등록된 이벤트 처리기가 이벤트 리스너는 이 시점에 실행

3. 버블링 단계
- 이벤트가 이벤트 타깃에서 출발해서 DOM트리를 타고 window 객체까지  전파된다. 
- 이 단계에 반응하도록 등록된 이벤트 리스너는 이벤트가 발생한 요소에 등록된 이벤트 처리기나 이벤트 리스너 다음에 실행
- 이 단계는 이벤트가 거품이 올라오는 것 처럼 DOM 트리 아래에서부터 위로 올라온다는 뜻에서 버블링 단계라고 한다.

이벤트의 전파
자식 요소에서 발생한 이벤트는 부모 요소에도 전파. 이 때문에 의도 하지 않는 동작을 할 때가 있다. 

이벤트의 전파 취소하기 : stopPropagation 메소드
event.stopPropagation();

이벤트 전파의 일시 정지 : stopImmediatePropagation 메서드
이벤트 리스너 안에서 요소 객체의 stopImmediatePropagation 메서드를 호출하면 그 다음 요소로의 이벤트 전파가 일시적으로 멈춥니다. 
또한 그 요소 객체의 그 이벤트에 등록한 다른 이벤트 리스너도 일시적으로 멈춥니다. 

event.stopImmediatePropagation();

기본 동작 취소하기 : preventDefault 메서드
event.preventDefault();

이벤트 리스너의 안의 this

this가 원하는 객체를 가리키도록 설정하는 방법
이벤트 리스너 안에 this가 특정 객체를 가리키게 하는 여러가지 방법이 있다.

1. bind 메서드를 사용하는 방법 
함수 객체의 bind 메서드를 사용하면 그 함수가 실행될 때의 this를 지정할 수 있다. 

2.익명 함수 안에서 실행하는 방법
이벤트 처리기 or 이벤트 리스너로 익명 함수를 넘기고 익명 함수 안에서 메소드를 호출하면 그 메서드의 this가 메서드를 참조하는 객체를 가리킨다.

3.화살표 함수를 사용하는 방법
화살표 함수의 this는 함수를 초기화 하는 시점에 결정
이를 활용하여 객체 안의 메서드를 화살표 함수로 표기하면 그 안의 this가  생성된 객체를 가리킨다.

4.addEventListener의 두번째 인수로 객체로 넘기는 방법
addEventListener 메서드의 두번째 인수는 함수지만 함수 대신에 객체를 넘길 수 있다.
그리고 그 객체에 handleEvent 메서드가 있으면 그 메서드를 이벤트 리스너로 등록하도록 만들어져 잇다.

이벤트 리스너에 추가적인 정보를 넘기는 방법

익명 함수 안에서 실행하기
익명 함수를 이벤트 리스너로 지정하고 이벤트 리스너 안에서 함수를 실행하면 그 함수에 추가적인 정보를 값으로 넘길 수 있다.

함수를 반환하는 함수를 이벤트 리스너로 등록하기
이벤트 객체를 인수로 받는 함수를 반환하는 함수를 정의해서 그 함수가 반환한 함수를 이벤트 처리기로 등록하는 방법

커스텀 이벤트 
생성하는 방법
createEvent 메서드로 이벤트 객체를 생성한 다음에 초기화 함수 안에서 이벤트 객체를 초기화 한다.
그 다음에 이벤트를 받을 요소 객체에 대해 dispatchEvent 메서드를 호출해서 이벤트를 보낸다.(dispatch)

객체 생성

|| let event = document.createEvent(type); ||
type에 사용 가능한것은 밑에 정리

||type              ||설명                      ||이벤트 객체의 초기화 메서드
- UIEvents            - 사용자 인터페이스 이벤트       - evnet.initUIEvent
- MouseEvents         - 마우스 이벤트               - event.initMouseEvent
- TextEvent           - 텍스트 이벤트               - event.initTextEvent
- KeyboardEvent       - 키보드 이벤트               - event.initKeyEvent          
- MutationEvents      - 변이 이벤트                - event.initMutationEvent          
- HTMLEvents          - HTML 이벤트               - event.initEvent        
- CustomEvent         - 사용자 지정 이벤트           - event.initCustomEvent               

생성된 이벤트 객체는 해당 이벤트의 타입에 따라 별도의 초기화 메서드로 초기화 작업을 해야 한다. 밑에는 예를 들어보겟다.

|| event.initEvent(type, bubbles, cancelable); ||

각각 인수의 뜻
type : 이벤트 유형을 뜻하는 문자열 ("click" "mouseup")
bubbles : 버블링할지를 나타내는 논리값
cancelable : 취소할 수 잇는 이벤트로 만들지를 나타내는 논리값

이벤트 보내기

이벤트는 요소 객체의 dispatchEvent 메서드로 보낸다. 
|| target.dispatchEvent(event) ||

비동기 처리를 간결하게 작성하는 Promise

Promise의 기본

Promise는 비동기 처리를 실행하고 그 처리를 실행하고 그 처리가 끝난 후에 다음 처리를 실행하기 위한 용도로 사용. 
|| let promise = new Promise(function(resolve, reject){ ... })

resolve : 함수 안의 처리가 끝났을 때 호출해야 하는 콜백 함수, resolve함수에는 어떠한 값도 인수로 넘길 수 있다. 이 값은 다음 처리를 실행하는 함수에 전달

reject  : 함수 안의 처리가 실패햇을 때 호출해야 하는 콜백 함수, reject함수에는 어떠한 값도 인수로 넘길 수 잇다. 대부분의 경우 오류 메시지 문자열을 인수로 사용


Promise를 종류시키는 resolve함수와 then 메소드

resolve 함수는 promise를 종류시킨다. resolve 함수에 인수로 넘긴 값은 then 메서드에 인수로 넘긴 함수에 전달 되어 다음 처리를 위해 사용
|| promise.then(onFullfilled); ||

onFullfilled 함수는 성공 콜백 함수라고 하며 promise 안의 처리가 정상적으로 끝났을 때 호출 되는 함수.

-- 추가할 이 내용 좀더 있다 --


