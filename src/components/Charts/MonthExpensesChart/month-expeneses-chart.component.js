import React from 'react'
import { Bar } from 'react-chartjs-2'
import dayjs from 'dayjs';

let arrayOfMonths = [];

function getLastSixMonths() {
  for (let i = 6; i >= 0; i--) {
    arrayOfMonths.push(dayjs().subtract(i, "months"));
  }
}

getLastSixMonths();

function getValuesFromMonths(array, value) {
    return Object.keys(array).map(month => array[month][value])
}

const MonthExpensesChart = ({months}) => {
    const listOfMonths = arrayOfMonths;
    const monthsByName = listOfMonths.map(month => month.format('MMM'))
    const mapMonthsFromDatabase = listOfMonths.map(val => val.format('YYYY-MM')).reduce((result, item) => {
        months[item] ? (result[item] = {...months[item]}) : (result[item] = {expeneses: 0, revenues: 0})
        return result;
    }, {});

    const revenuesValues = getValuesFromMonths(mapMonthsFromDatabase, 'revenues');
    const expensesValues = getValuesFromMonths(mapMonthsFromDatabase, 'expenses')

    return (
        <div>
            <Bar
                width={100}
                height={40}
                data={{
                    labels: monthsByName,
                    datasets: [
                        {
                        label: 'Expenses',
                        backgroundColor: '#e0e0e0',
                        data: expensesValues
                        },
                        {
                        label: 'Revenues',
                        backgroundColor: '#017eff',
                        data: revenuesValues
                        }
                    ],
                    
                }}
                options={{
                    reponsive: true,
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            barThickness: 20,
                            gridLines: {
                                display: false
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                // suggestedMax: 1500,
                                callback: function(value) {
                                    return (value === 0) ? value : '$' + value
                                }
                            },
                            gridLines: {
                                display: false
                            }
                        }]
                    }
                }}
            />
        </div>
    )
}

export default MonthExpensesChart
