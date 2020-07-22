import React from 'react';
import { Box } from '@material-ui/core';

const TabPanel = ({children, value, index, ...other}) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}>
                {value === index && (
                    <Box py={3}>
                        {children}
                    </Box>
                )}
        </div>
    )
}
export default TabPanel;