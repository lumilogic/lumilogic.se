import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
// import Team from './views/Team/Team';


function App() {
  return (
    <Router>
      <div className="bg-dark text-white min-vh-100 d-flex flex-column">

        <Navbar />
        <div className="container flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/home" element={<Home />} />
            
            <Route path="/team" element={<Team />} /> */}
            {/* Other routes can be added here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
