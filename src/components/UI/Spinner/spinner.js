

import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import useStyles from './spinner.styles';

const Loader = ({text}) => {
    const classes = useStyles();
    
    return (
        <div className={classes.ClipLoaderContainer}>
            <MoonLoader
                size={100}
                color={"#000"}
                loading={true}
            />
            <p>{text}</p>
        </div>
    )
}


export default Loader;