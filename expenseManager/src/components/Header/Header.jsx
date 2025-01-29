import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"



function Header() {
    return (
        <div className="nav">
            <div className="navLogo">
                <Link to="/"><img src="../../images/Logo.png" alt="Logo" /></Link>
            </div>
               
            <div className="navElement">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-expenses">Add Expenses</Link></li>
                <li><Link to="/view-expenses">View Expenses</Link></li>
                <li><Link to="/trends">Trends</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
            </div>
            {/* <button className="theme-toggle">Toggle Theme</button> */}
        </div>
    )
}

export default Header