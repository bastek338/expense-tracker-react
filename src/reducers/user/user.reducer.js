import { useReducer } from 'reinspect';
import { userAction } from './user.action';

function init(initialState){
    return { 
        user: undefined,
        isLogin: false,
        error: null
     }
};

function userReducer(state, action) {
    switch(action.type) {
        case userAction.CHECK_AUTH:
            return state;
        case userAction.FETCH_USER_DATA:
            return {
                ...state,
                user: action.user,
                isLogin: action.user ? true : false
            }
        case userAction.ERROR:
            return {
                ...state,
                error: action.error
            }
        default: 
        throw new Error('Action you send is incorrect.')
    }
};

const useUserReducer = () => {
    const [userState, dispatchUser] = useReducer(userReducer, undefined, init, 'USER')

    return {
        user: userState.user,
        isLogin: userState.isLogin,
        dispatchUser
    }
}


export default useUserReducer;