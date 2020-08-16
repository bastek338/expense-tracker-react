import React from 'react';
import useWalletStyles from './wallet-tracker.styles';
import MonthExpensesChart from '../Charts/MonthExpensesChart/month-expeneses-chart.component';
import TrackerElements from './TrackerElements/tracker-elements.component';
import WalletTrackerHeading from './WalletTrackerHeading/waller-tracker-heading.component';


const WalletTracker = ({balance: {revenues, expenses}, categories, months, accountBalance}) => {
    return (
        <>
            <WalletTrackerHeading/>
            <TrackerElements 
                expenses={expenses}
                revenues={revenues}
                categories={categories}
                months={months}
                accountBalance={accountBalance}
            />
        </>
)

}


export default WalletTracker