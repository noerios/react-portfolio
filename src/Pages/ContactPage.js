import React from 'react';
import ContactItem from '../Components/ContactItem';
import Title from '../Components/Title';

import phone from '../img/phone.png';
import location from '../img/location.png';
import email from '../img/email.png';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Title title={'Contact'} span={'Contact'} />
            </div>
            <div className="ContactPage">
            <div className="map-sect">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440897.0680946992!2d-98.03359850012073!3d30.30805529981724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1619490024582!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div className="contact-sect">
                <ContactItem icon={phone} text1={'+1 512.417.3703'} title={'Phone'} />
                <ContactItem icon={location} text1={'2404 Braxton Cove'} text2={'Austin, TX'} title={'Address'} />
                <ContactItem icon={email} text1={'noerios@gmail.com'} title={'Email'} />
            </div>
            </div>
        </div>
        
    )
}

export default ContactPage;