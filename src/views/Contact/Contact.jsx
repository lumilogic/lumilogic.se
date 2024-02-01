import React from 'react';
import './Contact.scss'; // Importing the SCSS file for the Home component
import logo from '@assets/images/logo.png'; // Import the logo image

function Contact() {
    return (
        // <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>

        <div className="hero-section">
            <div className="container">

                {/* Team Summary */}
                <div className="row mb-5">
                    <div className="col">
                        <div className="glassy-box text-center p-4 rounded shadow">
                            <h1 className="mb-5">Contact Us</h1>
                            <p>If you have any questions or would like to get in touch, feel free to reach us at:</p>
                            <p><a href="mailto:contact@lumilogic.se" className="btn btn-primary">contact@lumilogic.se</a></p>
                        </div>
                    </div>
                </div>


            </div>

        </div >
    );
}

export default Contact;