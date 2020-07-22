import React from 'react';
import Grid from '@material-ui/core/Grid'
import {  Box, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CardItem from '../CardItem/card-item.component';
import useCardItemsStyles from './card-items.styles';
import { useModal } from '../../../context/Modal/modal.context';


const CardItems = ({categories}) => {
    const classes = useCardItemsStyles();
    const { handleOpen } = useModal();

    const categoriesList = Object.keys(categories).map(keys => <CardItem key={categories[keys].id} {...categories[keys]} />)

    return (
        <>
            <Box className={classes.CardItemsHeading}>
                    <Box className={classes.CardItemsCategoryText}>Kategorie</Box>
                    <Box>
                        <Button size="large" color="primary" variant="contained" endIcon={<AddIcon/>} onClick={() => handleOpen('category')}>dodaj</Button>
                    </Box>
            </Box> 
            <Grid container className={classes.CardItemsContainer}>
            {categories && categoriesList}
            </Grid>
        </>
    )
}

export default CardItems;