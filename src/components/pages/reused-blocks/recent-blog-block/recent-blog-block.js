import React from 'react'

import './recent-blog-block.css'

const RecentBlog = ( ) =>{
    return(
        <div className="recent-blog_block">
            <h2 className="recent-blog_title">Recent from blog</h2>
            <p className="recent-blog_text">
                Far far away, behind the word mountains, far from the 
                countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <ul className="recent-blog_list">
              <li className="recent-blog_item">
                  <a><img/></a>
              </li>  
            </ul>
        </div>
    )
}

export default RecentBlog