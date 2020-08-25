import React from 'react';
import { AppBar, Toolbar, SvgIcon, IconButton } from '@material-ui/core';
import headerStyles from './header.styles';
import { ReactComponent as Logo } from '../../assets/SVG/pig.svg';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert'
import { NavLink, useHistory } from 'react-router-dom';
import { auth, db } from '../../firebase/firebase';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SideBar from '../UI/SideBar/sidebar.component';

const Header = ({ user }) => {
    const classes = headerStyles()
    const history = useHistory(); 
    const displayName = user?.displayName ? user?.displayName : '';


    if(!user) {
        history.push('/login')
    }

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const headerBody = (
        <AppBar position="fixed" className={classes.HeaderContainer}>
            <Toolbar>
                <div className={classes.logoContainer}>
                <SvgIcon className={classes.logoSize}>
                    <Logo/>
                </SvgIcon>
                </div>
                <div className={classes.searchContainer}>
                <div className={classes.search}>
                         <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                    </div>
                </div>
                <nav className={classes.navigationContainerDesktop} variant="subtitle1">
                </nav>
                <div className={classes.navigationContainerMobile}>
                    <IconButton
                      aria-label="show more"
                      aria-haspopup="true"
                      onClick={handleDrawerToggle}
                    >
                        <MoreIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )

    return (
        <>
        {headerBody}
        <SideBar name={displayName} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>
        </>
    )
}



export default Header;