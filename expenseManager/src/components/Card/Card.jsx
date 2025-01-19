import React from 'react'
import "./Card.css"

function Card({children="Expenses",amount=0}) {
  return (
    <div className='card'>
        <div className="title">{children}</div>
        <div className="amount">{amount}</div>
    </div>
  )
}

export default Card