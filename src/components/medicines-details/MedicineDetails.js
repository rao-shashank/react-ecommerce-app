import React from 'react';
import { makeStyles,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Grid } from '@material-ui/core/';
import { useLocation, useParams } from 'react-router-dom';

import MedicineItemForm from '../medicines/MedicineItemForm'; 

const useStyles = makeStyles({
    root: {
      width: 400,
      height: 250,
    },
});

  const MedicineDetails  = () => {
    const { state } = useLocation();
    const { medicinesObj } = state;
    const classes = useStyles();
    
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh'}}
       >
      
            <Grid item item xs={12} sm={6} md={3}>
                <Card variant="outlined" className={classes.root}>
                    <React.Fragment>
                        <CardContent>
                            <Typography gutterBottom>
                                <strong>Name:</strong> { medicinesObj.name }
                            </Typography>
                            <Typography gutterBottom>
                                <strong>Desc:</strong> { medicinesObj.description }
                            </Typography>
                            <Typography gutterBottom>
                                <strong>Price:</strong> <span>&#8377;</span> {medicinesObj.price.toFixed(2)}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button color="primary" href="/">Back</Button>
                            <MedicineItemForm />
                        </CardActions>
                    </React.Fragment>
                </Card>
            </Grid>
       </Grid>
      );
};

export default MedicineDetails; 