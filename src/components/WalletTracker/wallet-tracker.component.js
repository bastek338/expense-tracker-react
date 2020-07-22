import React from 'react';
import { Box, Button } from '@material-ui/core';
import CategoryChart from '../../components/Charts/CategoryChart/category-chart.component';
import { ReactComponent as WalletIcon } from '../../assets/SVG/wallet.svg';
import ProfitIconsComponent from '../../components/Icons/ProfitIcons/profit-icon.component';
import Grid from '@material-ui/core/Grid';
import useWalletStyles from './wallet-tracker.styles';
import AddIcon from '@material-ui/icons/Add';
import { useModal } from '../../context/Modal/modal.context';
import MonthExpensesChart from '../Charts/MonthExpensesChart/month-expeneses-chart.component';

const WalletTracker = ({balance: {revenues, expenses}, categories, months}) => {
    const { handleOpen } = useModal();
    const classes = useWalletStyles();
    return (
        <>
            <Box py={3}>
                <Box className={classes.WalletTrackerContainer}>
                    <Box className={classes.WalletTrackerIcon}>
                        <WalletIcon/>
                    </Box>
                    <Box flex='3 1 80%'>
                        <Box className={classes.WalletTrackerTextContainer}>
                            <Box className={classes.WalletTrackerHeading}>Twój portfel</Box>
                            <Box className={classes.WalletTrackerCaption}>Sprawdź jak wygląda twoja sytuacja</Box>
                        </Box>
                    </Box>
                    <Box>
                        <Button endIcon={<AddIcon/>} variant="contained" color="primary" size="large" onClick={() => handleOpen('transaction-form')}>
                            Dodaj
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box bgcolor="#fff" borderRadius="15px">
                <Grid container>
                    <Grid item sm={8} xs={12} className={classes.gridLeft}>
                            <ProfitIconsComponent revenues={revenues} expenses={expenses}/>
                            <Box pt={6}>
                                <MonthExpensesChart months={months}/>
                            </Box>
                    </Grid>
                    <Grid item sm={4} xs={12} className={classes.gridRight}>    
                            <CategoryChart categories={categories}/>
                    </Grid>
                </Grid>
            </Box>
        </>
)

}


export default WalletTracker