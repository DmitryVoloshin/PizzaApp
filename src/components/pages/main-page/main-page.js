import React from 'react';
import { Link } from 'react-router-dom';

import './main-page.css'


const MainPage = ( ) =>{
    return (
        <main className="main-page_block">
                <div className="circle-pizza_pice"></div>
                <Link to="/constructor" className="pizza-constructor_block">
                    <button className="pizza-constructor_button">I want my Pizza</button>
                </Link>
             
        </main>
    )
}

export default MainPage;