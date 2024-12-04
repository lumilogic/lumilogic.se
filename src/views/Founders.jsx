import React from 'react';
import { Helmet } from 'react-helmet-async';

import './Founders.scss'; // Importing the SCSS file for the Home component
// Add import statements for images if you have individual photos of team members
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGoogleScholar } from '@fortawesome/free-brands-svg-icons';

import yinan from '@assets/images/profile_pictures/yinan_round.jpg'; // Import the logo image
import samuel from '@assets/images/profile_pictures/samuel.jpg'; // Import the logo image
import asa from '@assets/images/profile_pictures/asa_round.jpg'; // Import the logo image
import mattias from '@assets/images/profile_pictures/mattias_round.jpg'; // Import the logo image
import jasmine from '@assets/images/profile_pictures/jasmine_round.jpg'; // Import the logo image
import sverker from '@assets/images/profile_pictures/sverker_round.jpg'; // Import the logo image

import logo from '@assets/images/logo.png'; // Import the logo image


function Team() {
    return (

        <div className="team">

            <Helmet>
                <title>Meet the Lumilogic Funders: Experts in AI and Sustainability</title>
                <meta name="description" content="Discover the minds behind Lumilogic's AI solutions for sustainability. Our team blends AI specialists, sustainability academics, and entrepreneurs committed to positive impact." />
                <meta name="keywords" content="Lumilogic Founders, AI Experts, Sustainability Experts, Meet the Team, AI Specialists, Sustainability Academics, Experienced Entrepreneurs, Natural Language Processing, Environmental Economics" />
                <link rel="canonical" href="https://lumilogic.se/team" />

                {/* OpenGraph Meta Tags for Social Media */}
                <meta property="og:title" content="Meet the Lumilogic Founders: Experts in AI and Sustainability" />
                <meta property="og:description" content="Discover the minds behind Lumilogic's AI solutions for sustainability. Our founders blends AI specialists, sustainability academics, and entrepreneurs committed to positive impact." />
                <meta property="og:image" content={`https://lumilogic.se${logo}`} />
                <meta property="og:url" content="https://lumilogic.se/team" />
                <meta property="og:type" content="website" />
            </Helmet>


            <div className="hero-section align-items-center">
                <div className='container'>


                    {/* Wrapper div with row */}
                    {/* <div className="hero-box row align-items-center"></div> */}

                    <div className="glassy-box p-4 rounded shadow">
                        <div className='row'>
                            <h1 className="text-center mb-5">Meet the Lumilogic Founders</h1>
                            <p>At the core of Lumilogic's innovative approach to sustainability assessments are the minds and talents of our diverse founders. Our unique blend of AI & NLP specialists, leading academics in sustainability, and experienced entrepreneurs is united by a shared mission to leverage AI for positive impact.</p>
                        </div>
                        {/* </div> */}

                    </div>
                </div>

            </div>



            {/* <div className="col"> */}
            <div className="container">
                <div className="glassy-box p-4 rounded shadow my-5">
                    {/* Team Member Profiles */}
                    <div className="row row-cols-1 row-cols-md-4 p-4">

                        {/* Profile: Samuel Scheidegger */}
                        <div className="col">
                            <div className="glassy-subbox h-100 p-3 rounded shadow">



                                <img src={samuel} alt='Samuel Scheidegger' className='profile_picture' />
                                <div className="d-flex flex-column" style={{ minHeight: '170px' }}>

                                    <h3>Samuel Scheidegger</h3>
                                    <h5>CEO, AI/IT Expert</h5>


                                    <div>

                                        <a href="https://www.linkedin.com/in/samuel-scheidegger/" target="_blank" rel="noopener noreferrer" className='social_icon'><FontAwesomeIcon icon={faLinkedin} /></a>
                                        <a href="https://scholar.google.com/citations?user=jrlj3rcAAAAJ&hl=en&oi=sra" target="_blank" rel="noopener noreferrer" className='social_icon'><FontAwesomeIcon icon={faGoogleScholar} /></a>
                                    </div>
                                </div>
                                <p>Samuel heads Lumilogic, leveraging his deep experience in AI to drive sustainable innovations. He co-founded several AI companies, focusing on scalable solutions that address real-world problems. At Lumilogic, Samuel is dedicated to making sustainability reporting efficient and data-driven, simplifying complex assessments for educational and corporate sectors.</p>
                            </div>
                        </div>

                        {/* Profile: Yinan Yu */}
                        {/* <div className="row"> */}
                        <div className="col">
                            <div className="glassy-subbox h-100 p-3 rounded shadow">

                                <img src={yinan} alt='Yinan Yu' className='profile_picture' />
                                <div className="d-flex flex-column" style={{ minHeight: '170px' }}>
                                    <h3>Yinan Yu</h3>
                                    <h5>AI Expert</h5>
                                    <div>
                                        <a href="https://www.linkedin.com/in/yinanyu/" target="_blank" rel="noopener noreferrer" className='social_icon'><FontAwesomeIcon icon={faLinkedin} /></a>
                                        <a href="https://scholar.google.com/citations?user=z3p7ALcAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className='social_icon'><FontAwesomeIcon icon={faGoogleScholar} /></a>
                                        <a href="https://www.chalmers.se/en/persons/yinan/" target="_blank" rel="noopener noreferrer" className='social_icon'><FontAwesomeIcon icon={faSquareUpRight} /></a>
                                    </div>
                                </div>
                                <p >Yinan's expertise in machine learning and natural language is crucial to Lumilogic's mission, as she develops algorithms to analyze sustainability data for actionable insights. As an Assistant Professor at Chalmers University, she ensures that Lumilogic's AI-driven platform is at the forefront of technology.</p>
                            </div>
                        </div>




                        {/* Profile: Åsa Löfgren */}
                        <div className="col">
                            <div className="glassy-subbox h-100 p-3 rounded shadow">
                                <img src={asa} alt='Åsa Löfgren' className='profile_picture' />
                                <div className="d-flex flex-column" style={{ minHeight: '170px' }}>
                                    <h3>Åsa Löfgren</h3>
                                    <h5>Sustainability Expert</h5>
                                    <div>
                                        <a href="https://www.linkedin.com/in/%C3%A5sa-von-ekensteen-l%C3%B6fgren-316962270/" target="_blank" rel="noopener noreferrer" className='social_icon'><FontAwesomeIcon icon={faLinkedin} /></a>
                                        <a href="https://scholar.google.com/citations?hl=en&user=UQ4p2LoAAAAJ" target="_blank" rel="noopener noreferrer" className='social_icon'><FontAwesomeIcon icon={faGoogleScholar} /></a>
                                    </div>
                                </div>
                                <p>With over two decades of experience in environmental economics, Åsa brings extensive expertise to Lumilogic's sustainability strategy. Her work on climate policy and practical insights into policy implementation ensure that Lumilogic's assessments are both rigorous and aligned with the latest sustainability standards.</p>
                            </div>
                        </div>

                        {/* Profile: Mattias Sundemo */}
                        <div className="col">
                            <div className="glassy-subbox h-100 p-3 rounded shadow">
                                <img src={mattias} alt='Mattias Sundemo' className='profile_picture' />
                                <div className="d-flex flex-column" style={{ minHeight: '170px' }}>
                                    <h3>Mattias Sundemo</h3>
                                    <h5>Sustainability and Edcuational Expert</h5>
                                    <div>
                                        <a href="https://www.linkedin.com/in/mattias-sundemo-671ab541/" target="_blank" rel="noopener noreferrer" className='social_icon'><FontAwesomeIcon icon={faLinkedin} /></a>
                                    </div>
                                </div>
                                <p>Mattias applies his expertise in sustainability and academic standards to help Lumilogic serve educational institutions effectively. His practical experience with university accreditation processes and sustainability initiatives ensures that Lumilogic's tools meet the needs of schools aiming for high sustainability performance.</p>
                            </div>
                        </div>

                    </div>

                </div>


                {/* Additional team members can be added here */}
                {/* </div> */}





                {/* Advisary Board Summary */}

                {/* <div className="col"> */}
                <div className="glassy-box p-4 rounded shadow my-5">
                    <div className='row'>
                        <h1 className="text-center mb-5">Advisory Board: Guiding Our Sustainability Mission</h1>
                        <p>Our Advisory Board includes respected experts in environmental politics, business ethics, and human rights. Their guidance helps us stay aligned with industry trends and effectively tackle sustainability challenges. Meet the experts helping to shape Lumilogic’s direction:</p>

                    </div>
                    {/* </div> */}


                    {/* Team Member Profiles */}
                    <div className="row row-cols-1 row-cols-md-2 p-4 g-4">

                        {/* Profile: Yinan Yu */}
                        {/* <div className="row"> */}
                        <div className="col">
                            <div className="glassy-subbox h-100 p-3 rounded shadow">
                                <img src={jasmine} alt='Jasmine Elliott' className='profile_picture' />
                                <div className="d-flex flex-column" style={{ minHeight: '170px' }}>
                                    <h3>Jasmine Elliott, PhD</h3>
                                    <h5>Research Fellow at the British Institute for International and Comparative Law, UK</h5>
                                    <div>
                                        <a href="https://www.linkedin.com/in/jasmine-elliott-42332540/" target="_blank" rel="noopener noreferrer" className='social_icon'><FontAwesomeIcon icon={faLinkedin} /></a>
                                        <a href="https://www.biicl.org/people/jasmine-elliott" target="_blank" rel="noopener noreferrer" className='social_icon'><FontAwesomeIcon icon={faSquareUpRight} /></a>
                                    </div>
                                </div>
                                <p>Jasmine is a Research Fellow in Business and Human Rights. Her research interests mainly consider business ethics and professional ethics as they relate to issues like human rights, corruption, and climate change.</p>
                            </div>
                        </div>

                        {/* Profile: Samuel Scheidegger */}
                        <div className="col">
                            <div className="glassy-subbox h-100 p-3 rounded shadow">
                                <img src={sverker} alt='Sverker C. Jagers' className='profile_picture' />
                                <div className="d-flex flex-column" style={{ minHeight: '170px' }}>
                                    <h3>Sverker C. Jagers, PhD</h3>
                                    <h5>Professor at the Department of Political Science, GU, Sweden</h5>

                                    <div>
                                        <a href="https://www.linkedin.com/in/sverker-jagers-95695312/" target="_blank" rel="noopener noreferrer" className='social_icon'><FontAwesomeIcon icon={faLinkedin} /></a>
                                        <a href="https://scholar.google.com/citations?hl=en&user=2_AmPeYAAAAJ" target="_blank" rel="noopener noreferrer" className='social_icon'><FontAwesomeIcon icon={faGoogleScholar} /></a>
                                    </div>
                                </div>
                                <p>Sverker’s research is focused on various aspects of environmental politics, and he has an extensive publication record and have written several books. Sverker is an appreciated presenter and advisor.</p>
                            </div>
                        </div>


                    </div>

                    {/* Additional team members can be added here */}
                    {/* </div> */}

                </div>





                <div className="glassy-box p-4 rounded shadow my-5">
                    <h1 className="text-center mb-5">Connect With Us</h1>

                    <h2>Get in Touch</h2>
                    <p>Interested in how AI can elevate your sustainability efforts? Contact us to explore collaboration opportunities, follow Lumilogic on social media for the latest developments, or find out how our solutions can support your goals.</p>


                    <h2>Follow Us</h2>
                    <p>Keep up with Lumilogic's progress and insights by following us on <a href="https://www.linkedin.com/company/lumilogic">social media</a>. Discover the impact of our work and learn more about the intersection of AI and sustainability directly from our experts.</p>
                    <a href="https://www.linkedin.com/company/lumilogic/" className='social_icon' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>

                </div>


            </div>

        </div >


    );
}

export default Team;