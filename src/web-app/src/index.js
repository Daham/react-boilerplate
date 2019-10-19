/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-08-18 08:19:06
 * @modify date 2019-08-18 08:19:06
 * @desc Create Redux Store,Initializing Saga Middleware, Wrap the App with Redux, React Router V4 & Baisc theme.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { MuiThemeProvider } from '@material-ui/core/styles';
//import 'typeface-roboto';

import App from './App';
import './index.css';
//Reducers
import authReducer from './store/reducers/auth';

//Sagas
import { watchAuth} from './store/sagas/index';

//Application overall theme
import { theme } from './theme/theme';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Initialize the root reducer.
const rootReducer = combineReducers({
    auth: authReducer
});

//Initialize the saga middleware.
const sagaMiddleware = createSagaMiddleware();

//Create redux store. 
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

//Start sagas.
sagaMiddleware.run(watchAuth);

//Wrap the app with Custom MUI theme and React Router V4.
const app = (
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MuiThemeProvider>
);

//Embed the react app in the index.html by warpping with redux provider.
ReactDOM.render(<Provider store={store}>{app}</Provider>, document.getElementById('root'));

// Export redux store
export { store };