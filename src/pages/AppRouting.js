import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import MedicinesLanding from '../components/MedicinesLanding/MedicinesLanding';
import MedicineDetails from '../components/MedicineDetails/MedicineDetails';

const AppRouting = () => {
    return (
        <Router>
          <Routes >
            <Route path="/" element={<MedicinesLanding />} />
            <Route path="/medicine/:drug_id" element={<MedicineDetails />} />
          </Routes >
        </Router>
    );
};

export default AppRouting;