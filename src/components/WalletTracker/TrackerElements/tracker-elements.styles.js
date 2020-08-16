const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
    TrackerLeftGrid: {
        padding: '50px',
        borderRight: '1px dashed #d6d6d6',
        [theme.breakpoints.down('sm')]: {
            padding: '20px'
        }
    },
    TrackerRightGrid: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: '40px'
    },
    TrackerBalanceAccount: {
        display: 'flex',
        alignContent: 'baseline',
        fontSize: '42px',
        fontWeight: '700'
    },
    TrackerAccountBalanceText: {
        marginTop: '-10px',
        color: '#646464',
    }
}))

export default useStyles;