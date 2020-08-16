const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
    PieChartContainer: {
        '& canvas': {
        }
    },
    PieChartText: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        fontSize: '1.3rem',
        fontWeight: 'bold',
    }
}))

export default useStyles;