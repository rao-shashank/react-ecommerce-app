import { Grid } from '@material-ui/core/'

import MedicineCard from '../Shared/MedicineCard';

const STATIC_MEDICINES_DATA = [
    {
      id: 'm1',
      name: 'ACECLOFENAC+PARACETAMOL',
      description: 'Aceclofenac+Paracetamol is used for pain relief',
      price: 150,
    },
    {
      id: 'm2',
      name: 'SCHOLECALCIFEROL WITH VIT D3',
      description: 'Sachet is used to treat and prevent the deficiency of Vitamin D and Calcium',
      price: 200,
    },
    {
      id: 'm3',
      name: 'AMOXYCILLIN POTASSIUM CLAVULANATE',
      description: 'Used to treat many different infections caused by bacteria',
      price: 120,
    },
    {
      id: 'm4',
      name: 'VITAMIN -D3 NANO SHOTS',
      description: 'D3 Sure Nano Shot Oral Solution 5ml is used in the treatment of vitamin D deficiency and osteoporosis',
      price: 250,
    },
  ];


const Medicines = () => {
    const medicinesList = STATIC_MEDICINES_DATA.map(med => 
        <MedicineCard key={med.id}
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