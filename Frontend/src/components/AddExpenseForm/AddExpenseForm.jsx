import React, { useState } from 'react'
import LinkButton from '../LinkButton/LinkButton'
import "./form.css"
import Btn from '../Btn/Btn';

function AddExpenseForm() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    amount:"",
    date: "",
    bill: "",
    description:""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Submit data:", formData);
    onReset();
  }

  const onReset=(event)=>{
    event.preventDefault();
    setFormData({title:"",category:"",amount:"",date:"",description:"",bill:""});
    console.log("Reset Data")
  }
  return (
    <div className="main">
      <form action="" onSubmit={onSubmitHandler}>

        <div className="subDiv">
          <label htmlFor="title">Title : </label>

          <input type="text" placeholder='Title of Your Expense' name='title' id='title' value={formData.title} onChange={(e) => handleChange(e)} />
        </div>


        <div className="subDiv">
          <label htmlFor="category">Category : </label>
          <select name="category" placeholder="Choose Category" id="category" value={formData.category} onChange={(e) => handleChange(e)}>
            <option value=""></option>
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
          <input type="number" placeholder=" Amount in Rupees" name="amount" id="amount" value={formData.amount} onChange={(e) => handleChange(e)} />
        </div>

        <div className="subDiv">
          <label htmlFor="date">Date : </label>
          <input type="date" name="date" id="date" value={formData.date} onChange={(e) => handleChange(e)} />
        </div>

        <div className="subDiv">
          <label htmlFor="date">Bill : </label>
          <input type="file" name="bill" id="bill" value={formData.bill} onChange={(e) => handleChange(e)} />
        </div>

        <div className="subDiv">
          <label htmlFor="description">Description : </label>
          <textarea name="description" placeholder=' Write Here ...' id="description" value={formData.description} onChange={(e) => handleChange(e)}></textarea>
        </div>
        <div className=" btnBox" >
        <Btn children="Reset" onClick={(e)=>{onReset(e)}} type="button" />
        <Btn type="submit" children="Submit"  onClick={onSubmitHandler}/>
       
      </div>
      </form>
  
    </div>
  )
}

export default AddExpenseForm