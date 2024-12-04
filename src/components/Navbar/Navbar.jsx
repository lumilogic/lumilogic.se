import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo_small from '@assets/images/logo_small.png';
import climateBugLogo from '@assets/images/climatebug_small.png';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo_small} alt="Lumilogic logo" className="navbar-logo" /> Lumilogic
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/products/sustainsight">SustainSight</Link></li>
                                <li><Link className="dropdown-item" to="/products/climatebug">climateBUG <img src={climateBugLogo} height="25pt" alt="ClimateBug logo" /></Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/research">Research</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/founders">Founders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
