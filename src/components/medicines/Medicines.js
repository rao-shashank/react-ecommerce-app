import { Grid } from '@material-ui/core/'
import { useNavigate } from "react-router-dom";

import MedicineCard from '../Shared/MedicineCard';

const STATIC_MEDICINES_DATA = [
    {
      id: '1',
      name: 'ACECLOFENAC+PARACETAMOL',
      description: 'Aceclofenac+Paracetamol is used for pain relief',
      price: 150,
    },
    {
      id: '2',
      name: 'SCHOLECALCIFEROL D3',
      description: 'Aceclofenac+Paracetamol is used for pain relief',
      price: 200,
    },
    {
      id: '3',
      name: 'AMOXYCILLIN POTASSIUM',
      description: 'Used to treat many different infections caused by bacteria',
      price: 120,
    },
    {
      id: '4',
      name: 'VITAMIN -D3 NANO SHOTS1',
      description: 'Aceclofenac+Paracetamol is used for pain relief',
      price: 250,
    },
    {
      id: '5',
      name: 'VITAMIN -D3 NANO SHOTS2',
      description: 'Aceclofenac+Paracetamol is used for pain relief',
      price: 270,
    },
  ];

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

    const medicinesList = STATIC_MEDICINES_DATA.map(med => 
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