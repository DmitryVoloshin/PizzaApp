import React from 'react';

import './pages.css'


import burger1 from './../../../../../img/short-menu/burger1.jpg'
import burger2 from './../../../../../img/short-menu/burger2.jpg'
import burger3 from './../../../../../img/short-menu/burger3.jpg'

const ShortBurger = ( ) =>{
    return(
        <div className="short-block">
        <div className="short-block_page">
            <img className="short-menu_image" src={burger1}/>
            <h2 className="short-menu_title">Italian Pizza</h2>
            <p className="short-menu_text">Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia.
            </p>
            <p className="short-menu_price">$2.90</p>
            <button className="short-menu_tocart">Add to cart</button>
        </div>
        <div className="short-block_page">
            <img className="short-menu_image" src={burger2}/>
            <h2 className="short-menu_title">Italian Pizza</h2>
            <p className="short-menu_text">Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia.
            </p>
            <p className="short-menu_price">$2.90</p>
            <button className="short-menu_tocart">Add to cart</button>
        </div>
        <div className="short-block_page">
            <img className="short-menu_image" src={burger3}/>
            <h2 className="short-menu_title">Italian Pizza</h2>
            <p className="short-menu_text">Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia.
            </p>
            <p className="short-menu_price">$2.90</p>
            <button className="short-menu_tocart">Add to cart</button>
        </div>
        </div>
    )
}

export default ShortBurger