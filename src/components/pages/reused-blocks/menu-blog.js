import React from 'react';
import ShortMenu from './short-menu';
import RecentBlog from './recent-blog-block';

import './menu-blog.css'
const MenuBlog = ( ) =>{
    return(
        <div className="menu-blog_block">
            <ShortMenu/>
            <RecentBlog/>
        </div>
    )
}

export default MenuBlog