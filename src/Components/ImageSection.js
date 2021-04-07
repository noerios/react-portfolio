import React from 'react';
import about from '../img/AboutPageHeadshot.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4> I am <span>Noe Rios</span></h4>
                <p className="about-text">
                    things about me go here lots ofthem and they keppgooing sldksdflsdf
                    more sthaff aslk slemsli thsil 
                    sldsdfn tho sowlsn shd sldieh
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>FullName</p>
                        <p>Age</p>
                        <p>Location</p>
                        <p>Languages</p>
                        <p>Specialties</p>
                    </div>
                    <div className="right-section">
                        <p>: Noe Rios</p>
                        <p>: 37</p>
                        <p>: Austin, Tx</p>
                        <p>: English, Spanish</p>
                        <p>: React</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection