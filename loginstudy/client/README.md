-- 0826 -- 
VS Code ES7 React/Redux/React-Native/JS snippets 설치 하기
rfce - function 컴포넌트
rcc - 클래스형 컴포넌트

react-router-dom 설치
npm install react-router-dom
참고 사이트 - https://reactrouter.com/web/example/basic

exact 붙이는 이유

이게 붙어있으면 주어진 경로와 정확히 맞아 떨어져야만 설정한 컴포넌트를 보여줍니다.

axios 설치하기
사용하는 이유
요청을 보내기 위해 사용

npm install axios --save

useEffect 단축키 
- usee

Proxy 설치
컴퓨터 네트워크에서 다른 서버 상의 자원을 찾는 클라이언트로부터 요청을 받아 중계하는 서버를 말합니다. 간단히 말해서 중계해주는 서버라고 생각하면 됩니다.

npm install http-proxy-middleware --save
참고 사이트  -https://create-react-app.dev/docs/proxying-api-requests-in-development/

Proxy파일 만들기
setupProxy.js

concurrently 설치
npm install concurrently --save

설치하는 이유: 프론트와 백서버를 한번에 켜기 위해서

-0827-

antd 설치
npm install antd --save

index.js에 import 'antd/dist/antd.css' 추가

antd 사이트: https://ant.design/


what is redux: 상태 관리 라이브러리
Props와 State의 차이점
1. Props
- Properties의 줄인말
- 컴포넌트 간의 무언가를 주고 받을때는 Props를 사용 
- Props는 소통 방식이 위에서 아래로(부모 컴포넌트에서 자식 컴포넌트로)
- 부모에서 자식컴포넌트로 준 값은 변하지 않는다. 바꾸기 위해서는 부모 컴포넌트를 수정 해야 한다. 

표현 방법 예시
<ChatMessage
    messsage={message}
    currentMember ={member}
/>

2. State
- 부모 컴포넌트에서 자식 컴포넌트로 값을 주는 것이 아니고 컴포넌트 안에서 데이터을 주거나 교환
- Props와 다르게 컴포넌트 안에서 데이터 수정이 가능하다. 
- 데이터가 변할시 re-render가 된다.

표현 방법 예시
state ={
    message: '';,
    attachFile: undefined,
    openMenu: false,
 
}

Redex는 state를 관리하는 tool

Redux 데이터 flow - notion 참고

redux는 component에서 시작 - 한방향으로만 흐른다.
Action - 객체로 되어 있음
무엇이 일어났는지 설명하는 객체

Reducer - Action에서 일어난 일을 설명해주는 역할

Store - 전체적인 어플리케이션의 state을 감싸주는 역할

- Rudux 설명 추가 -

redux, react-redux, redux-promise, redux-thunk 설치 

npm install redux react-redux redux-promise redux-thunk --save

redux-promise, redux-thunk는 redux를 잘 쓸수있게 도와 주는 역할 || 
action은 객체를 받는다. 그럼 function이나 Promises는? 이건 thunk와 promise가 해결 해준다.

thunk는 dispatch에게 function을 받는 방법을 알려줌
promise는 dispatch에게 promise를 받는 방법을 알려줌

redux store 안에서 모든 state를 관리  state를 변경 할려면 dispatch를 이용해 action으로 변경

App에 Redux를 연결 해주는 방법 

index.js 에
import {Provider} from 'react-redux' 추가하고 

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
변경

react Hooks 

class Component 
- 기능은 많다
- 복잡함
- 속도 느림
- 단축키 rcc


Functional component
- 기능은 적다
- 단순 
- 속도 빠름
- 단축키 rfce







