import React from 'react';

import './footer.css'

// Blog image
import image1 from './../../img/footerimg/image1.jpg';
import image2 from './../../img/footerimg/image2.jpg';
// Blog icons
import calendar from './../../img/icons/footer-icons/calendar.png';
import user from './../../img/icons/footer-icons/user.png';
import message from './../../img/icons/footer-icons/message.png';
//Question Icons
import pin from './../../img/icons/footer-icons/pin.png'


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
                                        <span className="blog-item_under">
                                            <img src={calendar} className="blog-item_icon"/>
                                            <p>Sept 15, 2018</p>
                                        </span>
                                        <span className="blog-item_under">
                                            <img src={user} className="blog-item_icon"/>
                                            <p>Admin</p>
                                        </span>
                                        <span className="blog-item_under">
                                            <img src={message} className="blog-item_icon"/>
                                            <p>19</p>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="blog-item_block">
                                <img src={image2} className="footer-blog_image"/>
                                <div className="blog-item_first">
                                    <a>Even the all-powerful Pointing has no control about</a>
                                    <span className="blog-item_text">
                                        <span className="blog-item_under">
                                            <img src={calendar} className="blog-item_icon"/>
                                            <p>Sept 15, 2018</p>
                                        </span>
                                        <span className="blog-item_under">
                                            <img src={user} className="blog-item_icon"/>
                                            <p>Admin</p>
                                        </span>
                                        <span className="blog-item_under">
                                            <img src={message} className="blog-item_icon"/>
                                            <p>19</p>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="footer-block_item">
                        <h2 className="footer-item_title">SERVICES</h2>
                        <div className="footer-item_service">
                            <a href="#">Cooked</a>
                            <a href="#" className="footer-service_link">Deliver</a>
                            <a href="#" className="footer-service_link">Quality Foods</a>
                            <a href="#" className="footer-service_link">Mixed</a>
                        </div>
                    </li>
                    <li className="footer-block_item">
                        <h2 className="footer-item_title">HAVE A QUESTIONS?</h2>
                            <ul className="footer-question_list">
                                <li className="question-list_item">
                                    <img src={pin} className="question-list_image"/>
                                    <p className="question-list_text">
                                    203 Fake St. Mountain View, San Francisco, 
                                    California, USA    
                                    </p>
                                </li>
                                <li className="question-list_item">
                                    <img className="question-list_image"/>
                                    <p className="question-list_text">
                                    +2 392 3929 210
                                    </p>
                                </li>  
                                <li className="question-list_item">
                                    <img className="question-list_image"/>
                                    <p className="question-list_text">
                                    info@yourdomain.com 
                                    </p>
                                </li>     
                            </ul>
                    </li>
                </ul>
            </div>
            <div>

            </div>
        </footer>
    )
}

export default Footer;
