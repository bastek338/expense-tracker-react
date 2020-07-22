import { makeStyles } from '@material-ui/core/styles';

const modalStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    modalItemContainer: {
        background: theme.palette.background.paper,
        padding: theme.spacing(3),
        outline: 'none'
    }

}))

export default modalStyles;