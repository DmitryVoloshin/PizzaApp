import React from 'react';

import './pages.css';

import pizza1 from './../../../../../img/short-menu/pizza1.jpg'
import pizza2 from './../../../../../img/short-menu/pizza2.jpg'
import pizza3 from './../../../../../img/short-menu/pizza3.jpg'

const ShortPizza = ( ) =>{
    return(
        <div className="short-block">
        <div className="short-block_page">
            <img className="short-menu_image" src={pizza1}/>
            <h2 className="short-menu_title">Italian Pizza</h2>
            <p className="short-menu_text">Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia.
            </p>
            <p className="short-menu_price">$2.90</p>
            <button className="short-menu_tocart">Add to cart</button>
        </div>
        <div className="short-block_page">
            <img className="short-menu_image" src={pizza2}/>
            <h2 className="short-menu_title">Italian Pizza</h2>
            <p className="short-menu_text">Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia.
            </p>
            <p className="short-menu_price">$2.90</p>
            <button className="short-menu_tocart">Add to cart</button>
        </div>
        <div className="short-block_page">
            <img className="short-menu_image" src={pizza3}/>
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

export default ShortPizza