import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='bg-light row p-5 w-100'>
      <div className="col">
        <h4>Redux Cart</h4>
        <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum deleniti labore odit illo, incidunt impedit laudantium culpa nemo voluptatibus corrupti, perferendis fuga, maiores esse dicta. Nam illum aliquid praesentium laboriosam!</p>
      </div>

      <div className="col d-flex flex-column align-items-center">
        <h4>Links</h4>
        <div className="d-flex flex-column align-content-around">
          <Link to={'/'}>Home</Link>
          <Link to={'wish'}>Wishlist</Link>
          <Link to={'cart'}>Cart</Link>
        </div>
      </div>

      <div className="col">
        <h4>Contact Us</h4>
        <p>phone : +91 7356545568</p>
        <p>Calicut , Kerala</p>
        <textarea name="" className='form-control' placeholder='feedback..' id=""></textarea>
      </div>  
    </div>
    </>
  )
}

export default Footer
