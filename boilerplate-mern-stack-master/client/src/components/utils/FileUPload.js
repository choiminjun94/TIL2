import React from "react";
import Dropzone from "react-dropzone";
import { Icon } from 'antd'
import axios from 'axios'

function FileUpload() {

    const dropHandler =(files)=>{
        let formDate = new formDate();
        const config ={
            header: {'content-type': 'multipart/form-data'}
            //header 어떤 파일인지 컨텐트  타입을 정의해서 백에서 파일을 받을때 에러가 없이 받을수 있게 해준다
        }
        formDate.append("file", files[0])
        //formDate 파일의 정보 가 append를 이용해 더해서 들어간다.
        axios.post('/api/product/image',formDate ,config)
        .then(response =>{
            if(response.data.success){

            }else{
                alert('실패')
            }
        })
    }
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>  
      <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div
              style={{
                width: 300,
                height: 240,
                border: "1px solid lightgray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <Icon type="plus" style={{ fontSize: "3rem" }} />
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
}

export default FileUpload;
