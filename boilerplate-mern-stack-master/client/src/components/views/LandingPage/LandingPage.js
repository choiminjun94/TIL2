import React, { useEffect, useState } from "react";
import axios from "axios";
import { Icon, Col, Row, Card } from "antd";
import Meta from "antd/lib/card/Meta";

function LandingPage() {
  // 등록 상품 가져오기
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    axios.post("/api/product/products").then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setProducts(response.data.productInfo);
      } else {
        alert("상품 가져오기 실패");
      }
    });
  }, []);

  const renerCards = Products.map((product, index) => {
    //product의 정보 확인
    console.log("product", product);
    return  <Col lg={6} md={8} xs={24} key={index}>
        <Card
          cover={<img style={{width:'100%', maxHeight: '150px'}} src={`http://localhost:5000/${product.images[0]}`} />}
        >
          <Meta title={product.title} description={`$${product.price}`} />
        </Card>
      </Col>
  });
  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>
          Let Shopping_mall_making
          <Icon type="rocket" />
        </h2>
      </div>
      {/* Filer */}

      {/* Saerch */}

      {/* Cards */}
      <Row gutter={[16, 16]}>{renerCards}</Row>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button>더보기</button>
      </div>
    </div>
  );
}

export default LandingPage;
