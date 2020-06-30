import React from 'react';

import './count-block.css'

const CountBlock = ( ) =>{
    return(
        <section className="count-block">
            <div className="count-block_overlay">
                <ul className="count-block_list">
                    <li className="count-list_item">
                        <img className="count-item_img"/>
                    </li>
                    <li className="count-list_item">
                        <img className="count-item_img"/>
                    </li>
                    <li className="count-list_item">
                        <img className="count-item_img"/>
                    </li>
                    <li className="count-list_item">
                        <img className="count-item_img"/>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default CountBlock