import React from 'react';

import './count-block.css'

import fun from './../../../../img/count-block/count-icons/fun.png'
import pizza from './../../../../img/count-block/count-icons/pizza.png'
import kitchen from './../../../../img/count-block/count-icons/kitchen.png'
import quality from './../../../../img/count-block/count-icons/quality.png'

const CountBlock = ( ) =>{
    return(
        <section className="count-block">
            <div className="count-block_overlay">
                <ul className="count-block_list">
                    <li className="count-list">
                        <div className="count-list_item">
                            <img className="count-item_img" src={pizza}/>
                        </div>
                        
                        <h2 className="count-item_title">100</h2>
                        <p className="count-item_text"></p>
                    </li>
                    <li className="count-list">
                        <div className="count-list_item">
                            <img className="count-item_img" src={quality}/>
                        </div>
                        
                        <h2 className="count-item_title">85</h2>
                        <p className="count-item_text"></p>
                    </li>
                    <li className="count-list">
                        <div className="count-list_item">
                            <img className="count-item_img" src={fun}/>
                        </div>
                       
                        <h2 className="count-item_title">10,567</h2>
                        <p className="count-item_text"></p>
                    </li>
                    <li className="count-list">
                        <div className="count-list_item"> 
                            <img className="count-item_img" src={kitchen}/>
                        </div>
                       
                        <h2 className="count-item_title">900</h2>
                        <p className="count-item_text"></p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default CountBlock