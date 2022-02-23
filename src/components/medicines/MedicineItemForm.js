import { Button, TextField,} from '@material-ui/core/';

const MedicineItemForm = () => {
    return (
        <form>
            <TextField
                type="number"
                required
                defaultValue="1"
                variant="standard"
                helperText="Select Qty"
            />
            <Button variant="contained">+ Add To Cart</Button>
        </form>
    );
};

export default MedicineItemForm;