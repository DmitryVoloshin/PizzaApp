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
            <div className="right-info_block">right</div>
        </div>
    )
}

export default ShortBlock;