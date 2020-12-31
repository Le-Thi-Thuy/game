import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router } from "react-router-dom";
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';
// import reducers from './store/reducers';
import store from './store/store';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();

// export const history = createBrowserHistory();
// const composeEnhancers =
//     typeof window === 'object' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//             // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//         }) : compose;

// const enhancer = composeEnhancers(
//     (applyMiddleware(routerMiddleware(history), thunk))
//     // other store enhancers if any
// );
// const store = createStore(reducers(history), enhancer);

// ReactDOM.render(<Provider store={store}>
//     <ConnectedRouter history={history}>
//         <Route component={App} />
//     </ConnectedRouter>
// </Provider>
//     , document.getElementById('root'));

// serviceWorker.unregister();
