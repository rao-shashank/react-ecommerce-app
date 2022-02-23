import React, { Fragment } from 'react';

import Header from '../Layout/Header';
import Medicines from '../medicines/Medicines';

const MedicinesLanding = () => {
    return (
        <Fragment>
          <Header />
          <main>
            <Medicines />
          </main>
        </Fragment>
    );
};

export default MedicinesLanding;