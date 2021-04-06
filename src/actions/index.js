// //action is just a simple js object

// {
//     type: "INCREASE_COUNT "
// }

//action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_TO_FAVOURITES = "SET_TO_FAVOURITES";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT= "ADD_SEARCH_RESULT";

//action creaters
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFavourites(movie) {
  return {
    type: ADD_TO_FAVOURITES,
    movie,
  };
}
export function removeFavourite(movie) {
  return {
    type: REMOVE_FROM_FAVOURITES,
    movie,
  };
}

export function setToFavourites(val) {
  return {
    type: SET_TO_FAVOURITES,
    val,
  };
}
export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}
export function handleMovieSearch(movie) {
  const url = `http://www.omdbapi.com/?apikey=56a95919&t=${movie}`;

  //previously we retunrted an object but here we're returning a function 
  //so we'll use a middleware called thunk
  //this middleware will call the fn if the return type is a fn, i.e. below one
  //else nothing
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => dispatch(addMovieSearchResult(movie)));

      //dispatch an action
      // console.log("*****************%^&*()**********",movie);
      

  };
}
export function addMovieSearchResult(movie){
  return {
    type: ADD_SEARCH_RESULT,
    movie
  }
}