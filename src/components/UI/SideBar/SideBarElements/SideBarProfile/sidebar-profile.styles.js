const { makeStyles } = require("@material-ui/core");

const profileStyles = makeStyles(theme => ({

    SideBarProfile: {
        display: 'flex',
        padding: theme.spacing(2, 3),
        marginTop: 'auto',
    },
    SideBarProfileAvatar: {
        marginRight: theme.spacing(2),
        flexGrow: 1
    },
    SideBarProfileName: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: '14px',
        flexGrow: 2,
        '& > span': {
            color: '#727272',
            cursor: 'pointer'
        }
    },
    SideBarProfileIcon: {
        display: 'flex',
        alignItems: 'center',
        color: '#727272',
        cursor: 'pointer'
    },
    SideBarProfilePopper: {
        width: '100%',
        padding: theme.spacing(1)
    },
    SideBarProfileLogoutBox: {
        width: '100%',
        padding: theme.spacing(1),
        borderBottom: '1px solid #e4e4e4', 
        '& div': {
            padding: theme.spacing(1, 2),
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            borderRadius: theme.spacing(1)
        },
        '& div:hover': {
            backgroundColor: '#F5F5F5'
        }
    },
    SideBarProfileDisplayBox: {
        visibility: 'visible',
        opacity: 1,
        transition: 'opacity 0.2s linear',
    },
    SideBarProfileHideBox: {
        opacity: 0,
        visibility: 'hidden',
        transition: 'visibility 0s 0.2s, opacity 0.2s linear',
    },
    SideBarProfileLogoutButton: {
        marginRight: theme.spacing(3),
        cursor: 'pointer'            
    },
    SideBarProfileLogoutText: {
        cursor: 'pointer'
    }
}))

export default profileStyles;