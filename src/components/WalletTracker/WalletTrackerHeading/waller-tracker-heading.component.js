import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import { Box, Button } from '@material-ui/core';
import { useModal } from '../../../context/Modal/modal.context';
import { ReactComponent as WalletIcon } from '../../../assets/SVG/wallet.svg';
import useStyles from './wallet-tracker-heading.styles';

const WalletTrackerHeading = () => {
    const { handleOpen } = useModal();
    const classes = useStyles()
    return (
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
    )
}

export default WalletTrackerHeading
