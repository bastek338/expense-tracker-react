import React, {createContext, useContext, useState} from 'react';
export const ModalContext = createContext(false);

const ModalProvider = ({children}) => {
    const [open, setOpen] = useState(false);
    const [modalType, setModalType] = useState(''); 

    const handleOpen = (message, additionalData) => {
        setOpen(true);
        setModalType(message)
    }

    const handleClose = () => {
        setOpen(false);
    }

    return <ModalContext.Provider value={{handleOpen, handleClose, open, modalType}}>{children}</ModalContext.Provider>
}

export const useModal = () => {
    const { handleOpen, handleClose, open, modalType } = useContext(ModalContext);

    return {
        handleOpen,
        handleClose, 
        open,
        modalType
    }

};


export default ModalProvider