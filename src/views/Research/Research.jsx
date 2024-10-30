import React from 'react';
import './Research.scss'; // Importing the SCSS file for the Research component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Research() {

    // Function to render a research paper
    const renderPaper = (title, authors, venue, year, abstract, link) => {
        return (
            <div className="glassy-box p-4 rounded shadow h-100 d-flex flex-column">
                <div>
                    <h2>{title}</h2>
                    <p><strong>Authors:</strong> {authors}</p>
                    <p><strong>Published:</strong> {venue}, {year}</p>
                    <p><strong>Abstract:</strong> {abstract}</p>
                </div>
                <div className="mt-auto text-center">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Read More</a>
                </div>
            </div>
        );
    };
    return (
        <div className="research-page">

            {/* Research Introduction Section */}
            <div className="hero-section align-items-center">
                <div className='container'>
                    <div className="glassy-box p-4 rounded shadow">
                        <h1>Featured Research</h1>
                        <p>
                            Lumilogic is based on academic research in sustainability assessment and AI. Our products, built on research by leading universities and research institutions, focus on advancing the application of artificial intelligence to complex sustainability challenges.
                        </p>
                    </div>
                </div>
            </div>

            {/* Featured Research Papers */}
            <div className="container my-3">

                <div className='row'>
                    <div className='col my-3'>
                        {renderPaper(
                            "Unpacking Banks' Response to Societal Expectations: An NLP Analysis of European Banks' Discussion of Climate Change",
                            "Åsa Löfgren, Jasmine Elliott, Yinan Yu, Samuel Scheidegger",
                            "SSRN",
                            "2024",
                            "We employ Natural Language Processing (NLP) to analyze the discussion of climate change in European banks' annual reporting and how they align with expectations of banks' role in the climate transition. Our analysis covers over 1.5 million statements, finding that an average of 7% of the annual reporting content pertains to climate change. We find there is a trend towards decarbonizing consumer products and banks' own operations; yet, less attention is given to financed emissions. The study highlights the utility of NLP in analyzing complex qualitative datasets and points to the potential impact of upcoming EU regulations on future disclosures.",
                            "https://dx.doi.org/10.2139/ssrn.4822293"
                        )}
                    </div>

                    <div className='col my-3'>

                        {renderPaper(
                            "climateBUG: A Data-Driven Framework for Analyzing Bank Reporting Through a Climate Lens",
                            "Yinan Yu, Samuel Scheidegger, Jasmine Elliott, Åsa Löfgren",
                            "Expert Systems with Applications",
                            "2023",
                            "This paper applies computational linguistics learning methods to the banking industry and climate change fields. We introduce our data-driven framework, climateBUG, with the aim of detecting latent information about how banks discuss their activities related to climate change using natural language processing (NLP). This framework consists of an ingestion pipeline, a configurable database, and a set of API’s. In addition, climateBUG offers two standalone components, namely a unique annotated corpus of approximately 1.1M statements from EU banks’ annual and sustainability reporting and a deep learning model adapted to the semantics of the corpus. When benchmarking on classification performance, our model outperforms other models with similar scopes due to its stronger domain relevance. We also provide examples of how the framework can be applied from a user perspective.",
                            "https://doi.org/10.1016/j.eswa.2023.122162"
                        )}

                        {/* Add more research papers as needed using the renderPaper function */}

                    </div>

                </div>
            </div>


        </div>
    );
}

export default Research;