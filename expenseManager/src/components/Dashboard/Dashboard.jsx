import React from 'react'
import "./Dashboard.css"
import {Card,LinkButton} from "../index.js"

function Dashboard() {
  return (
   <div className="dashboardMain">
    <h1>DashBoard</h1>
   <div className="dashboard">
    <Card children="Total Expenses" amount={1345}/>
        <Card children="Budget" amount={5431}/>
        <Card children="Remaining Amount" amount={5431-1345}/>
   </div>
   <div className="btns">
      <LinkButton children="Add Expenses" url="add-expenses"/>

      <LinkButton children="View Expenses" url="view-expenses"/>
   </div>
   </div>
  )
}

export default Dashboard