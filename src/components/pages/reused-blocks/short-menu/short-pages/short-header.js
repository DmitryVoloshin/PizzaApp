import React from 'react';
import { Link } from 'react-router-dom'

import './short-header.css'

const ShortHeader = () =>{
    return(
        <div>
            <ul className="short-header_nav">
                <li className="short-header_link">
                    <Link to="/pizza">Pizza</Link>
                </li>
                <li className="short-header_link">
                    <Link to="/drinks">Drinks</Link>
                </li>
                <li className="short-header_link">
                    <Link to="/burgers">Burgers</Link>
                </li>
                <li className="short-header_link">
                    <Link to="/pasta">Pasta</Link>
                </li>
            </ul>
        </div>
    )
}

export default ShortHeader