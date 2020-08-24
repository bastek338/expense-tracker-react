import React from 'react'
import myProfileStyles from './profile.styles'

const Profile = () => {
    const classes = myProfileStyles();

    return (
        <div>
            <div className={classes.ProfileToolbar}/>
            hello from the profile
        </div>
    )
}

export default Profile
