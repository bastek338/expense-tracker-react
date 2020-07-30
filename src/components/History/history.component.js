import React from 'react'
import Box from '@material-ui/core/Box';
import useHistoryClasses from './history.styles';

const History = () => {
    const classes = useHistoryClasses();
    return (
        <div>
            <Box>
                <h3 className={classes.HistoryHeadingText}>Balance History</h3>
            </Box>
        </div>
    )
}

export default History
