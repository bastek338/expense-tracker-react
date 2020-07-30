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

const Header = ({ user } ) => {
    const classes = headerStyles()
    const history = useHistory(); 
    const displayName = user.displayName;
    const logout = () => {
        auth.signOut()
    .catch(err => console.log(err.message))
    }

    if(!user) {
        history.push('/login')
    }

    const headerBody = (
        <div className={classes.root} xs={12}>
        <AppBar position="static" color="transparent" className={classes.appBarContainer}>
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
                    <NavLink to="/contact" href="#" color="inherit" underline="none" className={classes.HeaderLink}>
                        Contact
                    </NavLink>
                   <Avatar alt={user.displayName} src={user.photoURL} className={classes.HeaderAvatarSize} />
                   <span className={classes.HeaderAvatarName}>{displayName}</span>
                   <IconButton className={classes.HeaderButtons} variant="contained" onClick={logout}>
                       <ExitToAppIcon/>
                   </IconButton>
                </nav>
                <div className={classes.navigationContainerMobile}>
                    <IconButton
                      aria-label="show more"
                      aria-haspopup="true"
                      onClick={() => {}}
                    >
                        <MoreIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </div>
    )

    return headerBody
}



export default Header;