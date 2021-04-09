import { data } from "../data";
import Navbar from "./Navbar";
import Moviecard from "./Moviecard";
import { addMovies, setToFavourites } from "../actions";
import React from "react";
import { StoreContext } from "../index";
class App extends React.Component {
  componentDidMount() {
    //make an api call
    //dispatch the action

    const { store } = this.props;
    store.subscribe(() => {
      console.log("updated.....");
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
    console.log(store.getState());
  }
  isFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);

    if (index !== -1) return true;
    return false;
  };
  showFavourites = (val) => {
    this.props.store.dispatch(setToFavourites(val));
  };
  render() {
    // const { movies, search } = this.props.store.getState();
    // console.log("*********************************", search);
    const { list, favourites, showFavourites } = movies;
    const displayMovies = showFavourites ? favourites : list;
    // console.log("RENDER", this.props.store.getState());

    return (
      <StoreContext.Consumer>
        {(store) => {
          return (
            <div className="App">
              <Navbar dispatch={store.dispatch} search={search} />
              <div className="main">
                <div className="tabs">
                  <div
                    className={`tab ${!showFavourites ? "active-tabs" : ""}`}
                    onClick={() => {
                      this.showFavourites(false);
                    }}
                  >
                    Movies
                  </div>
                  <div
                    className={`tab ${!showFavourites ? "" : "active-tabs"}`}
                    onClick={() => {
                      this.showFavourites(true);
                    }}
                  >
                    Favourites
                  </div>
                </div>
                <div className="list">
                  {displayMovies.map((movie, index) => (
                    <Moviecard
                      movie={movie}
                      key={`movie-${index}`}
                      dispatch={this.props.store.dispatch}
                      isFavourite={this.isFavourite(movie)}
                    />
                  ))}
                </div>
                {displayMovies.length === 0 ? (
                  <div className="no-movies">No movie(s) to show.</div>
                ) : null}
              </div>
            </div>
          );
        }}
      </StoreContext.Consumer>
    );
  }
}

export default App;
