import React, { useEffect } from 'react';
import changeTitle from '../../helpers/Change';

function Collection() {

  useEffect(()=>{
    changeTitle('Collection')
  },[])
  return (
    <main>
        
    </main>
  )
}

export default Collection