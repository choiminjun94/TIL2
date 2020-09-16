import React,{useEffect} from 'react'
import { FaCode } from "react-icons/fa";
import axios from 'axios'

function LandingPage() {    
    useEffect(() => {
        //body   
        axios.post('/api/product/products')
        .then(response =>{
            if(response.data.success){
                console.log(response.data);
                
            }else{
                alert("상품 가져오는데 실패")
            }
        })
    }, [])

    return (
        <div>
            렌딩 페이지
        </div>
    )

}

export default LandingPage