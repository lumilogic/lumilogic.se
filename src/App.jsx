import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import Team from './views/Team/Team';
import Research from './views/Research/Research';
import Footer from './components/Footer/Footer';
import Climatebug from './views/Products/Climatebug';
import SustainSight from './views/Products/SustainSight';
import ScrollToTop from './components/ScrollToTop'; // import the component

function App() {
  return (
    <Router basename="/">
      <ScrollToTop /> {/* Add here to ensure scroll reset on each route change */}
      <div className="min-vh-100 d-flex flex-column">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/climatebug" element={<Climatebug />} />
          <Route path="/sustainsight" element={<SustainSight />} />
          <Route path="/research" element={<Research />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
