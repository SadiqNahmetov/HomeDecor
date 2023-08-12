import React from 'react'
import './primaryButton.scss'

function ButtonPrimary({ children, href, disabled = false }) {
    return (
    
            <button
                disabled={disabled}
                onClick={() => (window.location.href = href)}
                className='primary__btn'
            >
                {children}
            </button>
       
    )
}

export default ButtonPrimary;