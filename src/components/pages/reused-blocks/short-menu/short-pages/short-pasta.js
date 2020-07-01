import React from 'react';

import './pages.css';

import pasta1 from './../../../../../img/short-menu/pasta1.jpg'
import pasta2 from './../../../../../img/short-menu/pasta2.jpg'
import pasta3 from './../../../../../img/short-menu/pasta3.jpg'

const ShortPasta = ( ) =>{
    return(
        <div className="short-block">
        <div className="short-block_page">
            <img className="short-menu_image" src={pasta1}/>
            <h2 className="short-menu_title">Italian Pizza</h2>
            <p className="short-menu_text">Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia.
            </p>
            <p className="short-menu_price">$2.90</p>
            <button className="short-menu_tocart">Add to cart</button>
        </div>
        <div className="short-block_page">
            <img className="short-menu_image" src={pasta2}/>
            <h2 className="short-menu_title">Italian Pizza</h2>
            <p className="short-menu_text">Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia.
            </p>
            <p className="short-menu_price">$2.90</p>
            <button className="short-menu_tocart">Add to cart</button>
        </div>
        <div className="short-block_page">
            <img className="short-menu_image" src={pasta3}/>
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

export default ShortPasta