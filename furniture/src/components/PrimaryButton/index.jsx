import React from 'react'
import classes from './primaryButton.module.scss'

function ButtonPrimary({ children, href, disabled = false }) {
    return (
    
            <button
                disabled={disabled}
                onClick={() => (window.location.href = href)}
                className={classes.primary__btn + ' ' + 'btn'}
            >
                {children}
            </button>
       
    )
}

export default ButtonPrimary;