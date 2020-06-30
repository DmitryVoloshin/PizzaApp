import React from 'react';
import { Link } from 'react-router-dom'

import './short-header.css'

const ShortHeader = () =>{
    return(
        <div>
            <ul className="short-header_nav">
                <li className="short-header_link">
                    <Link>Pizza</Link>
                </li>
                <li className="short-header_link">
                    <Link>Drinks</Link>
                </li>
                <li className="short-header_link">
                    <Link>Burgers</Link>
                </li>
                <li className="short-header_link">
                    <Link>Pasta</Link>
                </li>
            </ul>
        </div>
    )
}

export default ShortHeader