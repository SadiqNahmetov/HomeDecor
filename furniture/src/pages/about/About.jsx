import React, { useEffect } from 'react'
import AboutUs from '../../components/AboutUs'
import changeTitle from '../../helpers/Change'
import Stats from '../../components/Stats'
import Breadcrumbs from '../../components/Breadcrumbs'

function About() {

  useEffect(()=>{
    changeTitle('About')
  },[])
  return (
    <main>
           <Breadcrumbs />
           <AboutUs /> 
           <Stats />
                
    </main> 
     )
}

export default About