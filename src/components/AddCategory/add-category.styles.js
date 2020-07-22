import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    AddCategoryContainer: {
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        '& div:not(:first-child)': {
            marginTop: '15px'
        }
    },
    AddCategoryButton: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
})) 

export default useStyles;