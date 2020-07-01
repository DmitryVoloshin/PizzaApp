import React from 'react';

import './pages.css'


import drink1 from './../../../../../img/short-menu/drink1.jpg'
import drink2 from './../../../../../img/short-menu/drink2.jpg'
import drink3 from './../../../../../img/short-menu/drink3.jpg'

const ShortDrink = ( ) =>{
    return(
        <div className="short-block">
        <div className="short-block_page">
            <img className="short-menu_image" src={drink1}/>
            <h2 className="short-menu_title">Italian Pizza</h2>
            <p className="short-menu_text">Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia.
            </p>
            <p className="short-menu_price">$2.90</p>
            <button className="short-menu_tocart">Add to cart</button>
        </div>
        <div className="short-block_page">
            <img className="short-menu_image" src={drink2}/>
            <h2 className="short-menu_title">Italian Pizza</h2>
            <p className="short-menu_text">Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia.
            </p>
            <p className="short-menu_price">$2.90</p>
            <button className="short-menu_tocart">Add to cart</button>
        </div>
        <div className="short-block_page">
            <img className="short-menu_image" src={drink3}/>
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

export default ShortDrink