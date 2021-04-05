// //action is just a simple js object

// {
//     type: "INCREASE_COUNT "
// }

//action types
export const ADD_MOVIES ="ADD_MOVIES";

//action creaters
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies
      }
}