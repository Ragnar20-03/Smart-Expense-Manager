import React, { useState } from 'react'
import LinkButton from '../LinkButton/LinkButton'
import "./form.css"

function AddExpenseForm() {
  
  const [data,setData]=useState();
  const onSubmitHandler=()=>{

  }
  return (
    <div className="main">
        <form action="" onSubmit={onSubmitHandler}>
           <div className="subDiv">
           <label htmlFor="title">Title : </label>
           <input type="text" placeholder='Title' id='title' />
           </div>


            <div className="subDiv">
            <label htmlFor="category">Category : </label>
            <select name="category" id="category" >
                <option value="Food">Food & Dining</option>
                <option value="Travel">Travel</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Health">Health</option>
                <option value="Utilites">Utilites</option>
                <option value="Miscellaneous">Miscellaneous</option>
            </select>
            </div>

            <div className="subDiv">
            <label htmlFor="amount">Amount : </label>
            <input type="number" name="amount" id="amount" />
            </div>

           <div className="subDiv">
           <label htmlFor="date">Date</label>
           <input type="date" name="date" id="date" />
           </div>

           <div className="subDiv">
           <label htmlFor="date">Bill</label>
           <input type="file" name="bill" id="bill" />
           </div>

            <div className="subDiv">
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description"></textarea>
            </div>
        </form>

       <div className=" btnBox" >
       <LinkButton children="Cancel" url="#" className="btn" />
       <LinkButton children="Add" url="add-expenses" className="btn"/>
       </div>
    </div>
  )
}

export default AddExpenseForm