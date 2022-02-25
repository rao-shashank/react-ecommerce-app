import React from 'react';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import Header from './components/Layout/Header';
import MedicinesLanding from './components/MedicinesLanding/MedicinesLanding';
import MedicineDetails from './components/MedicineDetails/MedicineDetails';

import CartProvider from '../src/store/CartProvider';

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Router>
          <Routes >
            <Route path="/" element={<MedicinesLanding />} />
            <Route path="/medicine/:drug_id" element={<MedicineDetails />} />
          </Routes >
        </Router>
      </main>
    </CartProvider>
  );
}

export default App;


