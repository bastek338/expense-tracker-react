import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar'
import { Tabs, Tab } from '@material-ui/core';
import useStyles from './nav-tabs.styles';
import TabPanel from './TabPanel/tab-panel.component';
import LoginForm from '../LoginForm/login-form.container';
import RegisterForm from '../RegisterForm/register-form.component';

function allyProps(index) {
    return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`,
    };
  }

const NavTabs = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div className={classes.NavTabsContainer}>
            <AppBar position="relative" className={classes.NavTabsWrapper} elevation={0}>
                <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="nav-tabs"
                classes={{
                indicator: classes.indicator
                 }}
                >
                    <Tab label="Login" {...allyProps(0)} className={classes.NavTabsSingleButton}/>
                    <Tab label="Register" {...allyProps(1)} className={classes.NavTabsSingleButton}/>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <LoginForm/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <RegisterForm/>
            </TabPanel>
        </div>
    )
} 

export default NavTabs;