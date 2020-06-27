import React from 'react';
import { Link } from 'react-router-dom';

import './main-page.css'


const MainPage = ( ) =>{
    return (
        <main className="main-page_block">
        
                <Link to="/constructor">
                    <button className="pizza-constructor_button">I want my Pizza</button>
                </Link>
             
        </main>
    )
}

export default MainPage;