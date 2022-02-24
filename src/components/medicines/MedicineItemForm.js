import React, { useState } from "react";
import { Button, TextField,} from '@material-ui/core/';

import CartDialog from '../Cart/Cart';

const MedicineItemForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <form>
            <TextField
                type="number"
                required
                defaultValue="1"
                variant="standard"
                helperText="Select Qty"
            />
            <CartDialog
                isDialogOpened={isOpen}
                handleCloseDialog={() => setIsOpen(false)}
            />
            <Button variant="contained" onClick={() => handleOpen()}>+ Add To Cart</Button>
        </form>
    );
};

export default MedicineItemForm;
