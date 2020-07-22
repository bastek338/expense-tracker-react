import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    NavTabsContainer: {
        width: '400px'
    },
    NavTabsWrapper: {
        color: '#000',
        background: 'inherit'
    },
    NavTabsSingleButton: {
        borderBottom: '1px solid #a1a1a1'
    },
    indicator: {
        background: '#f87e41'
    }
}))

export default useStyles;