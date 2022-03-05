import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import jobReducer from '../src/reducer/jobReducer'
import App from './App';

import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './store/reducer/rootReducer';
import thunk from 'redux-thunk'

const store = createStore(reducer,  compose(
  applyMiddleware(thunk)
)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
