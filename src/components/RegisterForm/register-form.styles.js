import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    RegisterFormInputs: {
        '& > div': {
            width: '100%',
            marginBottom: '10px'
        }
    },
    RegisterFormButtons: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        '& > button': {
            marginTop: '10px',
            color: '#fff',
            background: '#f87e41',
            boxShadow: 'none'
        },
        '& > button:hover': {
            background: '#e0623c',
            boxShadow: 'none'
        }
    }
}))

export default useStyles;