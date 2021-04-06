import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

//curried form of function(obj,next,action)
// const logger =function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       // middleware code
//       console.log("ACTION_TYPE",action.type);
//       next(action);
//     }
//   }
// }

const logger = ({ dispatch, getState }) => (next) => (action) => {
  if(typeof(action)!=="function")
    console.log("ACTION_TYPE", action.type);
  next(action);
};
//thunk is present in redux therefore importing it npm i redux-thunk
//thunk is a fn that returns a fn
// const thunk = ({ dispatch, getState }) => (next) => (action) => {

//   //in fetch api
//   if(typeof(action)==="function"){
//     action(dispatch);
//     return;
//   }
//   next(action);
// };
const store = createStore(rootReducer, applyMiddleware(logger,thunk));

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{name: 'Superman'}]
// })
// console.log(store.getState());

ReactDOM.render(<App store={store} />, document.getElementById("root"));
