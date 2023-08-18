import React, { useEffect } from 'react';
import changeTitle from '../../helpers/Change';
import Breadcrumbs from '../../components/Breadcrumbs';

function Product() {

  useEffect(()=>{
    changeTitle('Product')
  },[])
  return (
    
    <main>
      <Breadcrumbs />
   </main>
  )
}

export default Product