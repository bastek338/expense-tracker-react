import { makeStyles } from '@material-ui/core/styles';


const useCardItemStyles = makeStyles((theme) => ({
    CardItemContainer: {
        width: '150px',
        margin: theme.spacing(1)
    },
    CardItemImage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '10px 0'
    },
    CardItemCaption: {
        textTransform: 'capitalize'
    }
}))

export default useCardItemStyles;