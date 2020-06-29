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
import pin from './../../img/icons/footer-icons/pin.png';
import phone from './../../img/icons/footer-icons/phone.png';
import mail from './../../img/icons/footer-icons/mail.png';
//Socials icons
import twitter from './../../img/icons/footer-icons/footer-socials-icons/twitter.png';
import facebook from './../../img/icons/footer-icons/footer-socials-icons/facebook.png';
import instagram from './../../img/icons/footer-icons/footer-socials-icons/instagram.png';
//Heart icon for copyright
import heart from './../../img/icons/footer-icons/footer-socials-icons/heart.png';


const Footer = ( ) =>{
    return(
        <footer className="footer-block">
            <div className="main-footer_block">
                <ul className="footer-items_list">
                    <li className="footer-block_item">
                        <h2 className="footer-item_title">ABOUT US</h2>
                        <p className="footer-about_block">Far far away, behind the word mountains, 
                            far from the countries Vokalia and Consonantia, 
                            there live the blind texts.</p>
                                <ul className="footer-social_block">
                                    <li className="footer-social_item"><a href="#"><img src={twitter} className="footer-social_icon"/></a></li>
                                    <li className="footer-social_item"><a href="#"><img src={facebook} className="footer-social_icon"/></a></li>
                                    <li className="footer-social_item"><a href="#"><img src={instagram} className="footer-social_icon"/></a></li>
                                </ul>
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
                                    <img src={phone} className="question-list_image"/>
                                    <p className="question-list_text">
                                    +2 392 3929 210
                                    </p>
                                </li>  
                                <li className="question-list_item">
                                    <img src={mail} className="question-list_image"/>
                                    <p className="question-list_text">
                                    info@yourdomain.com 
                                    </p>
                                </li>     
                            </ul>
                    </li>         

                </ul>
            </div>
            <div className="footer-copyright_block">
                <h3 className="footer-copyright_text">
                Copyright ©2020 All rights reserved | This template is made with   
                <img src={heart} className="footer-heart_icon"/> by <a>Colorlib</a>
                </h3>
            </div>
                
        </footer>
    )
}

export default Footer;
