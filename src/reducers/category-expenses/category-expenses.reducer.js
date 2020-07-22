import { categoryAction } from './category-expenses.action';
import { useReducer } from 'reinspect';

const initialState = {};

function init(initialState){
    return initialState;
}


export const categoryExpensesReducer = (state, action) => {
    switch(action.type){
        case categoryAction.PICK_CATEGORY:
            return {
                ...state,
                [action.category]: {
                    ...state[action.category],
                    amountSpent: state[action.category].amountSpent + parseInt(action.amount)
                }
            }
        case categoryAction.ADD_CATEGORY:    
            return {
                ...state,
                ...action.categoryList
            }
        default: 
        throw new Error('Incorrect action type.')
    }
}

export const useCategoryExpenses = () => {
    const [categoryList, dispatchCategory] = useReducer(categoryExpensesReducer, initialState, init, 'CATEGORY');
    return {
        categoryList,
        dispatchCategory
    }
}