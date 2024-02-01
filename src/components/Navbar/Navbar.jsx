import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import logo_small from '@assets/images/logo_small.png'; // Import the logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>

            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo_small} alt="Lumilogic logo" className="navbar-logo" />Lumilogic
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/team">Team</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" target="_blank" href="https://www.climatebug.se/">climateBUG <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
