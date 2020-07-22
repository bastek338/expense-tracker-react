import React, { createContext, useState } from 'react';


export const SnackbarContext = createContext({});

const SnackbarProvider = ({children}) => {

    const [alert, setAlert] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');

    const handleAlertOpen = (message, type = 'info') => {
        setAlert(true);
        setMessage(message);
        setType(type);
    };

    const handleAlertClose = () => {
        setAlert(false);
    }

    const snackbarContext = {
        type,
        alert,
        handleAlertOpen,
        handleAlertClose,
        message
    };
     

    return <SnackbarContext.Provider value={snackbarContext}>{children}</SnackbarContext.Provider>
} 

export default SnackbarProvider;