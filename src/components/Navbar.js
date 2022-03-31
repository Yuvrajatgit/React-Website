import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';

const Navbar = ()=>{

    const [button,setButton] = useState(true);
    const [click,setClick] = useState(false);
    const menuHandler = ()=>{
        setClick(!click);
    }
    
    const closeMobileHandler = ()=>{
        setClick(false);
    };
    
    const showButton = ()=>{
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton();
    },[]);
    
    window.addEventListener('resize', showButton);

    return(
<Fragment>
<nav className='navbar'>
    <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileHandler}>
            TRVL <i className="fa-solid fa-plane-departure"></i>
        </Link>
        <div className='menu-logo' onClick={menuHandler}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
             <Link to='/' className='nav-links' onClick={closeMobileHandler}>Home</Link> 
            </li>
            <li className='nav-item'>
             <Link to='/products' className='nav-links' onClick={closeMobileHandler}>Products</Link> 
            </li>
            <li className='nav-item'>
             <Link to='/services' className='nav-links' onClick={closeMobileHandler}>Services</Link> 
            </li>
            <li className='nav-item'>
             <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileHandler}>Sign Up</Link> 
            </li>
        </ul> 
        {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
    </div>
</nav>
</Fragment>
    );
}

export default Navbar;