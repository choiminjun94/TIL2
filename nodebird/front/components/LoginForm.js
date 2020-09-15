import React, { useCallback, useState } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChnageId = useCallback((e)=>{
    setId(e.target.value)
  },[])

  const onchangePassword = useCallback((e) =>{
    setPassword(e.target.value)
  })

  return (
    <Form>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input 
          name="user-id" 
          value={id} 
          onChange={onChnageId} 
          required 
        />
      </div>

      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          value={password}
          onChange={onchangePassword}
          required
        />
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href ="/singup"><a><Button>회원가입</Button></a></Link>
      </div>
    </Form>
  );
};

export default LoginForm;
