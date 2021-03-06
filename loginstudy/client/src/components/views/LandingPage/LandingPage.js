import React, { useEffect } from "react";
import axios from "axios";

function LandingPage(props) {
  useEffect(() => {
    //   axios.get('/api/hello') // 엔드 포인트를 server로 보낸다. server폴더의 index.js
    axios.get("/api/hello").then((response) => {
      console.log(response);
    });
    // LandingPage에 들어오자 마자 useEffect를 실행
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100",
        height: "100vh",
      }}
    >
      <h2>
        <strong>시작 페이지</strong>
      </h2>
    </div>
  );
}

export default LandingPage;
