const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
    WalletTrackerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
        }
    },
    WalletTrackerIcon: {
        height: '65px',
        width: '65px',
        padding: '0px 8px',
        [theme.breakpoints.down('sm')]: {
            width: '50px',
            height: '50px'
        }
    },
    WalletTrackerHeading: {
        display: 'flex',
        flex: '3 1 80%',
        justifyContent: 'flex-start',
        fontSize: '32px',
        fontWeight: '400',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
            justifyContent: 'center'
        }
    },
    WalletTrackerCaption: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }, 
    WalletTrackerTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    }
}))

export default useStyles;