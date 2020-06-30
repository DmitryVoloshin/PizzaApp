import React from 'react';
import { Link } from 'react-router-dom';

import './main-page.css'
import ShortBlock from '../reused-blocks/short-info';
import WelocomeBlock from '../reused-blocks/welcome-block';
import ServiceBlock from '../reused-blocks/service-block';
import MenuBlock from '../reused-blocks/menu-block';
import FotoBlock from '../reused-blocks/foto-block';
import CountBlock from '../reused-blocks/count-block';
import ContactBlock from '../reused-blocks/contact-block';


const MainPage = ( ) =>{
    return (
        <main>
                <div className="main-page_block">

            {/* This block of code just for time,in future i rechange it to carousel and put it in new component  */}

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
                <Link to="/menu" className="pizza-constructor_block">
                    <button className="pizza-constructor_button view-menu_button">View Menu</button>
                </Link>
                <Link to="/constructor" className="pizza-constructor_block">
                    <button className="pizza-constructor_button">I want my Pizza</button>
                </Link>
                </div>
                </div>

        </div>
        {/* Another blocks */}

        <ShortBlock/>
        <WelocomeBlock/>
        <ServiceBlock/>
        <MenuBlock/>
        <FotoBlock/>
        <CountBlock/>
        <ContactBlock/>
        </main>
    )
}

export default MainPage;