import React from 'react'
import './header.css'

const Header = (props) => {
  return (
    <div>
        <h1 className='header-h1'>Our Pricing</h1>
        <div className='header-container'>
        <h2>Anually</h2>
        <div 
        className={props.toggle ? 'slider-container' : 'slider-container active'}
        onClick={props.event}
        >
            <div className='slider'></div>
        </div>
        <h2>Monthly</h2>
        </div>
    </div>
  )
}

export default Header