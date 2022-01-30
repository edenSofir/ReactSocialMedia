import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {UserList} from "./components/UserList";


/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

const domContainer = document.getElementById('root');
ReactDOM.render( React.createElement(UserList , null ), domContainer);
