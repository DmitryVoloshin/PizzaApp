import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './short-menu.css'
import ShortHeader from './short-pages/short-header';
import ShortDrink from './short-pages/short-drinks';

const ShortMenu = ( ) =>{
    return(
        <div className="shortmenu-block">
            <div className="shortmenu-block_img"/>
            <div className="short-menu_links">
                <Router>
                    <ShortHeader/>
                        <Route path="/drinks" component={ShortDrink}/>
                </Router>
            </div>
         
        </div>
    )
}

export default ShortMenu;