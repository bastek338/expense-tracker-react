import React from 'react'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CategoryChart from '../../Charts/CategoryChart/category-chart.component';
import MonthExpensesChart from '../../Charts/MonthExpensesChart/month-expeneses-chart.component';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ProfitIconsComponent from '../../Icons/ProfitIcons/profit-icon.component';
import useStyles from './tracker-elements.styles'
import LimitTrackerBar from '../../UI/LimitTrackerBar/limit-tracker-bar.component';


const TrackerElements = ({revenues, expenses, categories, months, accountBalance}) => {
    const classes = useStyles();

    return (
        <Box bgcolor="#fff" borderRadius="15px">
            <Grid container>
                <Grid item sm={8} xs={12} className={classes.TrackerLeftGrid}>
                        <ProfitIconsComponent revenues={revenues} expenses={expenses}/>
                        <Box pt={3}>
                            <MonthExpensesChart months={months}/>
                        </Box>
                        <LimitTrackerBar/>
                </Grid>
                <Grid item sm={4} xs={12} className={classes.TrackerRightGrid}>
                <Box>
                    <Box className={classes.TrackerBalanceAccount}>
                            <Box>${accountBalance}</Box> 
                    </Box>
                    <Box className={classes.TrackerAccountBalanceText}>current cash balance</Box>
                </Box>
                        <CategoryChart categories={categories}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TrackerElements
