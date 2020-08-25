import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { db } from '../../firebase/firebase';
import { useUser } from '../../context/User/user.context';
import dayjs from 'dayjs';
import { useModal } from '../../context/Modal/modal.context';
import { SnackbarContext } from '../../context/Snackbar/snackbar.context';


const SetLimit = () => {
    const [limit, setLimit] = React.useState(0);
    const { user } = useUser();
    const currentMonth = dayjs().format('YYYY-MM');
    const { handleClose } = useModal();
    const { handleAlertOpen } = React.useContext(SnackbarContext);

    const updateLimitValue = (e) => {
        db.doc(`users/${user.id}`).set({
            months: {
                [currentMonth]: {
                    ...user.months[currentMonth],
                    monthlyLimit: limit
                }
            }
        }, {merge: true})
        .then(res => {
            handleClose();
            handleAlertOpen('Your limit has been changed', 'success');
        })
        .catch(e => console.log(e.message))
    }

    const changeLimit = (e) => {
        setLimit(e.target.value)
    }

    console.log(limit)

    return (
        <form>
            <TextField required type="number" label="Set limit" onChange={changeLimit}/>
            <Button variant="contained" color="primary" onClick={updateLimitValue}>Set limit</Button>
        </form>
    )
}

export default SetLimit;
