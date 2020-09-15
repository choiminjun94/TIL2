import React,{useState} from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";

import UserProfile from '../components/UserProfile'
import LoginForm from '../components/LoginForm'
const AppLayout = ({ children }) => {
// 더미 데이터
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
            <Input.Search enterButton style={{verticalAlign :'middle'}} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
          {/* gutter 컬럼 사이의 간격 */}
          <Col xs={24} md ={6}>
            {isLoggedIn ? <UserProfile /> : <LoginForm /> }
            {/* 로그인이 되어 있으면 사용자 프로필을 보여준다. 아니면 로그인 폼을 보여준다. */}
          </Col>
          <Col xs={24} md ={12}>
          {children}
            </Col> 
          <Col xs={24} md ={6}>
              <a href="https://www.clien.net/service/" target="_blank" rel="noreferrer noopener">클리앙</a>
          </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
