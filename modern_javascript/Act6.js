//크롬 개발자 모드에서 입력하기
//경고창
alert("안녕히세여")
// 입력 대화상자
let name = prompt("이름 입력하시오")
// 입력 대호창 초기 입력 값을 지정하기
let name = prompt("이름을 입력하시오", "최민준")
//prompt 숫자나 소수 입력하기
let numberTest = parseInt(prompt("나이를 입력하시오"));
//확인 대화 상자
let ret = confirm("링크를 추가")
//console 객체의 메서드
let p = {x:1, y:2}
console.dir(p)

console.time("answer_time");
alert("확인 버튼을 누르십시오")
console.timeEnd("answer_time");

setTimwindeout(function(){
    console.log(new Date());
},2000)
// 2초 후에 시간 데이터가 출력

setInterval(function(){
    console.log(new Date());
},1000)
//1초 마다 반복해서 실행