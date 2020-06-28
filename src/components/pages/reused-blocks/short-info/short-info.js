import React from 'react';

import './short-info.css'

import phone from './../../../../img/icons/short-info-icons/phone.png';
import clock from './../../../../img/icons/short-info-icons/clock.png';
import pin from './../../../../img/icons/short-info-icons/pin.png';

const ShortBlock = ( ) =>{
    return(
        <div className="short-info_block">

            {/* left part */}

            <ul className="left-info_block">
                <li className="left-info_item">
                    <div className="left-items_header">
                    <img src={phone} className="short-icon"/>
                    <p>Number</p>
                    </div>
                    <p>Some text</p>
        
                </li>
                <li className="left-info_item">
                    <img src={clock} className="short-icon"/>
                    2
                </li>
                <li className="left-info_item">
                    <img src={pin} className="short-icon"/>
                    3
                </li>
            </ul>


            {/* right part */}
    
                <ul className="right-info_block">
                    <li className="right-info_icon">
                        icon_1
                    </li>
                    <li className="right-info_icon">
                        icon_2
                    </li>
                    <li className="right-info_icon">
                        icon_3
                    </li>
                </ul>
            </div>
     
    )
}

export default ShortBlock;