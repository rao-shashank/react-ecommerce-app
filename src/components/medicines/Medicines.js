import { Grid } from '@material-ui/core/'
import { useNavigate } from "react-router-dom";

import MedicineCard from '../Shared/MedicineCard';
import { MedicinesData } from '../../Medicines.const';

const Medicines = () => {
  const navigate = useNavigate();

  const goToMedicineDetails = (medicines) => {
    const medicinesObj = {
      id: medicines.id,
      name: medicines.name,
      description: medicines.description,
      price: medicines.price
    }
    navigate(`/medicine/${medicines.id}`, {state :{ medicinesObj }, replace:true});
  };

    const medicinesList = MedicinesData.map(med => 
        <MedicineCard
          key={med.id}
          id={med.id}
          name={med.name}
          description={med.description}
          price={med.price}
          onClick={goToMedicineDetails}
        />
      )
    
    return <section>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
      {medicinesList}
      </Grid>
    </section> 

};

export default Medicines;