import React, { useEffect, Suspense } from 'react';
import { useUser } from './context/User/user.context';
import { userAction } from './reducers/user/user.action';
import './App.css';
import {
    Route,
    Switch
} from 'react-router-dom';
import { auth, checkUserInDatabase } from './firebase/firebase';
import PrivateRoute from './utils/PrivateRoute/private-route';
import Loader from './components/UI/Spinner/spinner';

const Dashboard = React.lazy(() => import('./pages/Dashboard/dashboard.component'))
const Login = React.lazy(() => import('./pages/Login/login.component'))


const App = () => {
    console.log(auth.currentUser?.email)
    const {user, isLogin, dispatchUser } = useUser();
    useEffect(() => { 
        const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(isLogin) dispatchUser({type: userAction.CHECK_AUTH});    
            if(userAuth) {
                    try {
                        console.log('userData', userAuth)
                        const userRef = await checkUserInDatabase(userAuth, dispatchUser)
                        userRef.onSnapshot(userSnapshot => {
                            dispatchUser({type: userAction.FETCH_USER_DATA, user: {
                                    id: userAuth.uid,
                                    ...userSnapshot.data(),
                                }
                            })
                            if(!userSnapshot.data().displayName) userRef.update({displayName: userAuth.displayName})
                        })
                    } catch(e) {
                        console.log(e.message)
                        dispatchUser({type: userAction.ERROR, error: e.message})
                    }
                } else {
                        dispatchUser({type: userAction.FETCH_USER_DATA, user: userAuth})
                }
            })
        
 
        
        return () => {
            unsubscribeFromAuth();
        }

    }, []);


    return (
            <div className="AppContainer">
            <Switch>
                <PrivateRoute exact path="/" redirect="/login" user={user}>
                    <Suspense fallback={<Loader text="Uwierzytelnianie..."/>}>
                        <Dashboard/>             
                    </Suspense>
                </PrivateRoute>
                <PrivateRoute path="/login" redirect="/" user={!user}>
                    <Suspense fallback={ <Loader text="Ładowanie..."/>}>
                       <Login user={user}/>
                    </Suspense>
                </PrivateRoute>
                <Route path="/contact">
                    <div> Contact page </div>
                </Route>
                <Route path="*">
                    <div>Page not found</div>
                </Route>
            </Switch>                
            </div>
            ) 
}

export default App;

