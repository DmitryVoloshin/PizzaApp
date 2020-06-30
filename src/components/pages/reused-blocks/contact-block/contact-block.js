import React from 'react';

import './contact-block.css'


const ContactBlock = ( ) =>{


    return(
        <section className="contact-block_section">
            <iframe  className="contact-block_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206128.55759106993!2d-86.80408947707028!3d36.17242577164807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864ec3213eb903d%3A0x7d3fb9d0a1e9daa0!2z0J3QsNGI0LLQuNC70LssINCi0LXQvdC90LXRgdGB0LgsINCh0KjQkA!5e0!3m2!1sru!2sua!4v1593544524903!5m2!1sru!2sua"></iframe>
        <div className="contact-block_form">
            <form className="contact-block_form">
                <h2 className="contact-form_title">Contact Us</h2>
                <input type="text" placeholder="First Name" className="contact-form_item"></input>
                <input type="text" placeholder="Last Name" className="contact-form_item"></input>
                <input type="text" placeholder="Message" className="contact-form_item"></input>
                <input type="submit" value="Send" className="contact-form_button" ></input>
            </form>
        </div>
        </section>

    )
}

export default ContactBlock