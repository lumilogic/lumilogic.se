import React from 'react';
import './Home.scss'; // Importing the SCSS file for the Home component
import logo_medium from '@assets/images/logo_medium.png'; // Import the logo image
import logo_small from '@assets/images/logo_small.png'; // Import the logo image

function Home() {
    return (
        <div className="hero-section">
            <div className="container flex-grow-1 d-flex align-items-center">

                {/* Wrapper div with row */}
                <div className="glassy-box p-3 rounded shadow d-flex align-items-center row">

                    {/* Column for logo */}
                    <div className="col-lg-auto d-none d-lg-flex align-items-center">
                        <img src={logo_medium} alt="Lumilogic logo" className="img-fluid" />
                    </div>

                    {/* Column for text */}
                    <div className="col">
                        <h1><img src={logo_small} alt="Lumilogic logo" className="hero-small-logo d-lg-none" /> Lumilogic</h1>
                        <h2>Leveraging AI for Positive Impact</h2>
                        <p>
                            Lumilogic integrates artificial intelligence with sustainability expertise to redefine how organizations assess and enact sustainability.
                        </p>
                        <p>
                            Our approach, exemplified by our product SustainSight, aims to set a new standard in sustainability evaluation, ensuring transparent and consistent insights into sustainability practices.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;