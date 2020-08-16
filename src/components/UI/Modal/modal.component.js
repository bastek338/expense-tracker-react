import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import useModalStyles from './modal.styles';
import { useModal } from '../../../context/Modal/modal.context';
import TransactionForm from '../../TransactionForm/transactionform.component';
import AddCategory from '../../AddCategory/add-category.component';
import SetLimit from '../../ModalViews/setLimit.component';

const ModalWrapper = () => {
    let modalChildren = null;
    const classes = useModalStyles();
    const modalRef = useRef();
    const { open, handleClose, modalType } = useModal();

    switch(modalType) {
        case 'transaction-form':
            modalChildren = <TransactionForm /> 
            break;
        case 'category':
            modalChildren = <AddCategory/>
            break;
        case 'setLimit':
            modalChildren = <SetLimit/>
            break;
        case '':
            modalChildren = null;
            break;
        default:
            console.error('unknown modalType')
    }



    return ( 
        <div>
            <Modal 
            ref={modalRef}
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropProps={{
             timeout: 500,
            }}
            >
                <Fade in={open}>
                    <div
                    className={classes.modalItemContainer}>
                        {modalChildren}
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

// ModalWrapper.propTypes = {
//     children: PropTypes.oneOfType([
//         PropTypes.arrayOf(PropTypes.node),
//         PropTypes.node
//     ]).isRequired
// }

export default ModalWrapper;