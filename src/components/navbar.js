import React, {useState} from 'react'
import {Link} from 'react-router-dom';
function navbar() {
  const [click, setClick] = useState(false);
    return (
    <>
        <nav className='Navbar'>
           <div className="navbar-container">
            <Link to = '/' className='navbar-logo' >
                UG 
            </Link>
           </div>
        </nav>
    </>
  )
}

export default navbar
