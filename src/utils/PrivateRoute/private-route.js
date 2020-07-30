import React  from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUser } from '../../context/User/user.context';

const PrivateRoute = ({children, redirect, user, ...rest}) => {
    return (
        <Route
          {...rest}
          render={({ location }) =>
            user ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: redirect,
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
} 


export default PrivateRoute;