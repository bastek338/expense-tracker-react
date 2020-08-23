import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import useStyles from './sidebar.styles'
import { Hidden } from '@material-ui/core'
import SideBarElements from './SideBarElements/sidebar-elements.component'


const SideBar = ({name, mobileOpen, handleDrawerToggle}) => {

    const classes = useStyles()

    return (
        <nav className={classes.SideBarDrawer}>
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    classes={{paper: classes.SideBarPaper}}
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                    keepMounted: true,
                    }}
                >
                <SideBarElements/>
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                    paper: classes.SideBarPaper,
                    }}
                    variant="permanent"
                    anchor="right"
                    open
                >
                <SideBarElements/>
                </Drawer>
            </Hidden>
        </nav>
    )
}

export default SideBar
