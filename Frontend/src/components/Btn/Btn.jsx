import React from 'react'
import "./Btn.css"

function Btn({children}) {
  return (
    <button  className='btns' >{children}</button>
  )
}

export default Btn