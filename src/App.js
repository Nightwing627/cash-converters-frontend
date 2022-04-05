import React, { useState, useEffect } from 'react';
// import Routes from './Routes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import useToggle from './Hooks/useToggle';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Footer from './components/Footer';

import Career from './components/pages/joinus/career';
import Store from './components/pages/joinus/store';
import LoanCenter from './components/pages/joinus/loan';
import HeadOffice from './components/pages/joinus/headoffice';

function App() {
  const [loading, setLoading] = useState(true);
  const [drawer, drawerAction] = useToggle(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <React.Fragment>
      {loading && (
        <div className={`cash-loader ${loading ? 'active' : ''}`}>
          <Loader />
        </div>
      )}
      <div className={`cash-visible ${!loading ? 'active' : ''}`}>
        <Router>
          <ScrollToTop>
              <Drawer drawer={drawer} action={drawerAction.toggle}></Drawer>
              <Header action={drawerAction.toggle} />
              <Routes>
                <Route eact path="/" element={<Career />} />
                <Route path="/joinus" element={<Career />} />
                <Route path="/joinus/carrer" element={<Career />} />
                <Route path="/joinus/store" element={<Store />} />
                <Route path="/joinus/loancenter" element={<LoanCenter />} />
                <Route path="/joinus/headoffice" element={<HeadOffice />} />
              </Routes>
              <Footer />
          </ScrollToTop>
        </Router>     
      </div>
    </React.Fragment>
  );
}

export default App;
