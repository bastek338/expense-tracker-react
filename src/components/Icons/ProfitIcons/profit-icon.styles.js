import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles(theme => ({
    ProfitIconContainer: { 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& > div': {
                padding: '5px 0'
            }
        }
    },
    ProfitIconImage: {
        width: '75px',
        height: '75px',
        [theme.breakpoints.down('sm')]: {
            width: '35px',
            height: '35px',
            marginRight: '10px'
        }
    }, 
    ProfitIconText: {
        fontSize: '16px',
        fontWeight: '500',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            order: '2',
            flex: '1 1 65%'
        }
    },
    ProfitIconPrice: {
        fontSize: '24px', 
        fontWeight: '600',
        padding: '10px 0px',
        [theme.breakpoints.down('sm')]:{
            flex: '1 1 20%',
            order: '3',
            fontSize: '16px',
            padding: '0px',
            textAlign: 'right'
        }
    }
}))

export default useStyles;