import React from 'react'
import "./BurguerButton.css"

function BurguerButton({ handleClick, clicked }) {
  return (
    <div onClick={handleClick} 
        className={`icon nav-icon-5 ${clicked ? "open" : ""}`}>
    <span></span>
    <span></span>
    <span></span>
    </div>
  )
}

export default BurguerButton