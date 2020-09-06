-0906-
Next.js install
npm i next@9 
- nextjs 9버전 설치

NextJs에서는 Pages폴더는 이름이 무적건 Pages이어야 한다.

Pages폴더를 인식해서 안에 파일들을 개별적인 페이지로 컴포넌트로 만들어 준다.
Pages폴더에 있어야 코드 스플리트를 해준다. 

이상에서 npm run dev를 하면 
The module 'react' was not found. Next.js requires that you include it in 'dependencies' of your 'package.json'. To add it, run 'npm install react'
The module 'react-dom' was not found. Next.js requires that you include it in 'dependencies' of your 'package.json'. To add it, run 'npm install react-dom'
Error 발생

해결 방안 npm i react react-dom

next는 서버가 돌아갈때 파일을 새로 만들면 인식을 못함
서버 재시작

라우터가 없어도 next가 알아서 라우팅 해줌 

[]로 감싸서 만들는 동적 라우팅 기능도 된다.

prop-types 설치
 npm i prop-types

 eslint 설치
 npm i eslint -D
 npm i eslint-plugin-import -D
 npm i eslint-plugin-react -D
 npm i eslint-plugin-react-hooks -D
 -D는 개발자 모드이다. 
