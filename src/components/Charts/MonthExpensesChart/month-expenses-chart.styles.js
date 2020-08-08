const { makeStyles, isWidthDown } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
    MonthExpensesChartLegend: {
        display: 'flex',
        width: '95%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '16px 0px',
        '& div': {
            padding: '0 8px',
            display: 'flex',
            alignItems: 'center',
            fontWeight: 500
        },
        '& svg': {
            fontSize: '18px',
            paddingTop: '3px' 
        }
    }
}))

export default useStyles;