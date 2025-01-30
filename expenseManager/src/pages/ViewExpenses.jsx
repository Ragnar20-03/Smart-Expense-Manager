import React from 'react'
import { ExpensesBar } from '../components'

function ViewExpenses() {
  return (
    <>
    <h1>Expenses List</h1>
    <div className="ok">
    <ExpensesBar title="Food" amount={789} date="10-12-2004"/>
    <ExpensesBar title="Food" amount={789} date="10-12-2004"/>
    <ExpensesBar title="Food" amount={789} date="10-12-2004"/>
    <ExpensesBar title="Food" amount={789} date="10-12-2004"/>
    </div>
    </>
  )
}

export default ViewExpenses