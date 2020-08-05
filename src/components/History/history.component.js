import React from 'react'
import Box from '@material-ui/core/Box';
import useHistoryClasses from './history.styles';
import HistoryTable from './HistoryTable/historyTable.component';

const History = ({historyBalance}) => {
    const classes = useHistoryClasses();
    return (
        <div className={classes.HistoryContainer}>
            <Box className={classes.HistoryHeading}>
                <h3 className={classes.HistoryHeadingText}>Balance History</h3>
            </Box>
            <Box>
            <HistoryTable historyBalance={historyBalance}/>
            </Box>
        </div>
    )
}

export default History
