import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';


import {Link} from 'react-router-dom';


function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                     deverloper | marketer <></>
                    <span>Noe Rios</span>
                </h1>
                <p className="h-sub-text">
                    more things about me. they all go here, and this is basically a paragraph
                    but ill just type words here that will look like ismething really great, 
                    done even care what it says for now.
                </p>
                <div className="icons">
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon ig" />
                    </Link>
                    
                     
                </div>
            </header>
             
        </div>
    )
}

export default HomePage;