import React from 'react'
import './cards.css'

const Cards = (props) => {
  return (
    <div className='cards'>
      <div className='cards-container'>
        <h3 className='cards-heading'>Basic</h3>
        <p className='price'>{!props.prices ? '$19.99' : '$199.99'}</p>
        <ul className='cards-list'>
          <li className='list-item'>500 GB Storage</li>
          <li className='list-item'>2 Users Allowed</li>
          <li className='list-item'>Send up to 3 GB</li>
        </ul>
        <button className='cards-btn'>Learn More</button>
      </div>
      <div className='cards-container middle'>
        <h3 className='cards-heading white'>Professional</h3>
        <p className='price white'>{!props.prices ? '$24.99' : '$249.99'}</p>
        <ul className='cards-list'>
          <li className='list-item white'>1 TB Storage</li>
          <li className='list-item white'>5 Users Allowed</li>
          <li className='list-item white'>Send up to 10 GB</li>
        </ul>
        <button className='cards-btn button'>Learn More</button>
      </div>
      <div className='cards-container'>
        <h3 className='cards-heading'>Master</h3>
        <p className='price'>{!props.prices ? '$39.99' : '$399.99'}</p>
        <ul className='cards-list'>
          <li className='list-item'>2 TB Storage</li>
          <li className='list-item'>10 Users Allowed</li>
          <li className='list-item'>Send up to 20 GB</li>
        </ul>
        <button className='cards-btn'>Learn More</button>
      </div>
    </div>
  )
}

export default Cards