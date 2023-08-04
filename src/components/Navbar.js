import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='text-white static top-0 left-0 right-0 container flex justify-center items-center'>
            <ul>
                <Link to="/" className='hover:bg-cyan-400 rounded-md px-5 py-2 hover:text-black active:bg-cyan-400'>Register</Link> &emsp;
                <Link to="/login" className='hover:bg-cyan-400 rounded-md px-5 py-2 hover:text-black'>Login</Link>
                {/* <Link to="/dashboard">dash</Link> */}
            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
