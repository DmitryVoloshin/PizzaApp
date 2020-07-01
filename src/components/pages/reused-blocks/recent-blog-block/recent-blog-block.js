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
                  <a className="recent-blog_image"><img/></a>
                  <div className="">

                  </div>
                  <a className="blog-list_title">
                    The Delicious Pizza
                  </a>
                  <p className="blog-list_text">
                  A small river named Duden flows by their place 
                  and supplies it with the necessary regelialia.
                  </p>
              </li>  
            </ul>
        </div>
    )
}

export default RecentBlog