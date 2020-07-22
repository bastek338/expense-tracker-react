import React, { useContext } from 'react';
import useUserReducer from '../../reducers/user/user.reducer';

const UserContext = React.createContext();

const UserContextProvider = ({children}) => {
    const { user, dispatchUser } = useUserReducer();
    
    return (
        <UserContext.Provider value={{user, dispatchUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const { user, dispatchUser } = useContext(UserContext);

    return {
        user,
        dispatchUser
    }
}

export default UserContextProvider;
