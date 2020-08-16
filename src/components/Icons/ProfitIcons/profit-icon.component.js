import React from 'react';
import { Grid, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import ProfitIconTemplate from './profit-icon.template';
import Select from '@material-ui/core/Select';
import { ReactComponent as ExpensesIcon } from '../../../assets/SVG/profit-icons/down-arrow.svg';
import { ReactComponent as CostsIcon } from '../../../assets/SVG/profit-icons/up-down-arrow.svg';
import { ReactComponent as RevenuesIcon } from '../../../assets/SVG/profit-icons/up-arrow.svg';

const ProfitIconsComponent = ({revenues, expenses}) => {
    const costs = parseInt(revenues - expenses);
    return ( 
        <>
        <Grid container>
            <Grid item sm={4} xs={12}>
                <ProfitIconTemplate text="Wydatki" color="error.main" price={expenses}>
                    <ExpensesIcon/>
                </ProfitIconTemplate>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Box>
                    <ProfitIconTemplate text="Wydatki i Przychody" color="primary.main" price={costs}>
                        <CostsIcon/>
                    </ProfitIconTemplate>
                </Box>
            </Grid>
            <Grid item sm={3} xs={12}>
                <Box>
                    <ProfitIconTemplate text="Przychody" color="success.main" price={revenues}>
                        <RevenuesIcon />
                    </ProfitIconTemplate>
                </Box>
            </Grid>
            {/* <Grid item sm={3}>
                <InputLabel id="pick-date-label">Pick Date</InputLabel>
                <Select value="test" labelId="pick-date-label" id='pick-date'>
                    <MenuItem value="test1">test1</MenuItem>
                    <MenuItem value="test2">test2</MenuItem>
                </Select>
            </Grid> */}
        </Grid>
        </>
    )}

export default ProfitIconsComponent;