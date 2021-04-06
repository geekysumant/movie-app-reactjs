import React from "react";

import {addFavourites, removeFavourite} from '../actions';

class Moviecard extends React.Component {

  handleFavouriteClick =()=>{
    const {movie}= this.props;
    this.props.dispatch(addFavourites(movie));
  }

  handleUnfavouriteClick=()=>{
    const {movie}= this.props;
    this.props.dispatch(removeFavourite(movie));
  }


  render() {
      const {movie,isFavourite}=this.props;
    return (
      <div className="movie-card">
          <div className="left">
              <img alt="movie-poster" src={movie.Poster}/>
          </div>

          <div className="right">
            <div className="title">{movie.Title}</div>
            <div className="plot">{movie.Plot}</div>
            <div className="footer">
                <div className="rating">{movie.imdbRating}</div>
                {
                  isFavourite ? 
                  <button className="unfavourite-btn" onClick={this.handleUnfavouriteClick}> Un-favourite</button> 
                  :
                  <button className="favourite-btn" onClick={this.handleFavouriteClick}> Favourite</button> 

                }
            </div>
          </div>
      </div>  
    );
  }
}

export default Moviecard;
