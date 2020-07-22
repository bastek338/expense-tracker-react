import { makeStyles } from '@material-ui/core/styles';

const useCardItemsStyles = makeStyles(theme => ({
    CardItemsContainer: {
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    CardItemsHeading: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 15px'
    },
    CardItemsCategoryText: {
        fontSize: '28px',
        fontWeight: '600'
    }
}))

export default useCardItemsStyles;