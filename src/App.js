import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import MedicinesLanding from './components/medicines-landing/MedicinesLanding';
import MedicineDetails from './components/medicines-details/MedicineDetails';

function App() {
  return (
    <Router>
      <div>
        <Routes >
          <Route path="/" element={<MedicinesLanding />} />
          <Route path="/medicine/:drug_id" element={<MedicineDetails />} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;


