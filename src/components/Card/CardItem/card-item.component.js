import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useCartItemStyles from './card-item.styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Icon from '@material-ui/core/Icon'


const CardItem = ({name, amountSpent, icon}) => {
    const classes = useCartItemStyles({});
    
    return (
        <Grid item md={2} xs={6}>
            <Card className={classes.CardItemContainer}>
                <CardContent>
                    <Box className={classes.CardItemImage}>
                        {/* <Icon style={{fontSize: 45}}>{icon}</Icon> */}
                        <img style={{width: '40px', height: '40px'}} src={icon} alt={`${name}-icon`}/>
                    </Box>
                    <Box>
                        <Typography variant="caption" className={classes.CardItemCaption}>{name}</Typography>
                        <Typography variant="subtitle2">{amountSpent} $</Typography>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )
}

CardItem.propTypes = {
    name: PropTypes.string,
    amountSpent: PropTypes.number
}

export default CardItem;