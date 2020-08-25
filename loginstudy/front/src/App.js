import React,{useState} from 'react';

const App = () => {
const [onIdid, setonId]=useState("")


const onId =(e)=> {
  setonId(e.target.value)
}







  return (
    <>
      <input type="text" onChange={onId}/>
      
           {onIdid}
           <button>회원가입</button>
    </>
  );
  }

export default App;