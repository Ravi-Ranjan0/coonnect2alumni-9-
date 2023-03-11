import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
          <h4 className='text-center'>
            All right reserved 
          </h4>
          <p className="text-center mt-3">
            <Link to='/about'>About</Link>
            <Link to='/contacts'>Contacts</Link>
            <Link to='/policy'>Privacy Policy</Link>
          </p>
          <p className="text-center mt-5 mb-3">© Tech Troopers</p>
      </div>
  )
}

export default Footer