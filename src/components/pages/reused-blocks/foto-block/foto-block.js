import React from 'react';

import './foto-block.css'


const FotoBlock = ( ) =>{
    return(
        <section className="foto-block"> 
           
            <ul className="foto-block_list">  
                <li className="foto-list_item">
                    <span className="list-item_sqr">
                        <img className="item-sqr_image"></img>
                    </span>
                </li>
                <li className="foto-list_item">
                    <span className="list-item_sqr">
                        <img className="item-sqr_image"></img>
                    </span>
                </li>
                <li className="foto-list_item">
                    <span className="list-item_sqr">
                        <img className="item-sqr_image"></img>
                    </span>
                </li>
                <li className="foto-list_item">
                    <span className="list-item_sqr">
                        <img className="item-sqr_image"></img>
                    </span>
                </li>
            </ul>

        </section>
    )
}

export default FotoBlock