import React from 'react';
import './Contact.scss'; // Importing the SCSS file for the Contact component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGoogleScholar } from '@fortawesome/free-brands-svg-icons';


function Contact() {
    return (
        <div className="contact-page">
            <div className="hero-section">
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="glassy-box p-4 rounded shadow">
                                <h1>Contact Us</h1>
                                <p>
                                    Whether you have questions about our solutions, want to discuss a potential collaboration, or simply want to learn more about what we do, we’re here to help. Reach out to us using the information below, and we’ll get back to you promptly.
                                </p>

                                <h3>Email</h3>
                                <p>
                                    <a href="mailto:contact@lumilogic.se" className="btn btn-secondary">contact@lumilogic.se</a>
                                </p>

                                <h3>Follow Us</h3>
                                <p>Stay updated on our latest developments and insights by following us on social media:</p>

                                <p>
                                    <a href="https://www.linkedin.com/company/lumilogic/" className='social_icon' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a> <a href="https://www.linkedin.com/company/lumilogic/" className='social_icon' target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                </p>


                                <h3>Call Us</h3>
                                <p>
                                    +46 76-062 00 58<br />

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Contact;
