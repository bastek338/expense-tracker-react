import React from 'react'
import useStyles from './limit-tracker-bar.styles';
import styled from 'styled-components';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { useModal } from '../../../context/Modal/modal.context';
import { useUser } from '../../../context/User/user.context';
import dayjs from 'dayjs';

const CustomProgressBar = styled.progress`
    width: 100%;
    height: 35px;
    border-radius: 3px;
    &[value] {
        appearance: none;
        border: none;
        border-radius: 3px;
        width: 100%;
        height: 35px;
    }
    &[value]::-moz-progress-bar {
	background-color: #303F9F;
	border-radius: 3px;
    }
    &[value]::-webkit-progress-bar {
    transition: width 1s;
    background-color: #f1f2f6;
	border-radius: 3px;
    }
    &[value]::-webkit-progress-value {
        background-color: #303F9F;
        border-radius: 3px;
    }
}
`

const LimitTracker = () => {
    const { handleOpen } = useModal();
    const classes = useStyles();
    const { user: { months } } = useUser();
    const {expenses: expensesInCurrentMonth, monthlyLimit} = months[dayjs().format('YYYY-MM')];
    console.log(monthlyLimit)
    return (
        <div className={classes.LimitTrackerContainer}>
                {
                monthlyLimit !== 0 ? (
                    <>
                    <Box className={classes.LimitTrackerPrices}>
                            <Box>
                                ${expensesInCurrentMonth}
                                <Box className={classes.LimitTrackerPriceCaption}>Overdue</Box>
                            </Box>
                            <Box>
                                ${monthlyLimit}
                                <Box className={classes.LimitTrackerPriceCaption}>Not due yet</Box> 
                            </Box>
                    </Box>
                    <Box className={classes.LimitTrackerBar}>
                        <CustomProgressBar max={monthlyLimit} value={expensesInCurrentMonth}></CustomProgressBar>
                    </Box>   
                    </> 
                        ) : <Box>You dont have set limit yet.</Box>
                }
            <Box className={classes.LimitTrackerButton}>
                <Button variant="contained" color="primary" onClick={() => handleOpen('setLimit')}>Set limit</Button>
            </Box>
        </div>
    )
}

export default LimitTracker
