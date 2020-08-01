import React from 'react'

import './recent-blog-block.css'

import image1 from './../../../../img/recent-blog/image1.jpg'
import message from './../../../../img/icons/footer-icons/message.png'

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
                  <a ><img src={image1} className="recent-blog_image"/></a>
                  <div className="recent-blog_meta">
                        <p className="blog-meta_text"> Sept10,2018 </p>
                        <p className="blog-meta_text"> Admin </p>
                        <p className="blog-meta_text">
                            <img src={message} className="recent-blog_icon"/> 
                                    3 
                        </p>
                  </div>
                  <a className="blog-list_title">
                    The Delicious Pizza
                  </a>
                  <p className="blog-list_text">
                  A small river named Duden flows by their place 
                  and supplies it with the necessary regelialia.
                  </p>
              </li> 
              <li className="recent-blog_item">
                  <a ><img src={image1} className="recent-blog_image"/></a>
                  <div className="recent-blog_meta">
                        <p className="blog-meta_text"> Sept10,2018 </p>
                        <p className="blog-meta_text"> Admin </p>
                        <p className="blog-meta_text">
                            <img src={message} className="recent-blog_icon"/> 
                                    3 
                        </p>
                  </div>
                  <a className="blog-list_title">
                    The Delicious Pizza
                  </a>
                  <p className="blog-list_text">
                  A small river named Duden flows by their place 
                  and supplies it with the necessary regelialia.
                  </p>
              </li> 
              <li className="recent-blog_item">
                  <a ><img src={image1} className="recent-blog_image"/></a>
                  <div className="recent-blog_meta">
                        <p className="blog-meta_text"> Sept10,2018 </p>
                        <p className="blog-meta_text"> Admin </p>
                        <p className="blog-meta_text">
                            <img src={message} className="recent-blog_icon"/> 
                                    3 
                        </p>
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