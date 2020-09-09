import React from 'react' // NextJS에서는 없어도 된다. 
import AppLayout from '../components/AppLayout'
import Head from "next/head";


const Home =()=>{
    return(
      
        <AppLayout><div>Hello world</div></AppLayout>
    
    )
}

export default Home;