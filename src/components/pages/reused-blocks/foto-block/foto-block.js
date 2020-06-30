import React from 'react';

import './foto-block.css'

import search from './../../../../img/foto-block-images/search.png'

const FotoBlock = ( ) =>{
    return(
        <section className="foto-block"> 

            <ul className="foto-block_list">  
                <li className="foto-list_item">
                    <span className="list-item_sqr">
                        <img  src={search} className="item-sqr_image"/>
                    </span>
                </li>
                <li className="foto-list_item">
                    <span className="list-item_sqr">
                    <img  src={search} className="item-sqr_image"/>
                    </span>
                </li>
                <li className="foto-list_item">
                    <span className="list-item_sqr">
                    <img  src={search} className="item-sqr_image"/>
                    </span>
                </li>
                <li className="foto-list_item">
                    <span className="list-item_sqr">
                    <img  src={search} className="item-sqr_image"/>
                    </span>
                </li>
            </ul>

        </section>
    )
}

export default FotoBlock