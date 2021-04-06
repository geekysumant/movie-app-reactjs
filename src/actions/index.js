// //action is just a simple js object

// {
//     type: "INCREASE_COUNT "
// }

//action types
export const ADD_MOVIES ="ADD_MOVIES";
export const ADD_TO_FAVOURITES ="ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES ="REMOVE_FROM_FAVOURITES";
export const SET_TO_FAVOURITES ="SET_TO_FAVOURITES";


//action creaters
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies
      }
}

export function addFavourites(movie){
  return {
      type: ADD_TO_FAVOURITES,
      movie
    }
}
export function removeFavourite(movie){
  return {
      type: REMOVE_FROM_FAVOURITES,
      movie
    }
}

export function setToFavourites(val){
  return {
      type: SET_TO_FAVOURITES,
      val
    }
}