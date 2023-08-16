import React, { useEffect } from 'react';
import changeTitle from '../../helpers/Change';

function Contact() {
  useEffect(()=>{
    changeTitle('Contact')
  },[])
  return (
    <main>

   </main>
  )
}

export default Contact