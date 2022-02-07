import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error-page section'>
      <div className="error-container">
        <h1>Oops! You Lost Your Way!</h1>
        <Link to="/" className='btn btn-primary'>Home</Link>
      </div>
    </div>
  )
}

export default Error
