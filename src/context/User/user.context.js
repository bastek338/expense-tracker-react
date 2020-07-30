import React, { useContext } from 'react';
import useUserReducer from '../../reducers/user/user.reducer';

const UserContext = React.createContext();

const UserContextProvider = ({children}) => {
    const { user, dispatchUser, isLogin, error} = useUserReducer();
    
    return (
        <UserContext.Provider value={{user, dispatchUser, isLogin, error}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const { user, dispatchUser, isLogin, error } = useContext(UserContext);

    return {
        isLogin,
        user,
        dispatchUser,
        error
    }
}

export default UserContextProvider;
