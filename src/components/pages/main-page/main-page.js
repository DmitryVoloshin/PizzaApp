import React from 'react';
import { Link } from 'react-router-dom';

import './main-page.css'


const MainPage = ( ) =>{
    return (
        <main className="main-page_block">
                <div className="circle-pizza_pice"></div>
                <div className="right-block_pizza">
                <h2 className="right-block_title">Italian Pizza</h2>
                <p className="right-block_about">
                A small 
                river named Duden flows
                by their place and supplies it 
                with the necessary regelialia
                </p>
                <div className="pizza-block_buttons">
                <Link to="/constructor" className="pizza-constructor_block">
                    <button className="pizza-constructor_button view-menu_button">View Menu</button>
                </Link>
                <Link to="/constructor" className="pizza-constructor_block">
                    <button className="pizza-constructor_button">I want my Pizza</button>
                </Link>
                </div>
                </div>
        </main>
    )
}

export default MainPage;