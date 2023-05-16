import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='nav-menus'>
        <Link className='nav-link' to={"/"}>Home</Link>
        <Link className='nav-link' to={"/showComponent"}>Components</Link>
        <Link className='nav-link' to={"/addComponent"}>New Component</Link>
    </nav>
  )
}

export default Navigation