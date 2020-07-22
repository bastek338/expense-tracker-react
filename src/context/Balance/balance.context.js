import React, { createContext, useContext } from 'react';
import { useBalanceOperation } from '../../reducers/balance.reducer';

export const BalanceContext = createContext({});

const BalanceProvider = ({children}) => {
    const { balanceState, dispatchBalance } = useBalanceOperation(); 

    return <BalanceContext.Provider value={{balanceState, dispatchBalance}}>{children}</BalanceContext.Provider>
}

export const useBalance = () => {
    const { balanceState, dispatchBalance } = useContext(BalanceContext);

    return {
        balanceState,
        dispatchBalance
    }
};

export default BalanceProvider;