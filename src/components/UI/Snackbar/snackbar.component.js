import React, {useContext} from 'react';
import SnackbarWrapper from '@material-ui/core/Snackbar';
import Alert from '../Alert/alert.component';
import { SnackbarContext } from '../../../context/Snackbar/snackbar.context'

const Snackbar = () => {

const { handleAlertClose, alert, message, type } = useContext(SnackbarContext);

    return (
            <SnackbarWrapper 
            autoHideDuration={1000}
            open={alert}
            anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} 
            onClose={handleAlertClose}>
                <Alert onClose={handleAlertClose} severity={type}>{message}</Alert>
            </SnackbarWrapper>
    )
}


export default Snackbar;