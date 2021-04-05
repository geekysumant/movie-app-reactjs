import {data} from '../data';
import Navbar from './Navbar';
import Moviecard from "./Moviecard";
import {addMovies} from '../actions';
import React from 'react';
class App extends React.Component {

  componentDidMount(){
    //make an api call
    //dispatch the action

    const {store}= this.props;
    store.subscribe(()=>{
      console.log("updated.....");
      this.forceUpdate()
    })
    store.dispatch(addMovies(data));
    console.log(store.getState());
  }
  render(){
      const movies=this.props.store.getState();
      return (
      <div className="App">
        <Navbar/>
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div> 
          </div>
          <div className="list">
            {movies.map((movie,index) => (
              <Moviecard movie={movie} key={`movie-${index}`}/>
            ))}
          </div>
        </div> 
      </div>
  );}
}

export default App;
