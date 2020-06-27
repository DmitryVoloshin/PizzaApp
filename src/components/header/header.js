import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'


const Header = ( ) =>{
    return(
        <header className="header-block">
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
                    <Link to="/service">Service</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header