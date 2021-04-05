import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers';


const store=createStore(movies);

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{name: 'Superman'}]
// })
// console.log(store.getState());


ReactDOM.render(<App store={store}/>,
  document.getElementById('root')
);
