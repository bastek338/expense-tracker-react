import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import userInformationStyles from './userinformation.styles';



const UserInformation = () => {
    const classes = userInformationStyles();
    const today = new Date();
    const formatDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    return(
        <Box className={classes.userInformationContainer}>
            <Typography component="div" className={classes.mainText}>
                <Box fontSize={22}>Cześć, Sebastian!</Box>
                <Box fontSize={22}>{formatDate}</Box>
            </Typography>
                <Typography variant="subtitle2">Wykorzystałeś już 150 zł z 800 zł twojego maksymalnego budżetu.</Typography>
        </Box>
    )
}

export default UserInformation;