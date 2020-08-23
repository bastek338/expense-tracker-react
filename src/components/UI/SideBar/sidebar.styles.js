import { makeStyles } from "@material-ui/core";

export const drawerWidth = 320;

const useStyles = makeStyles(theme => ({
    SideBarPaper: {
        width: drawerWidth,
        flexShrink: 0,
        [theme.breakpoints.down('xs')]: {
            width: '75%'
        }
    }, 
    SideBarDrawer: {
        order: 2,
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        }
    }
}))

export default useStyles;