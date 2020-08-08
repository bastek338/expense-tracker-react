import React from 'react'
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';

const List = styled.li`
display: flex;
flex-direction: column;
`

const ListItem = styled.ul`
list-style: none;
}
`

const Text = styled.div`
font-size: 20px;
font-weight: 600;
letter-spacing: -1.5px;
`

const CategoryChartPriceList = ({categories}) => {
    console.log('categories:', categories)
    const simpleList = Object.keys(categories).sort().map(val => {
        const {color, id, name} = categories[val]
        const upperCasedName = name.replace(/^\w/, (w) => w.toUpperCase())
        return (
            <Grid item xs={3} key={id}> 
                <Box display="flex" alignItems='center'>
                    <FiberManualRecordIcon style={{color: `${color}`, fontSize: '16px', marginTop: '3px'}}/> 
                    <Text>${categories[val].amountSpent}</Text>
                </Box>
               <Box pl="15px" color="#646464" fontSize="14px" >{upperCasedName}</Box>
            </Grid>
        )
    })

    return (
        <div>
        <Grid container justify="flex-start" spacing={2}>
            {simpleList}
        </Grid>
        </div>
    )
}

export default CategoryChartPriceList
