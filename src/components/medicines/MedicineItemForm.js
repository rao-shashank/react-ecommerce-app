import { Button, TextField,} from '@material-ui/core/';

import CartModal from '../Cart/Cart';

const MedicineItemForm = () => {

    const openCartDialog = () => {
        return <CartModal />;
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
            <Button variant="contained" onClick={openCartDialog}>+ Add To Cart</Button>
        </form>
    );
};

export default MedicineItemForm;