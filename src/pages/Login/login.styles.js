import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    LoginGridItemLeft: {
        background: 'linear-gradient(to top, #209cff 0%, #68e0cf 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    LoginGridItemRight: {
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            background: 'inherit'
        }
    },
    LoginBackground: {
        width: '65%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    },
    LoginBackgroundTitle: {
        fontSize: '20px',
        fontWeight: '600',
        paddingBottom: '8px'
    },
    LoginBackgroundSubtitle: {
        fontSize: '16px',
        fontWeight: '400'
    },
    LoginBackgroundPaper: {
        display: 'flex',
        marginTop: '32px',
        padding: '20px 16px',
    },
    LoginDesktopImage: {
        width: '450px'
    },
    LoginTabsWrapper: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 10px'
    },
    LoginSocialButtons: {
        display: 'flex',
        justfyContent: 'space-between',
        padding: '20px 0'
    },
    LoginWelcomeText: {
        width: '100%',
        fontSize: '28px',
        fontWeight: '500',
        paddingBottom: '48px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px'
        }
    },
    LoginHeading: {
        width: '420px',
        padding: '0 20px'
    },
    LoginImageMobile: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            width: '275px',
            paddingBottom: '48px',
            display: 'block'
        }
    }
}))

export default useStyles;

