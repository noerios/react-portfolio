import React from 'react';
import VideoBg from 'reactjs-videobg';
import poster from '../img/black.texture.jpg';
import backgroundvid from '../img/pexelsball.mp4';

function HomePage() {
    return (
        <div className="HomePage">
        <VideoBg className="background" poster={poster}>
            <VideoBg.Source src={backgroundvid} type="video/mp4" />
        </VideoBg>
            <header className="banner">
                
                <h1 className="banner-text">
                    <span>Rios Dev</span> 
                </h1>
                <h1 className="banner-two-text">Content. Web Design. User Experience. Web Development.</h1>
                <p className="b-sub-text">
                    Let's do this.
                </p>
            </header>
            
        </div>
    )
}

export default HomePage;