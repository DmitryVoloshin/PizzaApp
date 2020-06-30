import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './short-menu.css'
import ShortHeader from './short-pages/short-header';
import ShortDrink from './short-pages/short-drinks';
import ShortPizza from './short-pages/short-pizza';
import ShortBurger from './short-pages/short-burger';
import ShortPasta from './short-pages/short-pasta';

const ShortMenu = ( ) =>{
    return(
        <div className="shortmenu-block">
            <div className="shortmenu-block_img"/>
            <div className="short-menu_links">
                <Router>
                    <ShortHeader/>
                        <Route path="/drinks" component={ShortDrink} exact/>
                        <Route path="/pizza" component={ShortPizza}/>
                        <Route path="/burgers" component={ShortBurger}/>
                        <Route path="/pasta" component={ShortPasta}/>
                </Router>
            </div>
         
        </div>
    )
}

export default ShortMenu;