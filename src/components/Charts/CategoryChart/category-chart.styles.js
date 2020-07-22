const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
    PieChartContainer: {
        '& canvas': {
            height: '100%',
            width: '100%'
        }
    },
    PieChartText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.3rem',
        fontWeight: 'bold',
    }
}))

export default useStyles;