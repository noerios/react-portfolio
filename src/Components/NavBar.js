import React from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';


import {Link} from 'react-router-dom';


function NavBar() {
    return (
        <div className='NavBar'>
            
            <nav className="nav">
                <div className="profile">
                    Rolando Noe Rios
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolio
                        </NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink to="/blog" exact activeClassName="active">
                            Blog
                        </NavLink>
                    </li> */}
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                <div className="icons">
                    <a target="_blank" href="https://www.linkedin.com/in/rnoerios/" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                    </a>
                    <a target="_blank" href="https://github.com/noerios" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/noway1010/" className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon ig" />
                    </a>
                    
                    
                </div>
                </footer>
            </nav>
            
        </div>
    )
}

export default NavBar;