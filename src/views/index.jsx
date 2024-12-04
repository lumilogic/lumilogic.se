import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';


import logo_medium from '@assets/images/logo_medium.png'; // Import the logo image
import logo_small from '@assets/images/logo_small.png'; // Import the logo image
import logo from '@assets/images/logo.png'; // Import the logo image
import { Link } from 'react-router-dom';

function Home() {
    const productsRef = useRef(null);

    const scrollToProducts = () => {
        productsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="home-page">

            <Helmet>
                {/* Standard SEO Meta Tags */}
                <title>Advanced AI Solutions for Sustainable Business Practices | Lumilogic</title>
                <meta name="description" content="Simplify sustainability reporting with Lumilogic's AI solutions. Gain real-time, actionable insights to make informed decisions based on solid data." />
                <meta name="keywords" content="AI, Sustainability, Sustainability Reporting, Lumilogic, Data-Driven Decisions, Sustainable Business" />
                <link rel="canonical" href="https://lumilogic.se/" />

                {/* OpenGraph Meta Tags for Social Media */}
                <meta property="og:title" content="Advanced AI Solutions for Sustainable Business Practices | Lumilogic" />
                <meta property="og:description" content="Simplify sustainability reporting with Lumilogic's AI solutions. Gain real-time, actionable insights to make informed decisions based on solid data." />
                <meta property="og:image" content={`https://lumilogic.se${logo}`} />
                <meta property="og:url" content="https://lumilogic.se/" />
                <meta property="og:type" content="website" />
            </Helmet>

            {/* Hero Section */}
            <div className="hero-section align-items-center">
                <div className='container'>
                    <div className="hero-box row align-items-center">
                        {/* Column for logo */}
                        <div className="col-lg-auto d-none d-lg-flex">
                            <img
                                src={logo_medium}
                                alt="Lumilogic logo"
                                className="img-fluid"
                                width="400"
                                height="400" />
                        </div>

                        {/* Column for text */}
                        <div className="col">
                            <h1>
                                <img src={logo_small} alt="Lumilogic logo" className="hero-small-logo d-lg-none" /> Lumilogic
                            </h1>
                            <h2>Leveraging AI for Positive Impact</h2>
                            <p>
                                Lumilogic integrates artificial intelligence with sustainability expertise to redefine how organizations assess and enact sustainability.
                            </p>
                            <p>
                                {/* Our approach, exemplified by our product offerings, sets a new standard in sustainability evaluation, ensuring transparent and consistent insights into sustainability practices. */}
                                Our approach, exemplified by our product offerings, delivers high-quality, actionable insights to help you enhance your organization's sustainability performance.
                            </p>
                            <div className="mt-4">
                                <button onClick={scrollToProducts} className="btn btn-secondary">
                                    Discover Our Products
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Lumilogic Section */}
            <div className="container">
                <div className="glassy-box rounded shadow my-5">
                    <div className="about-section">
                        <h2>About Lumilogic</h2>
                        <p>
                            Founded in 2023 in Gothenburg, Sweden, Lumilogic is built on solid research from University of Gothenburg and Chalmers University of Technology. We specialize in applying artificial intelligence to streamline and enhance sustainability assessments and reporting.
                        </p>
                        <p>
                            At Lumilogic, our goal is to simplify the complexities of sustainability reporting through data-driven automation. Our platforms are designed to provide clear, actionable insights in real-time, helping organizations make informed decisions based on solid data.
                        </p>
                        <p>
                            We focus on practical solutions that make sustainability reporting more efficient and reliable. Whether you’re in education, business, or the public sector, our tools are designed to support your sustainability goals with precision and clarity.
                        </p>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className="text-center mt-4">
                                <Link to="/founders" className="btn btn-secondary">
                                    Meet the Founders
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products Section */}
                <div className="glassy-box rounded shadow my-5" ref={productsRef}>
                    <div className="products-section">
                        <h2>Our Products</h2>
                        <p>
                            Lumilogic offers AI-powered solutions tailored to enhance sustainability assessment and reporting. Explore our key products designed to meet the demands of today’s sustainability landscape:
                        </p>

                        {/* SustainSight */}
                        <div className='row my-4'>
                            <div className='col'>
                                <h3>SustainSight</h3>
                                <p>
                                    SustainSight is our comprehensive platform for streamlining sustainability reporting and assessment. It empowers organizations with:
                                </p>
                                <ul>
                                    <li><strong>Data-Driven Insights:</strong> Leverage AI to quickly analyze large datasets, uncovering critical sustainability trends and patterns.</li>
                                    <li><strong>Benchmarking Tools:</strong> Compare your sustainability performance against industry standards, identifying areas for growth and improvement.</li>
                                    <li><strong>Customizable Dashboards:</strong> Tailor interactive dashboards to your specific needs, simplifying the tracking of progress and report generation.</li>
                                    <li><strong>Automated Reporting:</strong> Streamline the reporting process, ensuring alignment with SDGs and sustainability goals through automation.</li>
                                </ul>
                                <div className="text-center mt-4">
                                    <Link to="/products/sustainsight" className="btn btn-secondary">
                                        Discover SustainSight
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* climateBUG Pro */}
                        <div className='row my-4'>
                            <div className='col'>
                                <h3>climateBUG Pro</h3>
                                <p>
                                    climateBUG Pro is an advanced AI platform designed to help financial institutions and researchers analyze and interpret climate-related data. Key features include:
                                </p>
                                <ul>
                                    <li><strong>Automated Data Processing:</strong> Extract and process unstructured data from reports, focusing on climate-related content for deeper analysis.</li>
                                    <li><strong>Configurable Database:</strong> Organize and store data efficiently, enabling precise queries and detailed analysis.</li>
                                    <li><strong>Specialized Components:</strong> Access a rich dataset and an advanced model specifically designed for climate-related financial disclosures.</li>
                                    <li><strong>Flexible API Access:</strong> Utilize robust APIs to extract customized insights, compatible with leading deep learning frameworks.</li>
                                </ul>
                                <div className="text-center mt-4">
                                    <Link to="/products/climatebug" className="btn btn-secondary">
                                        Explore climateBUG Pro
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Get in Touch Section */}
                <div className="glassy-box rounded shadow contact-section my-5">
                    <h2>Let's Connect</h2>
                    <p>
                        Whether you're looking to enhance your sustainability efforts or explore potential collaborations, we're here to help. Reach out to us today, and let's start a conversation about how Lumilogic can support your goals.
                    </p>
                    <div className="text-center mt-4">
                        <Link to="/contact" className="btn btn-secondary">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
