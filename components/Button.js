import React from 'react'
import './Button.css'

export default function Button({ label, type = 'button', Icons, onClick}) {
  return (
    <button type={type} onClick={onClick}>
        <span className='flex items-center'>{label} {Icons && <Icons />} </span>
    </button>
  )
}
