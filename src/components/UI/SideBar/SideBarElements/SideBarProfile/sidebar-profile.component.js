import React from 'react'
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import profileStyles from './sidebar-profile.styles';
import PropTypes from 'prop-types';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { auth } from '../../../../../firebase/firebase';
import { useHistory } from 'react-router-dom';

const SideBarProfile = ({user}) => {
    const classes = profileStyles();
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [height, setHeight] = React.useState(0); 
    const sideBarRef = React.useRef(null);
    let history = useHistory();

    const logout = () => {
        auth.signOut()
    .catch(err => console.log(err.message))
    }

    const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen(!open)
    };

    const id = open ? 'simple-popper' : undefined;

    React.useEffect(() => {
        setHeight(sideBarRef.current.clientHeight)
    }, [])

    let toggle = open ? classes.SideBarProfileDisplayBox : classes.SideBarProfileHideBox;

    return (
        <Box className={classes.SideBarProfile} ref={sideBarRef}>
            <Box>
                <Avatar alt={user?.displayName} src={user?.photoURL} className={classes.SideBarProfileAvatar}/>
            </Box>
            <Box className={classes.SideBarProfileName}>
                <Box>{user?.displayName}</Box>
                <Typography variant="caption" onClick={() => history.push('/profile')}>View Profile</Typography>
            </Box>
            <Box className={classes.SideBarProfileIcon} onClick={handleClick}>
                <SettingsIcon aria-describedby={id} fontSize="medium"/>
            </Box>
                    <Box 
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: `calc(100% - ${height}px - 60px)`,
                    }}
                    className={ `${classes.SideBarProfileLogoutBox} ${toggle}`}
                    >
                        <Box>
                            <ExitToApp fontSize="large" className={classes.SideBarProfileLogoutButton} onClick={logout}/>
                            <Typography variant="body1" className={classes.SideBarProfileLogoutText} onClick={logout}>Logout</Typography>
                        </Box>

                    </Box>
        </Box>
    )
}

SideBarProfile.propTypes = {
    user: PropTypes.object.isRequired
}

export default SideBarProfile
