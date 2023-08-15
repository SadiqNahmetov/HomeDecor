import React, { useState,useEffect } from 'react'
import axios from 'axios';
import MainHeader from '../../components/MainHeader';
import AboutUs from '../../components/AboutUs';




function Home() {
  
  const  url = 'http://localhost:3000'

  const [mainHeader, setMainHeader] = useState([])
  
  const getMainHeader = async ()=> {
      await axios.get(`${url}/mainHeader`)
      .then((res)=>{
          setMainHeader(res.data)
      });
  }
  
  useEffect(()=>{
      getMainHeader();
      console.log(mainHeader);
  })
  return (

    <main>
      <MainHeader {...mainHeader}/>
      <AboutUs/>
    </main>
        
     
  )
}

export default Home