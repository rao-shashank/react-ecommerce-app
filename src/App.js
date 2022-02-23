import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import Header from './components/Layout/Header';
import MedicinesLanding from './components/medicines-landing/MedicinesLanding';
import MedicineDetails from './components/medicines-details/MedicineDetails';

function App() {
  return (
    <div>
      <Fragment>
        <Header />
        <main>
          <Router>
            <div>
              <Routes >
                <Route path="/" element={<MedicinesLanding />} />
                <Route path="/medicine/:drug_id" element={<MedicineDetails />} />
              </Routes >
            </div>
          </Router>
        </main>
      </Fragment>
    </div>
  );
}

export default App;


