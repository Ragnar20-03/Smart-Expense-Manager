import React, { useState } from 'react'
import LinkButton from '../LinkButton/LinkButton'

function AddExpenseForm() {
    const [expense,setExpense]=useState({})
  return (
    <>
        <form action="">
            <label htmlFor="title">Title : </label>
            <input type="text" placeholder='Title' id='title'/>

            <label htmlFor="category">Category : </label>
            <select name="category" id="category">
                <option value="Food">Food & Dining</option>
                <option value="Travel">Travel</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Health">Health</option>
                <option value="Utilites">Utilites</option>
                <option value="Miscellaneous">Miscellaneous</option>
            </select>

            <label htmlFor="amount">Amount : </label>
            <input type="number" name="amount" id="amount" />

            <label htmlFor="date">Date</label>
            <input type="date" name="date" id="date" />

            <label htmlFor="description">Description</label>
          <textarea name="description" id="description"></textarea>
        </form>
        <LinkButton children="Cancel" url=""/>
        <LinkButton children="Add" url="add-expenses"/>
           
    </>
  )
}

export default AddExpenseForm