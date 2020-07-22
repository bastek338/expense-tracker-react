import { useReducer } from 'reinspect';
import { balanceActions } from './balance.action';

const initialState = {
    balance: 1000,
    revenues: 2000,
    expenses: 8000
}

function init(initialState) {
    return initialState;
}

const balanceReducer = (state, action) => {
    switch(action.type){
        case balanceActions.WITHDRAW:
            return {
                ...state, 
                expenses: parseInt(state.expenses) + parseInt(action.expenses)
            }
        case balanceActions.DEPOSIT: 
            return {
                ...state,
                revenues: parseInt(state.revenues) + parseInt(action.revenues)
            }
        default:
            throw new Error('Did you send correct action?')
    }
}

export const useBalanceOperation = () => {
    const [balanceState, dispatchBalance] = useReducer(balanceReducer, initialState, init, 'BALANCE');


    return {
        revenues: balanceState.revenues,
        expenses: balanceState.expenses,
        dispatchBalance: dispatchBalance, 
        balanceState: balanceState
    }
}