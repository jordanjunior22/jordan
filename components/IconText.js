import React from 'react'
import './IconText.css'

export default function IconText({Icons,text,className}) {
  return (
    <div className={`icons_text ${className}`}>
        {Icons && <Icons />}
        <p>{text}</p>
    </div>
  )
}
