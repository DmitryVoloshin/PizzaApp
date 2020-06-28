import React from 'react';

import './service-block.css'

import vegetable from './../../../../img/icons/service-icons/vegetable.png';
import delivery from './../../../../img/icons/service-icons/delivery.png';

const ServiceBlock = ( ) =>{
    return(
        <div className="service-block">
            <h2 className="service-block_header">OUR SERVICES</h2>
            <p className="service-block_text">Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>

            <ul className="service-items_block">
                <li className="service-item">
                    <div className="service-item_image">
                       <img src={vegetable} className="item-image"/>
                    </div>
                    <h2 className="service-item_title"></h2>
                    <p className="service-item_text">

                    </p>
                </li>
                <li className="service-item">
                    <div className="service-item_image">
                        <img src={delivery} className="item-image"/>
                    </div>
                    <h2 className="service-item_title"></h2>
                    <p className="service-item_text">

                    </p>
                </li>
                <li className="service-item">
                    <div className="service-item_image">
                        3
                    </div>
                    <h2 className="service-item_title"></h2>
                    <p className="service-item_text">

                    </p>
                </li>
            </ul>
        </div>
    )
}

export default ServiceBlock