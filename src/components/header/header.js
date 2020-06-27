import React from 'react';
import { Link } from 'react-router-dom';


const Header = ( ) =>{
    return(
        <header>
            <div className="header-block_logo">
                Logo
            </div>
            <ul className="header-block_nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/about">Service</Link>
                </li>
                <li>
                    <Link to="/about">Blog</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/about">Contact</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header