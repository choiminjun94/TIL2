import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";

function RegisterPage(props) {
    const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHeader = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onNamedHeader = (e) => {
    setName(e.currentTarget.value);
  };
  const onPasswordHeader = (e) => {
    setPassword(e.currentTarget.value);
   
  };
  const onConfirmPasswordHeader = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault(); // 가 없으면 페이지가 리프레시 됨 // 다음 작업이 진해이 안됨

    if (Password !== ConfirmPassword) {
        return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    }

    let body = {
      email: Email,
      password: Password,
      name:Name
    };


    dispatch(registerUser(body)) // dispatch안의 loginUser는 acticn이다.
    .then(response =>{
        if(response.payload.success){
            props.history.push("/login")   
        }else{
            alert("가입에 실패")
            console.log(body);
            
        }
    })
  }
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

          <label>name</label>
          <input type="text" value={Name} onChange={onNamedHeader} pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$"maxlength="10" required />

          <label>Password</label>
          <input type="password" value={Password} onChange={onPasswordHeader} pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$"maxlength="10" required />

          <label>Confirm Password</label>
          <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHeader} pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$"maxlength="10" required  />
          <br />
          <button>회원가입</button>
        </form>
      </div>
    )
}

export default RegisterPage