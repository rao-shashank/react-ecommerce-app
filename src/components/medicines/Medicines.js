import { Grid } from '@material-ui/core/'

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
      price: 250,
    },
  ];


const Medicines = () => {
    const medicinesList = STATIC_MEDICINES_DATA.map(med => 
        <MedicineCard
          name={med.name}
          description={med.description}
          price={med.price}
        />
      )
    
    return <section>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
      {medicinesList}
      </Grid>
    </section> 

};

export default Medicines;