import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
  
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              BOOKHOTEL
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                  Overviews
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Order'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Order
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/RoomList'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  RoomList
                </Link>
              </li>
  
              <li>
                <Link
                  to='/Login'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
          </div>
        </nav>
      </>
    );
  }

export default Navbar
