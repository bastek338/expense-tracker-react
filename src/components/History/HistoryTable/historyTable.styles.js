const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
    HistoryTableWithdraw: {
        color: '#ba0016'
    },
    HistoryTableDeposit: {
        color: '#00bf0d'
    }
}))

export default useStyles;