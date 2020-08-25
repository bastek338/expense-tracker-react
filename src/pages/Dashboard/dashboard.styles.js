import { makeStyles } from '@material-ui/core/styles';

const dashboardStyles = makeStyles((theme) => ({
    DashboardContainer: {
        flexGrow: 1
    },
    DashboardElements: {
        width: '100%',
        order: 1,
        flexGrow: 1,
    },
    DashboardToolbar: theme.mixins.toolbar
}))

export default dashboardStyles;