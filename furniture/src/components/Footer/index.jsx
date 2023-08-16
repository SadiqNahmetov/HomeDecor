import React from 'react'
import './footer.scss'

function Footer() {
  return (
    <footer>
      
        <div className='container'>
          <div className='footer'>
            <div className='footer__logo-copyrigt'>
              <p>HomeDecor</p>
              <span>©2023 All Right Reserved. Developed by Webcoder Agency</span>
            </div>
            <div className='footer__text'>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui </p>
            </div>
            <div className='footer__contact'>
              <span className='phone'>+994 50 555 55 55</span>
              <span className='gmail'>youremailhere@gmail.com</span>
            </div>
          </div>
        </div>
   
    </footer>
  )
}

export default Footer