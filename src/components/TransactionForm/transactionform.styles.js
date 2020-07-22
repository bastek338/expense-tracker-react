import { makeStyles } from '@material-ui/core/styles';

const useTransactionFormStyles = makeStyles(theme => ({
    transactionFormContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px'
    },
    transactionFormControl: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    transactionFormButton: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    transactionFormCategorySelect: {
        textTransform: 'capitalize'
    }
}))

export default useTransactionFormStyles;