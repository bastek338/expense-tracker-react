import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import useTransactionFormStyles from './transactionform.styles';
import { SnackbarContext } from '../../context/Snackbar/snackbar.context';
import { useModal } from '../../context/Modal/modal.context';
import { useBalance } from '../../context/Balance/balance.context';
import { useUser } from '../../context/User/user.context';
import { db } from '../../firebase/firebase';
import dayjs from 'dayjs'

const TransactionForm = () => {
    const [typeOfPayment, setTypeOfPayment] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const { handleAlertOpen } = useContext(SnackbarContext);
    const { handleClose } = useModal();
    const classes = useTransactionFormStyles();
    const { dispatchBalance } = useBalance();
    const { user } = useUser();
    const currentMonth = dayjs().format('YYYY-MM');

    const transformedCategoryList = Object.keys(user.categoryList).map(key => {
        const item  = user.categoryList[key];
        const name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
        return (
            <MenuItem
                key={item.id}
                className={classes.transactionFormCategorySelect} 
                value={item.name}>
                {name}
            </MenuItem>
        )
    });

    const handleTypeOfPayment = (e) => {
        setTypeOfPayment(e.target.value)
    }

    const handleAmount = e => {
        setAmount(e.target.value)
    }

    const depositSubmit = () => {
        db.doc(`users/${user.id}`).get().then(snapshot => {
                const revenues = !snapshot.data().months?.[currentMonth]?.revenues ? 0 : snapshot.data().months[currentMonth].revenues;
                const expenses = !snapshot.data().months?.[currentMonth]?.expenses ? 0 : snapshot.data().months[currentMonth].expenses;
                db.doc(`users/${user.id}`).set({
                  months: {
                  ...user.months,
                  [currentMonth]: {
                    ...user.months[currentMonth],
                    expenses: expenses,
                    revenues: revenues + parseInt(amount)
                  }
                }}, {merge: true})
        })
        handleClose();
    }

    const withdrawSubmit = () => {
        db.doc(`users/${user.id}`).get().then(snapshot => {
            const revenues = !snapshot.data().months?.[currentMonth]?.revenues ? 0 : snapshot.data().months[currentMonth].revenues;
            const expenses = !snapshot.data().months?.[currentMonth]?.expenses ? 0 : snapshot.data().months[currentMonth].expenses;
            db.doc(`users/${user.id}`).set({
              categoryList: {
                    ...user.categoryList,
                    [category.toLowerCase()]: {
                        ...user.categoryList[category.toLowerCase()],
                        amountSpent: user.categoryList[category.toLowerCase()].amountSpent + parseInt(amount)
              }},
              months: {
              ...user.months,
              [currentMonth]: {
                ...user.months[currentMonth],
                expenses: expenses + parseInt(amount),
                revenues: revenues
              }
            }}, {merge: true})
    })
        handleClose();
        }


    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    return (
        <Box className={classes.transactionFormContainer}>
            <form>
                <Box pb={1}>
                    <FormControl className={classes.transactionFormControl}>
                        <InputLabel htmlFor="payment">Rodzaj płatności</InputLabel>
                            <Select 
                            id='payment' 
                            value={typeOfPayment} 
                            onChange={handleTypeOfPayment}>
                                <MenuItem value="deposit">Wpłata</MenuItem>
                                <MenuItem value="withdraw">Wypłata</MenuItem>
                            </Select>
                        </FormControl>
                </Box>
                <Box pb={1}>
                <FormControl className={classes.transactionFormControl}>
                    <TextField
                        id="standard-number"
                        label="Kwota"
                        type="number"
                        onChange={handleAmount}
                    />
                </FormControl>
                </Box>
                <Box pb={2}>
                { typeOfPayment === 'withdraw' && 
                    <FormControl className={classes.transactionFormControl}>
                        <InputLabel htmlFor="select-category" className={classes.transactionFormLabel}>Kategoria</InputLabel>
                        <Select
                            labelId="select-category"
                            id="select-category"
                            value={category}
                            onChange={handleCategory}
                        >
                            {transformedCategoryList}
                        </Select>
                    </FormControl> 
                }
                </Box>
                <Box pt={2} className={classes.transactionFormButton}>
                    { (typeOfPayment === 'deposit') ? 
                        <Button variant="contained" color="primary" onClick={depositSubmit}>Wpłać</Button> : 
                        <Button variant="contained" color="secondary" onClick={withdrawSubmit}>Wypłać</Button>
                    }
                </Box>
            </form>
        </Box>        
    )
}

TransactionForm.propTypes = {
    dispatch: PropTypes.func,
    categoryList: PropTypes.object,
    dispatchCategory: PropTypes.func
}

export default TransactionForm;