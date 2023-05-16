import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-page-body'>
      <h1 className='company-name'>Blue Space Technology</h1>
      <h3 className='item-name'>Component Book</h3>
      <Link to={"/showComponent"}><button className='home-goto-button'>Go to component list</button></Link>
    </div>
  )
}

export default Home