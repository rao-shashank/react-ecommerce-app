import React, { useRef, useState } from 'react';
import { Button, TextField,} from '@material-ui/core/';
import Snackbar from '@mui/material/Snackbar';

const MedicineItemForm = (props) => {
    const [qtyIsValid, setQtyIsValid] = useState(true);
    const [state, setState] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
      });
    const { vertical, horizontal, open } = state;
    
    const handleClose = () => {
        setState({ ...state, open: false });
    };
    const qtyRef = useRef('');

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredQty = qtyRef.current.value;
        const enteredQtyNumber = +qtyRef.current.value; // converting into number 
        if (enteredQty.trim() === 0 ||
            enteredQtyNumber < 1 ||
            enteredQtyNumber > 10) {
                setQtyIsValid(false);
                return;
        }
        props.onAddToCart(enteredQtyNumber);
    };

    return (
        <form>
            <TextField
                type="number"
                required
                defaultValue="1"
                variant="standard"
                helperText="Select Qty"
                inputRef={qtyRef}
            />
            <Button type="button" variant="contained" onClick={submitHandler}>+ Add To Cart</Button>
            {!qtyIsValid &&
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message="Quantity should be between 1-10"
                key={vertical + horizontal}
            />
            }
        </form>
    );
};

export default MedicineItemForm;
