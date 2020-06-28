import React from 'react';

import './service-block.css'

import vegetable from './../../../../img/icons/service-icons/vegetable.png';
import delivery from './../../../../img/icons/service-icons/delivery.png';
import slice from './../../../../img/icons/service-icons/slice.png'

const ServiceBlock = ( ) =>{


    return(
    
        <div className="service-block">
            <h3 className="service-block_header">OUR SERVICES</h3>
            <p className="service-block_text">Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>

            <ul className="service-items_block">
                <li className="service-item">
                    <div className="service-item_image">
                       <img src={vegetable} className="item-image"/>
                    </div>
                    <h3 className="service-item_title">HEALTHY FOODS</h3>
                    <p className="service-item_text">
                    Even the all-powerful Pointing has no control about 
                    the blind texts it is an almost unorthographic.
                    </p>
                </li>
                <li className="service-item">
                    <div className="service-item_image">
                        <img src={delivery} className="item-image"/>
                    </div>
                    <h3 className="service-item_title">FASTEST DELIVERY</h3>
                    <p className="service-item_text">
                    Even the all-powerful Pointing has no control about 
                    the blind texts it is an almost unorthographic.
                    </p>
                </li>
                <li className="service-item">
                    <div className="service-item_image">
                        <img src={slice} className="item-image"/>
                    </div>
                    <h3 className="service-item_title">ORIGINAL RECIPES</h3>
                    <p className="service-item_text">
                    Even the all-powerful Pointing has no control 
                    about the blind texts it is an almost unorthographic.
                    </p>
                </li>
            </ul>
        </div>
 
    )
}

export default ServiceBlock