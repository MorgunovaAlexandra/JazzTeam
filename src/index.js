import React, { createContext} from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './store/UserStore';
 export const Context=createContext()
ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);


reportWebVitals();
