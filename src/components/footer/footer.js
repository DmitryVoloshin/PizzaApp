import React from 'react';

import './footer.css'

import image1 from './../../img/footerimg/image1.jpg'
import image2 from './../../img/footerimg/image2.jpg'

const Footer = ( ) =>{
    return(
        <footer className="footer-block">
            <div className="main-footer_block">
                <ul className="footer-items_list">
                    <li className="footer-block_item">
                        <h2 className="footer-item_title">ABOUT US</h2>
                        <p>Far far away, behind the word mountains, 
                            far from the countries Vokalia and Consonantia, 
                            there live the blind texts.</p>
                    </li>
                    <li className="footer-block_item blog-width">
                        <h2 className="footer-item_title">RECENT BLOG</h2>
                        <div className="blog-item">
                            <div className="blog-item_block">
                                <img src={image1} className="footer-blog_image"/>
                                <div className="blog-item_first">
                                    <a>Even the all-powerful Pointing has no control about</a>
                                    <span className="blog-item_text">
                                        <p>2</p>
                                        <p>3</p>
                                        <p>4</p>
                                    </span>
                                </div>
                            </div>
                            <div className="blog-item_block">
                                <img src={image2} className="footer-blog_image"/>
                                <div className="blog-item_first">
                                    <a>Even the all-powerful Pointing has no control about</a>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="footer-block_item">
                        <h2 className="footer-item_title">SERVICES</h2>
                    </li>
                    <li className="footer-block_item">
                        <h2 className="footer-item_title">HAVE A QUESTIONS?</h2>
                    </li>
                </ul>
            </div>
            <div>

            </div>
        </footer>
    )
}

export default Footer;
