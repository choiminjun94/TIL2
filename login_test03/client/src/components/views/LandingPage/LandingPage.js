import React, { useEffect } from "react";
import axios from "axios";
import {withRouter} from 'react-router-dom';

function LandingPage(props) {
  useEffect(() => {
    //   axios.get('/api/hello') // 엔드 포인트를 server로 보낸다. server폴더의 index.js
    axios.get("/api/hello").then((response) => {
      console.log(response);
    });
    // LandingPage에 들어오자 마자 useEffect를 실행
  }, []);

  const onClickHandler = () => {
    axios.get('/api/users/logout')
    .then(response =>{
      // console.log(response.data);
      if(response.data.success){
        props.history.push('/login')
        alert('로그 아웃 성공')
      }else{
        alert('로그 아웃 실패')
      }
    })
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>시작 페이지</h2>
      
      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
}

export default withRouter(LandingPage);
