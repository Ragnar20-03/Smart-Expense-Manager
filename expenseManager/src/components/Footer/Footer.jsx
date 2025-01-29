import React from 'react'
import "./Footer.css"
import { Link } from 'react-router'

// TODO: Footer Complete
function Footer() {
  return (
  <>
    <div className="footer">
      <div className="left ">
         <div className="logoBox">
          <div className="logo">
          <Link to="/"><img src="../../Public/images/Logo.png" alt="Logo" /></Link>
          </div>
          <div className="subTitle">
            <p>Smart Expenses Manager</p>
          </div>
         </div>

      </div>
      <div className="right"></div>
    </div>
  </>
  )
}

export default Footer