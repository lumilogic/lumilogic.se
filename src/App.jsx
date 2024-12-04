// App.jsx
import React, { Suspense } from 'react';

import { useRoutes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import ScrollToTop from './components/ScrollToTop';
import routes from '~react-pages';

function App() {
  const appRoutes = useRoutes(routes);

  return (
    <HelmetProvider>
      <ScrollToTop />
      <div className="min-vh-100 d-flex flex-column">
        <Navbar />

        {/* Adjusted Suspense Fallback */}
        <Suspense
          fallback={
            <div style={{ minHeight: '500px' }}>
              {/* You can add a loading spinner or skeleton here */}
            </div>
          }
        >
          {appRoutes}
        </Suspense>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
