import React, { useEffect } from 'react';
import changeTitle from '../../helpers/Change';
import Breadcrumbs from '../../components/Breadcrumbs';

function Collection() {

  useEffect(()=>{
    changeTitle('Collection')
  },[])
  return (
    <main>
        <Breadcrumbs />
    </main>
  )
}

export default Collection