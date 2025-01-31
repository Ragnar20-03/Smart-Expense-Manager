import React from 'react'
import "./bar.css"

function ExpensesBar({title,amount,date}) {
  return (
    <div className='mainContainer'>
        <div className="title">{title}</div>
        <div className="amnt">{amount}</div>
        <div className="date">{date}</div>
        <div className="icon" id='edit'><i class="fa-solid fa-pen-to-square"></i></div>
       
        <div className="icon" id='delete'><i class="fa-solid fa-trash"></i></div>
    </div>
  )
}

export default ExpensesBar