import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    HistoryContainer: {
        marginBottom: theme.spacing(4)
    },
    HistoryHeading: {
        display: 'flex',
        padding: '0px 15px',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    HistoryHeadingText: {
        fontSize: '28px',
        fontWeight: '600'
    }
}))

export default useStyles;