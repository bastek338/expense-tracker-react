import React from 'react';
import Container from '@material-ui/core/Container';
import dashboardStyles from './dashboard.styles.js';
import Snackbar from '../../components/UI/Snackbar/snackbar.component';
import Modal from '../../components/UI/Modal/modal.component';
import CardItems from '../../components/Card/CardItems/card-items.component'
import { withStyles } from '@material-ui/core/styles';
import WalletTracker from '../../components/WalletTracker/wallet-tracker.component';
import { useBalance } from '../../context/Balance/balance.context';
import { useCategory } from '../../context/CategoryList/category-list.context';
import Header from '../../components/Header/header.component.js';
import { useUser } from '../../context/User/user.context.js';
import dayjs from 'dayjs';

const Dashboard = () => {
    const { user } = useUser();
    const balance = !user?.months[dayjs().format('YYYY-MM')] ? {revenues: 0, expenses: 0} : user?.months[dayjs().format('YYYY-MM')];
    return (
        <>
        <Header user={user}/>
        <Container fixed>
            <WalletTracker categories={user.categoryList} balance={balance} months={user.months}/>
            <CardItems categories={user.categoryList}/>
            <Snackbar type="success" />
            <Modal/>
        </Container>
        </>
    )
}




export default withStyles(dashboardStyles)(Dashboard);