import React,{useState} from 'react'
import {Typography, Button, Form, Input} from 'antd';

// const {Title} = Typography
const {TextArea} = Input;

function UploadProductPage() {
    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState(0)
    const [Continet, setContinet] = useState(1)
    const [Images, setImages] = useState([])

    const titlechangeHandler = (event) =>{
        setTitle(event.currentTarget.value)
    }
    const DescriptionChangeHandler =(event) =>{
        setDescription(event.currentTarget.value)
    }
    const PriceChangeHandler =(event) =>{
        setPrice(event.currentTarget.value)
    }

    return (
        <div style={{maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                {/* level이 text 사이즈 이다. */}
                <h2>여행 상품 업로드</h2>
            </div>
            <Form>
                <br/>
                <br/>
                <label>이름</label>
                <Input onChange={titlechangeHandler} value={Title}/>
                <br />
                <br />
                <label>설명</label>
                <TextArea onChange={DescriptionChangeHandler} value={Description}/>
                <br />
                <br />
                <label>가격</label>
                <Input type="number" onChange={PriceChangeHandler} value={Price}/> 
                <br />
                <br />
                <select>
                    <option></option>
                </select>
                <br />
                <br />
                <Button>
                    확인
                </Button>
            </Form>
        </div>
    )
}

export default UploadProductPage