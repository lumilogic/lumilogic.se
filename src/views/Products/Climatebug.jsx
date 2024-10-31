import React from 'react';
import { Helmet } from 'react-helmet-async';


import climateBugImage from '@assets/images/climatebug_overview.png'; // Import an image from the paper
import climateBugLogo from '@assets/images/climatebug.png'; // Import another image from the paper

function ClimateBugProduct() {
    return (
        <div className="product-page">


            <Helmet>
                <title>climateBUG Pro by Lumilogic: AI for Climate Disclosure Analysis</title>
                <meta name="description" content="Automate climate-related data analysis with climateBUG Pro by Lumilogic. Use AI and NLP to uncover trends, ensure compliance, and enhance sustainability strategies in finance." />
                <meta name="keywords" content="climateBUG Pro, AI, Climate Disclosure Analysis, Lumilogic, Natural Language Processing, Financial Institutions, Regulatory Compliance, Sustainability Strategies, Climate Data Analysis" />
                <link rel="canonical" href="https://lumilogic.se/climatebug" />

                {/* OpenGraph Meta Tags for Social Media */}
                <meta property="og:title" content="climateBUG Pro by Lumilogic: AI for Climate Disclosure Analysis" />
                <meta property="og:description" content="Automate climate-related data analysis with climateBUG Pro by Lumilogic. Use AI and NLP to uncover trends, ensure compliance, and enhance sustainability strategies in finance." />
                <meta property="og:image" content={`https://lumilogic.se${climateBugLogo}`} /> {/* Ensure this URL is correct */}
                <meta property="og:url" content="https://lumilogic.se/climatebug" />
                <meta property="og:type" content="website" />
            </Helmet>



            <div className="hero-section align-items-center">
                <div className='container'>


                    {/* Wrapper div with row */}
                    <div className="hero-box row align-items-center">

                        {/* Column for logo */}
                        <div className="col-lg-auto d-none d-lg-flex">
                            <img src={climateBugLogo} alt="climateBUG logo" className="img-fluid" />
                        </div>

                        {/* Column for text */}
                        <div className="col">

                            <h1>
                                climateBUG Pro<img src={climateBugLogo} alt="climateBUG logo" className="hero-small-logo d-lg-none" />
                            </h1>



                            <h2>Enhancing Sustainability Reporting with AI</h2>
                            <p>
                                climateBUG Pro is an advanced AI platform that helps financial institutions, regulators, and researchers analyze how banks address climate change. Using Natural Language Processing (NLP), climateBUG Pro processes data from bank reports to identify key patterns, trends, and compliance issues in climate-related disclosures.

                            </p>



                        </div>

                    </div>



                </div>
            </div>

            {/* climateBUG Pro Details Section */}
            <div className="container my-5">
                <div className="glassy-box p-4 rounded shadow">
                    <div className='row my-3'>
                        <h1>
                            climateBUG Pro <img src={climateBugLogo} alt="climateBUG logo" height="35pt" className="" />
                        </h1>
                        <div className='col'>
                            <div className='row my-3'>
                                <p>
                                    climateBUG Pro enables organizations to extract and analyze essential climate-related information from large amounts of unstructured data. It’s designed for those who need to ensure compliance, conduct detailed research, or develop effective sustainability strategies.
                                </p>
                            </div>

                            <div className='row my-3'>
                                <h3>Key Features</h3>
                                <ul className="px-5">
                                    <li><strong>Ingestion Pipeline:</strong> Automatically extracts and processes data from reports, focusing on relevant climate-related content.</li>
                                    <li><strong>Configurable Database (climateBUG-DB):</strong> Stores and organizes data for efficient querying and analysis.</li>
                                    <li><strong>Standalone Components:</strong> Includes climateBUG-Data and climateBUG-LM, providing a rich dataset and a specialized model for analyzing climate-related financial disclosures.</li>
                                    <li><strong>API Access (climateBUG-API):</strong> Offers robust APIs for custom queries and data extraction, compatible with common deep learning frameworks.</li>
                                    <li><strong>User-Centric Analysis Tools:</strong> Features keyword and trend analysis, as well as clustering to explore themes in bank reports.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-sm-5'><img src={climateBugImage} alt="climateBUG Pro Overview" className="img-fluid my-3 rounded" /></div>


                    </div>

                    <div className='row my-5'>
                        <h3>Applications</h3>
                        <ul className="px-5">
                            <li><strong>Regulatory Compliance Monitoring:</strong> Helps financial institutions meet regulatory requirements like the EU's SFDR by monitoring climate-related disclosures.</li>
                            <li><strong>Research and Policy Analysis:</strong> Supports in-depth analysis of how banks respond to climate change, aiding long-term studies and policy development.</li>
                            <li><strong>Sustainability Strategy Development:</strong> Assists sustainability officers in benchmarking disclosures, identifying gaps, and refining strategies.</li>
                            <li><strong>Market and Investment Analysis:</strong> Enables investors to assess climate-related risks and opportunities in the banking sector.</li>
                        </ul>
                    </div>

                    <div className='row my-5'>
                        <h3>Advantages</h3>
                        <ul className="px-5">
                            <li><strong>Scalability and Flexibility:</strong> Easily adapts to new datasets and regulatory changes, applicable across different industries and regions.</li>
                            <li><strong>Interdisciplinary Expertise:</strong> Combines knowledge of financial reporting, climate economics, and NLP for accurate and relevant analyses.</li>
                            <li><strong>User Accessibility:</strong> User-friendly APIs and detailed documentation make climateBUG Pro accessible to both technical and non-technical users.</li>
                        </ul>
                    </div>

                    <div className='row my-3'>
                        <h3>Get Started with climateBUG Pro</h3>
                        <ul className="px-5">
                            <li><a href="https://doi.org/10.1016/j.eswa.2023.122162" target="_blank" rel="noopener noreferrer">Learn More About the Research</a></li>
                            <li><a href="https://huggingface.co/datasets/lumilogic/climateBUG-Data" target="_blank">Download the Dataset</a></li>
                            <li><a href="https://huggingface.co/lumilogic/climateBUG-LM" target="_blank">Access the climateBUG Model</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="glassy-box p-4 rounded shadow">
                            <h3>Looking Ahead</h3>
                            <p>
                                climateBUG Pro continues to evolve to meet the needs of the financial sector. Stay updated with Lumilogic for the latest features and applications that enhance sustainability analysis and reporting.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default ClimateBugProduct;
