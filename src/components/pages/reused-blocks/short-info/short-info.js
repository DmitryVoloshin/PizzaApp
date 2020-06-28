import React from 'react';

import './short-info.css'

import phone from './../../../../img/icons/short-info-icons/phone.png';
import clock from './../../../../img/icons/short-info-icons/clock.png';
import pin from './../../../../img/icons/short-info-icons/pin.png';

import facebook from './../../../../img/icons/short-info-socials/facebook.png';
import twitter from './../../../../img/icons/short-info-socials/twitter.png';
import instagram from './../../../../img/icons/short-info-socials/instagram.png';

const ShortBlock = ( ) =>{
    return(
        <div className="short-info_block">

            {/* left part */}

            <ul className="left-info_block">
                <li className="left-info_item">
                    <div className="left-items_header">
                    <img src={phone} className="short-icon"/>
                    <p>000 (123) 456 7890</p>
                    </div>
                    <p className="left-info_text">A small river named</p>
                    <p className="left-info_text">Duden flows</p>
                </li>
                <li className="left-info_item">
                    <div className="left-items_header">
                    <img src={clock} className="short-icon"/>
                    <p>Open Monday-Friday</p>
                    </div>
                    <p className="left-info_text">8:00am - 9:00pm</p>
                    <p className="left-info_text black">Sometimes to 11:00pm</p>
                </li>
                <li className="left-info_item">
                    <div className="left-items_header">
                    <img src={pin} className="short-icon"/>
                    <p>198 West 21th Street</p>
                    </div>
                    <p className="left-info_text">Suite 721 New York NY</p>
                    <p className="left-info_text black">10016</p>
                </li>
            </ul>


            {/* right part */}
         
                <ul className="right-info_block">
                    <li className="right-info_icon">
                       <a href="#"><img src={facebook} className="right-info_icon"/></a>
                    </li>
                    <li className="right-info_icon">
                        <a href="#"><img src={twitter} className="right-info_icon"/></a>
                    </li>
                    <li className="right-info_icon">
                       <a href="#"><img src={instagram} className="right-info_icon"></img></a>
                    </li>
                </ul>

            </div>
     
    )
}

export default ShortBlock;