import React, {useState} from "react";
import Dropzone from 'react-dropzone'
import { Icon } from 'antd'
import axios from 'axios'

function FileUpload() {

const [Images, setImages] = useState([])
//useState([]) 몇개의 파일이 올라 갈지 모르기 때문에


const dropHandler =(files)=>{
    let formData = new FormData();
    // 올리는 파일의 정보

    const config ={
        header: {'content-type': 'multipart/form-data'}
        //파일의 컨텐츠 타입을 알려주어야 한다.
    }

    formData.append("file", files[0])

    axios.post('/api/product/image',formData ,config)
    // 파일 전송시 formData, config를 넣어 주어여 한다.

    .then(response => {
        if(response.data.success){
            console.log(response.data);
            setImages([...Images, response.data.filePath ])
        }else{
            alert("파일 보내기 실패")
        }
    })
}

const deleteHandler=(image)=>{
    const currentIndex = Images.indexOf(image)
    console.log('currentIndex', currentIndex);
    let  newImages =[...Images]
    newImages.splice(currentIndex, 1);
    // 선택 한 이미지에서 부터 1개를 지우겠다.
    setImages(newImages)

}

  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>  
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div style={{ 
                width: 300, height: 240, border: '1px solid lightgray',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
            {...getRootProps()}>
              <input {...getInputProps()} />
              <Icon type="plus" style={{fontSize:'3rem'}} />
            </div>
          </section>
        )}
      </Dropzone>
      {/* 파일을 올리면 사진이 나올수 있게 조치 */}
      <div style={{display: 'flex', width: '350px', height: '240px', overflowX: 'scroll'}}> 
            {Images.map((image, index) =>(
              <div onClick={()=>deleteHandler(image)} key={index}>
                {/* 클릭 할때 이미지 삭제 */}
                <img style={{minWidth: '300px', width: '300px', height: '240px'}}
                  src={`http://localhost:5000/${image}`}
                />
              </div>
            ))}
      </div>
    </div>
  );
}

export default FileUpload;