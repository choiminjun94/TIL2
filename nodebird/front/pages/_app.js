import PropTypes from "prop-types";
import "antd/dist/antd.css";
import Head from "next/head";
// 공동적인것 처리
// 컴포넌트들의 부모 역할
const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meat charSet="utf-8" />
        <title>노드버드</title>
      </Head>
      <div>공통 메뉴</div>
      <Component />
    </>
  );
};

NodeBird.PropTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default NodeBird;
