import './navbar.css';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { MenuItems } from './MenuItems';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);  
  return (
    <>
        <nav className='Navbar'>
           <div className="navbar-container">
            <h1 className='nav-logo'>GU tech</h1> 
            <div className="menu-icons" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              {MenuItems.map((item, index) => {
                return(
                  <li key = {index}> 
                   <Link className={item.cName }>
                     <i class={item.icon}></i> {item.title}
                   </Link>
                  </li>
                )
              })}
            </ul>
           </div>
        </nav>
    </>
  )
}

export default Navbar;
