import React from 'react'
import './Button.css'

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({children,type,onClick,buttonStyles,ButtonSize}) => {
    const checkButtonstyle = STYLES.includes(buttonStyles) ? buttonStyles : STYLES[0]

    const checkButtonstyle = STYLES.includes(ButtonSize) ? ButtonSize : STYLES[0]

    return (
        <button className={`btn $(checkButtonstyle) $(checkButtonSize)`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}