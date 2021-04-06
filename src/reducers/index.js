import { ADD_MOVIES, ADD_TO_FAVOURITES,REMOVE_FROM_FAVOURITES,SET_TO_FAVOURITES,ADD_SEARCH_RESULT,ADD_MOVIE_TO_LIST} from "../actions/index";
import {combineReducers} from 'redux';
import { act } from "react-dom/test-utils";

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false
};

export function movies(state = initialMoviesState, action) {
  // if(action.type===ADD_MOVIES){
  //     return {
  //         ...state,
  //         list: action.movies
  //     };
  // }
  // return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

      case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites]
      };

      case REMOVE_FROM_FAVOURITES:
        const filteredArray= state.favourites.filter(movie=> movie.Title!==action.movie.Title);
        return {
          ...state,
          favourites:filteredArray
        };
      case SET_TO_FAVOURITES:
        return {
          ...state,
          showFavourites:action.val
        };

        case ADD_MOVIE_TO_LIST:
          return {
            ...state,
            list: [action.movie, ...state.list]
          }
      

      default:
          return state;
  }
}

const initialSearchState= {
  result: {},
  showSearchResults: false
}
export function search(state= initialSearchState, action){
  switch(action.type){
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults:true
      }

      case ADD_MOVIE_TO_LIST:
          return {
            ...state,
            showSearchResults:false
          }
    default:
      return state;
  }

}
// const initialRootState={
//   movies: initialMoviesState,
//   search: initialSearchState
// }
// export default function rootReducer(state=initialRootState,action){
//   return {
//     movies: movies(state.movies,action),
//     search: search(state.search,action)
//   }
// }


//alternatinve to the above way:
export default combineReducers({
  movies,
  search
})