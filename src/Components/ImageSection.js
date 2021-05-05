import React from 'react';
import about from '../img/AboutPageHeadshot.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>site developed by <span>Rolando Noe Rios</span> with React</h4>
                <p className="about-text">
                    Full stack developer with a passion for front end. After ten years in the digital marketing space, I've pivoted to building beautiful and effective web presences for clients. 
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Name</p>
                        <p>Age</p>
                        <p>Location</p>
                        <p>Languages</p>
                        <p>Specialties</p>
                    </div>
                    <div className="right-section">
                        <p>: Rolando Noe Rios</p>
                        <p>: 37</p>
                        <p>: Austin, Tx</p>
                        <p>: English, Spanish</p>
                        <p>: React, SAAS, NodeJS</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection