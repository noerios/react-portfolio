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
                    Full stack developer with a focus on creating beautiful user experiences. After ten years in the digital marketing space, strategizing online presences and creating web and social content for brands of all types, I've pivoted to building clean and effective web platforms. 
                </p>
                <div className="about-details">
                    <div className="left-section">
                        
                    </div>
                    <div className="right-section">
                        
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection