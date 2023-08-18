import React, { useEffect } from 'react';
import changeTitle from '../../helpers/Change';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactContent from '../../components/ContactContent';

function Contact() {
  useEffect(()=>{
    changeTitle('Contact')
  },[])
  return (
    <main>
      <Breadcrumbs />
      <ContactContent />
   </main>
  )
}

export default Contact