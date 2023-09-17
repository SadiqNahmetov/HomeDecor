import React from 'react'
import '../AccountTitle/accountTitle.scss'


function AccountTitle({children}) {
  return (
    <>
    <h3 className="title">{children}</h3>
    </>
  )
}

export default AccountTitle