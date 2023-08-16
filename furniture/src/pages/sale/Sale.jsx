import React, { useEffect } from 'react';
import changeTitle from '../../helpers/Change';

function Sale() {

  useEffect(()=>{
    changeTitle('Sale')
  },[])
  return (
   <main>
    
   </main>
  )
}

export default Sale