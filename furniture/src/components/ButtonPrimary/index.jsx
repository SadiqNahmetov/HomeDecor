import React from 'react'
import './buttonPrimary.scss'

function ButtonPrimary({ children, href, disabled = false }) {
    return (
    
            <button
                disabled={disabled}
                onClick={() => (window.location.href = href)}
                className='btn'
            >
                {children}
            </button>
       
    )
}

export default ButtonPrimary;