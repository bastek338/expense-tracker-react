import React from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';

import useStyles from './category-chart.styles';
import { Box } from '@material-ui/core';
import { useCategory } from '../../../context/CategoryList/category-list.context';
import CategoryChartPriceList from './category-chart-price.legend';

defaults.global.defaultFontFamily = 'Roboto';


const Chart = ({categories}) => {
    const classes = useStyles();
    const categoriesName = Object.keys(categories).map(cat => cat.charAt(0).toUpperCase() + cat.split('').slice(1).join(''))
    const categoriesAmount = Object.keys(categories).map(cat => categories[cat].amountSpent);
    const categoriesColor = Object.keys(categories).map(cat => categories[cat].color);
    return (
        <Box className={classes.PieChartContainer}>
            <Box className={classes.PieChartText}>
                <p>Expenses</p>
            </Box>
            <Box>
            <Doughnut data={{
                labels: categoriesName,
                datasets: [
                    {
                        label: 'Wydatki w tym miesiącu',
                        data: categoriesAmount,
                        backgroundColor: categoriesColor
                    }
                ]
            }}
                options={{
                    responsive: true,
                    legend: {
                        display: false,
                        position: 'bottom',
                        align: 'left',
                    },
                    layout: {
                        padding: {
                            left: 15,
                            right: 15,
                            top: 0,
                            bottom: 20
                        }
                    },
                    scales: {
                        scaleLabel: {
                            padding: 5
                        }
                    }
                    }}
                width={100}
                height={100}
            />
            <CategoryChartPriceList categories={categories}/>
            </Box>
        </Box>
    )
}

export default Chart