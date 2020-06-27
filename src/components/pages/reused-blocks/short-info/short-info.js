import React from 'react';

import './short-info.css'

const ShortBlock = ( ) =>{
    return(
        <div className="short-info_block">

            {/* left part */}

            <ul className="left-info_block">
                <li className="left-info_item">
                    1
                </li>
                <li className="left-info_item">
                    2
                </li>
                <li className="left-info_item">
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