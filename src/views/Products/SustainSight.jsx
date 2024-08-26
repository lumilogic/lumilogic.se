import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router
import './Products.scss'; // Importing the SCSS file for the Products component
import sustainsightImage from '@assets/images/sustainsight_computer.jpg'; // Import the image for SustainSight

function SustainSightProduct() {
    return (
        <div className="product-page">

            {/* Product Introduction Section */}
            <div className="hero-section align-items-center">
                <div className='container'>
                    <div className="glassy-box p-4 rounded shadow">
                        <h1>SustainSight by Lumilogic</h1>
                        <p>
                            SustainSight is Lumilogic’s AI-powered platform designed to streamline and enhance sustainability reporting and assessment. Developed with insights from leading academic research, SustainSight equips organizations with the tools needed to meet the growing demands of sustainability with confidence and clarity.
                        </p>
                    </div>
                </div>
            </div>

            {/* SustainSight Details Section */}
            <div className="container my-5">
                <div className="glassy-box p-4 rounded shadow">
                    <div className='row my-3'>
                        <div className='col-sm-5'>
                            <img src={sustainsightImage} alt="SustainSight" className="img-fluid rounded my-3" />
                        </div>
                        <div className='col'>
                            <h2>Our Solution: SustainSight</h2>
                            <p>
                                SustainSight by Lumilogic is crafted to simplify complex sustainability reporting tasks, providing real-time data analysis and actionable insights. This platform is ideal for organizations aiming to improve their sustainability practices and meet industry standards effectively.
                            </p>
                        </div>
                    </div>

                    <div className='row my-5'>
                        <h3>Key Features:</h3>
                        <ul className="px-5">
                            <li><b>AI-Powered Analysis:</b> Quickly processes large datasets, uncovering key sustainability trends and insights that might otherwise go unnoticed, allowing for informed decision-making.</li>
                            <li><b>Comparative Insights:</b> Offers benchmarking capabilities to compare your organization’s performance against industry standards and peers, helping to identify areas for improvement.</li>
                            <li><b>Dynamic Dashboard:</b> Customizable and interactive, the dashboard allows users to easily explore data, track progress, and generate detailed, comprehensible reports.</li>
                            <li><b>Efficient Reporting:</b> Streamlines the sustainability reporting process, enabling seamless tracking of progress toward the SDGs through automation.</li>
                        </ul>
                    </div>

                    <div className='row my-3'>
                        <h3>Applications:</h3>
                        <p>
                            SustainSight is versatile and can be applied across various sectors, including education, business, and public administration. It’s particularly valuable for organizations that need to regularly assess and report on their sustainability initiatives, providing a reliable tool for efficient reporting.
                        </p>

                        <h4>Application in Higher Education</h4>
                        <p>
                            In the higher education sector, particularly within business schools, SustainSight plays a crucial role in supporting accreditation processes and aligning with global sustainability standards. Business schools often seek accreditation which increasingly emphasize sustainability as a core criterion.
                        </p>
                        <p>
                            SustainSight helps these institutions by:
                        </p>
                        <ul className="px-5">
                            <li><b>Accreditation Support:</b> Facilitating the collection, analysis, and reporting of data related to sustainability initiatives, making it easier for institutions to meet the stringent criteria set by accrediting bodies.</li>
                            <li><b>Benchmarking Performance:</b> Allowing schools to compare their sustainability efforts against peer institutions, identifying areas for improvement and showcasing strengths during the accreditation process.</li>
                            <li><b>Curriculum Development:</b> Assisting in the evaluation of how well sustainability is integrated into academic programs, helping schools to enhance their offerings and meet accreditation standards.</li>
                        </ul>

                        <p>
                            By using SustainSight, business schools can ensure that their sustainability reporting is not only thorough but also aligned with the expectations of global accrediting organizations, positioning themselves as leaders in sustainable education.
                        </p>
                    </div>

                    <div className='row my-3'>
                        <h3>Why Choose SustainSight?</h3>
                        <p>
                            Integrating SustainSight into your operations offers a robust solution for simplifying sustainability reporting and enhancing your sustainability performance. Whether you’re looking to improve reporting capabilities or gain deeper insights into your sustainability practices, SustainSight provides a practical, data-driven approach to achieving your goals.
                        </p>
                    </div>

                    <div className="text-center mt-4">
                        <Link to="/research" className="btn btn-secondary">
                            Explore the Technology and Research Behind SustainSight
                        </Link>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="container my-5">
                <div className="glassy-box p-4 rounded shadow text-center">
                    <h2>Ready to Transform Your Sustainability Reporting?</h2>
                    <p>
                        Join the growing number of organizations that trust SustainSight for their sustainability assessment and reporting needs. Take the first step towards more efficient and impactful sustainability practices today.
                    </p>
                    <Link to="/contact" className="btn btn-secondary btn-lg">
                        Get Started with SustainSight
                    </Link>
                </div>
            </div>

        </div >
    );
}

export default SustainSightProduct;
