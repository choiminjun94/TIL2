import React, { useState } from "react";
import { Typography, Button, Form, Input } from "antd";
import FileUpload from "../../utils/FileUPload";
import Axios from "axios";
// const {Title} = Typography
const { TextArea } = Input;

const Continets = [
  { key: 1, value: "아프리키" },
  { key: 2, value: "유럽" },
  { key: 3, value: "아시아" },
  { key: 4, value: "북미" },
  { key: 5, value: "남미" },
  { key: 6, value: "오스트레일리아" },
  { key: 7, value: "남극" },
];

function UploadProductPage(props) {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState(0);
  const [Continet, setContinet] = useState(1);
  const [Images, setImages] = useState([]);

  const titlechangeHandler = (event) => {
    setTitle(event.currentTarget.value);
  };
  const DescriptionChangeHandler = (event) => {
    setDescription(event.currentTarget.value);
  };
  const PriceChangeHandler = (event) => {
    setPrice(event.currentTarget.value);
  };
  const continentChangeHandler = (event) => {
    setContinet(event.currentTarget.value);
  };
  const updateImage =(newImages) =>{
    setImages(newImages)
  }

  const submitHandler =(event)=>{
    event.preventDefault();
    //유효성 체크 모든 칸이 채워지지 않으면 sumti이 될수 없게
    if(!Title || !Description || !Price || !Continet || !Image){
        return alert("모든 값을 채워 주세요")
    }

    //서버에 채운 값들을 request로 보내준다.
    const body ={
        //로그인 된 사람의 아이디
        write:props.user.userData._id,
        title: Title,
        Description: Description,
        price: Price,
        images:Images,
        continents:Continet

    }
    Axios.post("/api/product",body)
    .then(response =>{
        if(response.data.success){
            alert('상품 업로드에 성공 했습니다.')
            props.history.push('/')
            // 성공시 시작 페이지로 이동
        }
        else{
            alert('상품 업로드에 실패 했습니다.')
        }
    })
  }

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        {/* level이 text 사이즈 이다. */}
        <h2>여행 상품 업로드</h2>
      </div>
      <Form onSubmit={submitHandler}>
        <FileUpload  refreshFunction={updateImage}/>

        <br />
        <br />
        <label>이름</label>
        <Input onChange={titlechangeHandler} value={Title} />
        <br />
        <br />
        <label>설명</label>
        <TextArea onChange={DescriptionChangeHandler} value={Description} />
        <br />
        <br />
        <label>가격</label>
        <Input type="number" onChange={PriceChangeHandler} value={Price} />
        <br />
        <br />
        <select onChange={continentChangeHandler} value={Continet}>
          {/* 이부분의 onChange는  option의 value가 바뀔수 있게 해주는 역할*/}
          {Continets.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <br />
        <Button type="submit" onClick={submitHandler}>확인</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;