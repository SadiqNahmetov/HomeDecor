import React, { useEffect } from 'react'
import AboutUs from '../../components/AboutUs'
import changeTitle from '../../helpers/Change'

function About() {

  useEffect(()=>{
    changeTitle('About')
  },[])
  return (
    <main>
           <AboutUs /> 
                
    </main> 
     )
}

export default About