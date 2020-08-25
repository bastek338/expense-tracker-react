const { makeStyles } = require("@material-ui/core");

const sideBarStyles = makeStyles(theme => ({
    SideBarElementsContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    SideBarElementsListSpacing: {
        padding: theme.spacing(1)
    },
    SideBarElementsLoaderBox: {
        width: '100%',
        display: 'flex',
        marginTop: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(3, 0)
    }
}))

export default sideBarStyles;