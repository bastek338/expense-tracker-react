import { makeStyles } from '@material-ui/core/styles';

const dashboardStyles = makeStyles((theme) => ({
    DashboardContainer: {
        display: 'flex'
    },
    DashboardElements: {
        width: '100%',
        order: 1,
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    DashboardToolbar: theme.mixins.toolbar
}))

export default dashboardStyles;