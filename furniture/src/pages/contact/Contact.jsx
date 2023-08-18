import React, { useEffect } from 'react';
import changeTitle from '../../helpers/Change';
import Breadcrumbs from '../../components/Breadcrumbs';

function Contact() {
  useEffect(()=>{
    changeTitle('Contact')
  },[])
  return (
    <main>
      <Breadcrumbs />
   </main>
  )
}

export default Contact