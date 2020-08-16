import React from 'react';
import Box from '@material-ui/core/Box';
import useStyles from './profit-icon.styles';

const ProfitIconTemplate = ({children, price, text, color}) => {
    const classes = useStyles();
    console.log(price)
    return (
    <Box className={classes.ProfitIconContainer}>
        <Box className={classes.ProfitIconImage}>
            {children}
        </Box>
        <Box component="span" className={classes.ProfitIconPrice}>{(price === undefined || isNaN(price)) ? 0 : price } $</Box>
        <Box component="span" color={color} className={classes.ProfitIconText}>{text}</Box>
    </Box>
    )
}

export default ProfitIconTemplate
