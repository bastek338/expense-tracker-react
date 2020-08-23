import React from 'react';
import dashboardStyles from './dashboard.styles.js';
import Snackbar from '../../components/UI/Snackbar/snackbar.component';
import Modal from '../../components/UI/Modal/modal.component';
import CardItems from '../../components/Card/CardItems/card-items.component'
import { withStyles } from '@material-ui/core/styles';
import WalletTracker from '../../components/WalletTracker/wallet-tracker.component';
import Header from '../../components/Header/header.component.js';
import { useUser } from '../../context/User/user.context.js';
import dayjs from 'dayjs';
import History from '../../components/History/history.component.js';


const Dashboard = () => {
    const { user } = useUser();
    const balance = !user.months?.[dayjs().format('YYYY-MM')] ? {revenues: 0, expenses: 0} : user.months?.[dayjs().format('YYYY-MM')];
    const classes = dashboardStyles();

    return (
        <div className={classes.DashboardContainer}>
        <Header user={user}/>
        <div className={classes.DashboardElements}>
            <div className={classes.DashboardToolbar}/>
            <WalletTracker categories={user.categoryList} balance={balance} months={user.months} accountBalance={user.currentAccountBalance}/>
            <CardItems categories={user.categoryList}/>
            <Snackbar type="success" />
            <History historyBalance={user.historyBalance}/>
            <Modal/>
        </div>
        </div>
    )
}




export default withStyles(dashboardStyles)(Dashboard);