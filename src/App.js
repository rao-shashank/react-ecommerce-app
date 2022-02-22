import React, { Fragment } from 'react';

import Header from './components/Layout/Header';
import Medicines from './components/medicines/Medicines';

function App() {
  return (
      <Fragment>
        <Header />
        <main>
          <Medicines />
        </main>
      </Fragment>
    );
}

export default App;


