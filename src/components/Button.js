import React from 'react'
import './Button.css'

const Button = ({
  children,
  variant,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color
}) => {
  return (
    <button
      className={`button ${variant || ''} ${
        disableShadow ? 'disable-shadow' : ''
      } ${size || ''} ${color || ''}`}
      disabled={disabled}>
      {startIcon && <span className="material-icons md-18"> {startIcon}</span>}
      {children}
      {endIcon && <span className="material-icons md-18"> {endIcon}</span>}
    </button>
  )
}

export default Button
