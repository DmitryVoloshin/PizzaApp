import React from 'react';

import './menu-block.css'

import menu from './../../../../img/time-plug/menu.png';

const MenuBlock = ( ) =>{

    


    return(
        <div className="menu-block">
           <div className="menu-block_menu">
                <h2 className="menu-block_title">HOT PIZZA MEALS</h2>
                <p className="menu-block_text">Far far away, behind the word mountains, 
                far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className="menu-block_list">   
                    <img src={menu} className="plug-for_time"></img>
                </div>
           </div>
           <div className="menu-block_pricing">
                <h2 className="pricing-block_title">Our Menu pricing</h2>
                <div className="pricing-block_image"></div>
                <p className="pricing-blcok_text">
                Far far away, behind the word mountains, 
                far from the countries Vokalia and Consonantia, 
                there live the blind texts.
                </p>
           </div>
        </div>
    )
}

export default MenuBlock