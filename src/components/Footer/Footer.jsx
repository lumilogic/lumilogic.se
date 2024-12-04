import React from 'react';
import './Footer.scss'; // Import the SCSS file for footer styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    {/* Company Info */}
                    <div className="col-md-4 mb-3">
                        <h5>Lumilogic</h5>
                        <p>
                            Simplify sustainability reporting with Lumilogic's AI solutions. Gain real-time, actionable insights to make informed decisions based on solid data.
                        </p>
                        <p>
                            <strong>Phone:</strong> <a href="tel:+46760620058" className="text-white">+46 76-062 00 58</a><br />
                            <strong>Email:</strong> <a href="mailto:contact@lumilogic.se" className="text-white">contact@lumilogic.se</a>
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="col-md-4 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white">Home</a></li>
                            {/* <li><a href="/about" className="text-white">About Us</a></li> */}
                            <li><a href="/#sustainsight" className="text-white">SustainSight</a></li>
                            <li><a href="/#climatebug" className="text-white">climateBUG</a></li>
                            <li><a href="/#research" className="text-white">Research</a></li>
                            <li><a href="/#founders" className="text-white">Meet the Founders</a></li>
                            <li><a href="/#contact" className="text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="col-md-4 mb-3">
                        <h5>Follow Us</h5>
                        <p>Stay connected with Lumilogic through our social media channels:</p>
                        <a href="https://www.linkedin.com/company/lumilogic/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Lumilogic AB. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
