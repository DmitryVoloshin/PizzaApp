import React from 'react';
import { Link } from 'react-router-dom'

import './short-header.css'

const ShortHeader = () =>{
    return(
        <div>
            <ul className="short-header_nav">
                <li className="short-header_link">
                    <Link to="/pizza" className="short-link_item">Pizza</Link>
                </li>
                <li className="short-header_link">
                    <Link to="/drinks" className="short-link_item">Drinks</Link>
                </li>
                <li className="short-header_link">
                    <Link to="/burgers" className="short-link_item">Burgers</Link>
                </li>
                <li className="short-header_link">
                    <Link to="/pasta" className="short-link_item">Pasta</Link>
                </li>
            </ul>
        </div>
    )
}

export default ShortHeader