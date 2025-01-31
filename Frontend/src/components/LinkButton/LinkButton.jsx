import React from 'react'
import "./LinkButton.css"
import { Link } from 'react-router'

function LinkButton({children,url}) {
  return (
    <Link to={url} className='btn'>
    {children}
    </Link>
  )
}

export default LinkButton