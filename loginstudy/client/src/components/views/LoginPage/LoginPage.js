import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";

function LoginPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHeader = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHeader = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onClickHandler = () => {
   
      axios.get("/api/users/logout").then((response) => {
        if (response.data.success) {
  
          props.history.push("/logout");
          alert("로그아웃 성공")
        } else {
          alert("로그아웃 실패");
        }
      }); 
  };

  const onSubmitHandler = (e) => {
    e.preventDefault(); // 가 없으면 페이지가 리프레시 됨 // 다음 작업이 진해이 안됨

    let body = {
      email: Email,
      password: Password,
    };
    dispatch(loginUser(body)) // dispatch안의 loginUser는 acticn이다.
      .then((response) => {
        if (response.payload.loginSuccess) {
          props.history.push("/");
        } else {
          alert("Error");
        }
      });
  };

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
      <form
        style={{ display: "flex", flexDirection: " column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHeader} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHeader} />
        <br />
        <button>Login</button>
        <button onClick={onClickHandler}>로그아웃</button>

      </form>
    </div>
  );
}

export default LoginPage;
