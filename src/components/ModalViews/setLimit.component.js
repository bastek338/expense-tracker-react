import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { db } from '../../firebase/firebase';
import { useUser } from '../../context/User/user.context';
import dayjs from 'dayjs';
import { useModal } from '../../context/Modal/modal.context';

const SetLimit = () => {
    const [limit, setLimit] = React.useState(0);
    const { user } = useUser();
    const currentMonth = dayjs().format('YYYY-MM');
    console.log(currentMonth)
    const {handleClose} = useModal();

    console.log(limit, currentMonth)

    const updateLimitValue = (e) => {
        e.preventDefault();
        db.doc(`users/${user.id}`).set({
            months: {
                [currentMonth]: {
                    monthlyLimit: limit
                }
            }
        }, {merge: true})
        .then(res => handleClose())
        .catch(e => console.log(e.message))
    }

    return (
        <form>
            <TextField required type="number" label="Set limit" onChange={(e) => setLimit(e.target.value)}/>
            <Button variant="contained" color="primary" onClick={updateLimitValue}>Set limit</Button>
        </form>
    )
}

export default SetLimit;
