0814
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

