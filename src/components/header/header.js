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
                <li className="header-block_item">
                    <Link to="/" className="header-link">Home</Link>
                </li>
                <li className="header-block_item">
                    <Link to="/menu" className="header-link">Menu</Link>
                </li>
                <li className="header-block_item">
                    <Link to="/service" className="header-link">Service</Link>
                </li>
                <li className="header-block_item">
                    <Link to="/blog" className="header-link">Blog</Link>
                </li>
                <li className="header-block_item">
                    <Link to="/about" className="header-link">About</Link>
                </li>
                <li className="header-block_item">
                    <Link to="/contact" className="header-link">Contact</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header