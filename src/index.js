// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './App';
import ErrorBoundary from './ErrorBoundary';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </Router>
    </Provider>,
    document.getElementById('root')
);
