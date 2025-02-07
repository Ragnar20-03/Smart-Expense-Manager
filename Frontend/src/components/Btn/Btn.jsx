import React from 'react'
import "./Btn.css"

function Btn({children,onClick,type="button"}) {
  return (
    <button  className='btns' type={type} onClick={onClick} >{children}</button>
  )
}

export default Btn;