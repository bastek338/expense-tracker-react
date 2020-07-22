import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import useStyles from './login.styles';
import NavTabs from '../../components/NavTabs/nav-tabs.component';
import Paper from '@material-ui/core/Paper';
import { ReactComponent as MoneyBox } from '../../assets/SVG/login-background-photos/safety-box.svg' 
import { ReactComponent as WorriedMan } from '../../assets/SVG/login-background-photos/worried-man.svg';
import { useUser } from '../../context/User/user.context'; 
import { useHistory } from 'react-router-dom';

const LoginPage = ({user}) => {
    const classes = useStyles();

    const history = useHistory();

    return (user === null) ? ( 
        <Grid container style={{ height: '100vh'}}>
            <Grid item lg={6} sm={12} className={classes.LoginGridItemLeft}>
                <Box className={classes.LoginBackground}>
                    <Box className={classes.LoginDesktopImage}>
                        <WorriedMan/>
                    </Box>
                    <Paper elevation={0} className={classes.LoginBackgroundPaper}>
                        <Box pr={2} width="130px">
                            <MoneyBox />
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <Box className={classes.LoginBackgroundTitle}>
                                Expense Tracker
                            </Box>
                            <Box className={classes.LoginBackgroundSubtitle}>We will help you organize all your expenses. No more worries where your money escapes.</Box>
                        </Box>
                    </Paper>
                </Box>
            </Grid>
            <Grid item lg={6} sm={12} className={classes.LoginGridItemRight}>
                <Box className={classes.LoginTabsWrapper}>
                    <Box className={classes.LoginImageMobile}>
                        <WorriedMan/>
                    </Box>
                    <Box className={classes.LoginHeading}>
                        <Box className={classes.LoginWelcomeText}>Create account or just sign in.</Box>
                    </Box>
                    <NavTabs/>
                </Box>
            </Grid>
        </Grid>
    ) : null
} 

export default LoginPage;