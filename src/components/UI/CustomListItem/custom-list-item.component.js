import React from 'react'
import { ListItemIcon, ListItem, ListItemText } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import listItemStyles from './custom-list-item.styles';

const CustomListItem = ({text, icon: Icon, pathname}) => {

    const classes = listItemStyles();

    return (
        <ListItem 
            button
            component={NavLink}
            exact
            to={pathname}
            activeClassName={classes.CustomListActiveLink}
            className={classes.CustomListContainer}
        >
        <ListItemIcon>
            <Icon fontSize="large"/>
        </ListItemIcon>
        <ListItemText primary={text}/>
        </ListItem>
    )
}


export default CustomListItem