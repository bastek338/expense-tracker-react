import React from 'react'
import { Box, Avatar, Typography, List, ListItemIcon, ListItem, ListItemText } from '@material-ui/core'
import { useUser } from '../../../../context/User/user.context'
import sideBarStyles from './sidebar-elements.styles';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import CustomListItem from '../../CustomListItem/custom-list-item.component';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import SideBarProfile from './SideBarProfile/sidebar-profile.component';

const SideBarElements = ({name}) => {

    const { user } = useUser();
    const classes = sideBarStyles();

    return (
        <div className={classes.SideBarElementsContainer}>
            <List classes={{padding: classes.SideBarElementsListSpacing}}>
                <CustomListItem text="Dashboard" icon={HomeIcon} pathname="/"/>
                <CustomListItem text="Categories" icon={CategoryOutlinedIcon} pathname="category"/>
            </List>
            <SideBarProfile user={user}/>
        </div>
    )
}

export default SideBarElements