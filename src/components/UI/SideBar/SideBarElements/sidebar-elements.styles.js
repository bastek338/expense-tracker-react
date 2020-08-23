const { makeStyles } = require("@material-ui/core");

const sideBarStyles = makeStyles(theme => ({
    SideBarElementsContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    SideBarElementsListSpacing: {
        padding: theme.spacing(1)
    }
}))

export default sideBarStyles;