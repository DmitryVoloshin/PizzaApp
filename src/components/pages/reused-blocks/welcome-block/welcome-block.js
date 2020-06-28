import React from 'react';

import './welcome-block.css';

import pizza from './../../../../img/icons/pizza.png';
import tables from './../../../../img/tables.png'

const WelocomeBlock = ( ) =>{
    return(
        <div className="main-page_welcome">
            <div className="welcome-left_block">
                <img src={tables}/>
            </div>
            <div className="welcome-right_block">
                <h2 className="welcome-right_title"> WELCOME TO <span className="right-title_word"> <img src={pizza} className="right-title_pizza"/>PIZZA </span> A RESTAURANT</h2>
                <p className="welcome-right_text">
                    On her way she met a copy. 
                The copy warned the Little Blind Text, that where it came from 
                it would have been rewritten a thousand times and everything that
                 was left from its origin would be the word "and" and the Little 
                 Blind Text should turn around and return to its own, safe country. 
                 But nothing the copy said could convince her and so it didn’t take long 
                 until a few insidious Copy Writers ambushed her, made her drunk with 
                 Longe and Parole and dragged her into their agency, where they abused her for their.
                 </p>
            </div>
        </div>
    )
}

export default WelocomeBlock