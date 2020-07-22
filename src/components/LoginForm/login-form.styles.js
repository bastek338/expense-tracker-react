import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    LoginFormContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& > div': {
            margin: '5px'
        }
    },
    LoginFormHeading: {
        width: '100%',
        fontSize: '28px',
        fontWeight: '700'
    },
    LoginFormButtons: {
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
    },
    LoginFormInputs: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        '& > div': {
            width: '100%',
            marginTop: '8px'
        },
        '& input': {
            width: '100%'
        }
    },
    LoginFormSocialText: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '16px',
        padding: '15px 0 0 0'
    },
    LoginFormSocialIcons: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },
    SocialIcon: {
        width: '50px',
        height: '50px'
    }
}))

export default useStyles;