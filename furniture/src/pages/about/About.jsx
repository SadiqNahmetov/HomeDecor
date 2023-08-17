import React, { useEffect } from 'react'
import AboutUs from '../../components/AboutUs'
import changeTitle from '../../helpers/Change'
import Stats from '../../components/Stats'

function About() {

  useEffect(()=>{
    changeTitle('About')
  },[])
  return (
    <main>
           <AboutUs /> 
           <Stats />
                
    </main> 
     )
}

export default About