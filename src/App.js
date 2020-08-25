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
import Header from './components/Header/header.component';
import Profile from './pages/Profile/profile.component';

const Dashboard = React.lazy(() => import('./pages/Dashboard/dashboard.component'))
const Login = React.lazy(() => import('./pages/Login/login.component'))


const App = () => {
    const {user, isLogin, dispatchUser } = useUser();
    useEffect(() => { 
        const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(isLogin) dispatchUser({type: userAction.CHECK_AUTH});    
            if(userAuth) {
                    try {
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
            <Header user={user}/>
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
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route path="/contact">
                    <div> Contact page </div>
                </Route>
                <Route path="*">
                </Route>
            </Switch>                
            </div>
            ) 
}

export default App;

