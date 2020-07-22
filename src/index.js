import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SnackbarProvider from './context/Snackbar/snackbar.context';
import ModalProvider from './context/Modal/modal.context';
import BalanceProvider from './context/Balance/balance.context';
import CategoryProvider from './context/CategoryList/category-list.context';
import UserProvider from './context/User/user.context';
import { StateInspector } from 'reinspect';
import {
  BrowserRouter as Router
} from 'react-router-dom';

ReactDOM.render(
  <React.Fragment>
    <Router>
    <StateInspector>
      <UserProvider>
              <CategoryProvider>
                  <ModalProvider>
                      <BalanceProvider>
                          <SnackbarProvider>
                          <App />
                          </SnackbarProvider>
                      </BalanceProvider>
                  </ModalProvider>
              </CategoryProvider>
      </UserProvider>
    </StateInspector>
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
