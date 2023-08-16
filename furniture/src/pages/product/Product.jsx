import React, { useEffect } from 'react';
import changeTitle from '../../helpers/Change';

function Product() {

  useEffect(()=>{
    changeTitle('Product')
  },[])
  return (
    
    <main>
      
   </main>
  )
}

export default Product