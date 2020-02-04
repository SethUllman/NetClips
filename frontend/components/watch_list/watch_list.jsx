import React from 'react';
import {MovieItem} from '../movies/movie_item';
import movieFocus from '../movies/movie_focus';

class WatchList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentMovie: false
    }
    this.placeFocus = this.placeFocus.bind(this);
  }

  componentDidMount() {
    this.props.fetchWatchList(this.props.currentUser);
  }

  placeFocus() {
    if (this.state.currentMovie){
      return movieFocus(this.state.currentMovie, this);
    }
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
          {this.placeFocus()}
          <ul className='movie-ul'>
            <div className='watch-lis'>
              {list2}
            </div>
          </ul>
          <ul className='movie-ul'>
            <div className='watch-lis'>
              {list3}
            </div>
          </ul>
          <ul className='movie-ul'>
            <div className='watch-lis'>
              {list4}
            </div>
          </ul>
          <ul className='movie-ul'>
            <div className='watch-lis'>
              {list5}
            </div>
          </ul>
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