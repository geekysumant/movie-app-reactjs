import React  from "react";
import ReactDOM from "react-dom";
import {applyMiddleware,createStore } from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux"


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
  if (typeof action !== "function") console.log("ACTION_TYPE", action.type);
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
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// export const StoreContext = createContext();

// ########### PROVIDER IS ALSO BUILT IN ############

// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{name: 'Superman'}]
// })
// console.log(store.getState());





// ************** REACT HAS THIS CONNECT ALREADY BUILT IN, IN PACKAGE REACT-REDUX************

// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props){
//         super(props);
        
//         this.unsubscribe=this.props.store.subscribe(() => this.forceUpdate())
//       }
//       componentWillUnmount(){
//         this.unsubscribe();
//       }

//       render()
//             {
//                 const { store } = this.props;
//                 const state = store.getState();
//                 const dataToBePassedAsProps = callback(state);
//                 return (<Component
//                     {...dataToBePassedAsProps}
//                     dispatch={store.dispatch}
//                 />);
//             }
//     };
//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return <StoreContext.Consumer>
//             {(store) => <ConnectedComponent store={store} />}
//           </StoreContext.Consumer>
        
//       }
//     };
//     return ConnectedComponentWrapper;
//   };
// }





ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
