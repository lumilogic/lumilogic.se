import React, { Suspense } from 'react';

import { BrowserRouter as Router, Routes, useRoutes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// import Home from './views/Home/Home';
// import Contact from './views/Contact/Contact';
// import Team from './views/Team/Team';
// import Research from './views/Research/Research';
// import Climatebug from './views/Products/Climatebug';
// import SustainSight from './views/Products/SustainSight';
import ScrollToTop from './components/ScrollToTop';
import routes from '~react-pages'; // Import generated routes



function App() {
  const appRoutes = useRoutes(routes); // Generate routes here

  return (
    <HelmetProvider>
      <ScrollToTop />
      <div className="min-vh-100 d-flex flex-column">
        <Navbar />
        <Suspense fallback={<p>Loading...</p>}>
          {appRoutes} {/* Render generated routes directly */}
        </Suspense>
        <Footer />
      </div>
    </HelmetProvider>
  );
}


export default App;

{/* <Routes> */ }
{/* <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/climatebug" element={<Climatebug />} />
            <Route path="/sustainsight" element={<SustainSight />} />
            <Route path="/research" element={<Research />} /> */}
{/* </Routes> */ }