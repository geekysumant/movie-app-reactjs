import {data} from '../data';
import Navbar from './Navbar';
import Moviecard from "./Moviecard";
import {addMovies, setToFavourites} from '../actions';
import React from 'react';
import {connect}from "react-redux";

class App extends React.Component {

  componentDidMount(){
    //make an api call
    //dispatch the action

    const {store}= this.props;
    
    this.props.dispatch(addMovies(data));
    
  }
  isFavourite = (movie)=>{
    const {movies}=this.props;
    const index=movies.favourites.indexOf(movie);

    if(index !== -1)
      return true;
    return false;
  }
  showFavourites=(val)=>{
    this.props.dispatch(setToFavourites(val));
  }
  render(){
      const {movies ,search}=this.props;
      console.log("*********************************",search);
      const {list,favourites,showFavourites}=movies;
      const displayMovies= showFavourites ? favourites : list;
      // console.log("RENDER", this.props.store.getState());
     
      return (
      <div className="App">
        <Navbar
          search={search}
        />
        <div className="main">
          <div className="tabs">
            <div className={ `tab ${!showFavourites ? 'active-tabs': '' }`} onClick={()=>{this.showFavourites(false)}} >Movies</div>
            <div className={ `tab ${!showFavourites ? '': 'active-tabs'}` } onClick={()=>{this.showFavourites(true)}} >Favourites</div> 
          </div>
          <div className="list">
            {displayMovies.map((movie,index) => (
              <Moviecard 
                movie={movie}
                key={`movie-${index}`}
                dispatch= {this.props.dispatch}
                isFavourite = {this.isFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length ===0 ? <div className="no-movies">No movie(s) to show.</div> : null }
        </div> 
      </div>
  );}
}

// class AppWrapper extends React.Component{
//   render(){
//     return (
//       <StoreContext.Consumer>
//         {(store)=> <App store={store}/> }
//       </StoreContext.Consumer>
//     )
//   }
// }
function mapStateToProps(state)
{
    return {
        movies: state.movies,
        search: state.search
    }
}

const ConnectedAppComponent = connect(mapStateToProps)(App);

export default ConnectedAppComponent;