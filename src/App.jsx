import React from 'react';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import Team from './views/Team/Team';
import Research from './views/Research/Research';
import Footer from './components/Footer/Footer';
import Climatebug from './views/Products/Climatebug';
import SustainSight from './views/Products/SustainSight';

function App() {
  return (
    <Router>
      <div className="min-vh-100 d-flex flex-column">

        <Navbar />
        {/* <div className="container flex-grow-1"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/climatebug" element={<Climatebug />} />
          <Route path="/sustainsight" element={<SustainSight />} />
          <Route path="/research" element={<Research />} />
          {/* <Route path="/home" element={<Home />} />
            
            <Route path="/team" element={<Team />} /> */}
          {/* Other routes can be added here */}
        </Routes>
        {/* </div> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
