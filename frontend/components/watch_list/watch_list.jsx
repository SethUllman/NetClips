import React from 'react';
import {MovieItem} from '../movies/movie_item';
import movieFocus from '../movies/movie_focus';
import { FaCheck } from 'react-icons/fa';


class WatchList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentMovie: false
    }
    this.placeFocus = this.placeFocus.bind(this);
    this.updateList = this.updateList.bind(this);
    this.hideResults = this.hideResults.bind(this);
    this.listButtonText = this.listButtonText.bind(this);
  }

  componentDidMount() {
    this.props.fetchWatchList(this.props.currentUser);
  }

  listButtonText() {
    let found = false;
    let i = 0;
    while (!found && i < 51) {
      let list = this.props.state.watchList[i];
      if (list && (list.title === this.state.currentMovie.title)) {
        found = true;
      }
      i++
    }
    if (found) {
      return <button className='in-list' onClick={() => { this.updateList() }}><FaCheck />MY LIST</button>
    } else {
      return <button className='add-list' onClick={() => { this.updateList() }}>+ MY LIST</button>;
    }
  }

  updateList() {
    let found = false;
    let i = 0;
    
    let current = this.state.currentMovie;
    while (!found && i < this.props.state.watchList.length) {
      let list = this.props.state.watchList[i];
      if (list.title === current.title) {
        found = true;
        this.props.deleteWatchList(current.id);
      }
      i++
    }
    if (!found) {

      this.props.addWatchList(current);
    }
    

  }

  placeFocus(list) {
    let found = false;
    list.forEach( (movie) => {
      if (movie.props.movie === this.state.currentMovie){
        found = true;
      }
    });
    if (found){
      return movieFocus(this.state.currentMovie, this);
    }
  }

  hideResults() {
    this.setState({ currentMovie: null });
  }

  render() {
    const watchList = this.props.state.watchList;
    const movieList = [];
    for (let [key, value] of Object.entries(watchList)) {
      movieList.push(
        
          <MovieItem
            key={value.id}
            movie={value}
            that={this}
            state={this.state}
          />
        
      )
    }  

    let list1 = movieList.splice(0, 6);
    let list2 = movieList.splice(0, 6);
    let list3 = movieList.splice(0, 6);
    let list4 = movieList.splice(0, 6);
    let list5 = movieList.splice(0, 6);
    let list6 = movieList.splice(0, 6);

    return (
      <div className='watchList'>
        <div className='watch-movies'>
          <ul className='movie-ul'>
            <div className='watch-lis'>
              {list1}
            </div>
          </ul>
          {this.placeFocus(list1)}
          <ul className='movie-ul'>
            <div className='watch-lis'>
              {list2}
            </div>
          </ul>
          {this.placeFocus(list2)}
          <ul className='movie-ul'>
            <div className='watch-lis'>
              {list3}
            </div>
          </ul>
          {this.placeFocus(list3)}
          <ul className='movie-ul'>
            <div className='watch-lis'>
              {list4}
            </div>
          </ul>
          {this.placeFocus(list4)}
          <ul className='movie-ul'>
            <div className='watch-lis'>
              {list5}
            </div>
          </ul>
          {this.placeFocus(list5)}
          <ul className='movie-ul'>
            <div className='watch-lis'>
              {list6}
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default WatchList;