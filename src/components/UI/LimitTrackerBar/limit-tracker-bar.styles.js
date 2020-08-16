const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
    'LimitTrackerContainer': {
        marginTop: theme.spacing(4),
    },
    'LimitTrackerPrices': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '28px',
        fontWeight: '700',
    },
    'LimitTrackerPriceCaption': {
        marginTop: '-4px',
        fontSize: '14px',
        color: '#646464',
        fontWeight: '500'
    },
    LimitTrackerBar: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2) 
    },
    LimitTrackerButton: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}))

export default useStyles