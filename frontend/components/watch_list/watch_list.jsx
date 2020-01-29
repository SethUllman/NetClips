import React from 'react';
import {MovieItem} from '../movies/movie_item';

class WatchList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchWatchList(this.props.currentUser);
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
    console.log(movieList);
  
    return (
      <div className='watchList'>
        <div className='watch-movies'>{movieList}</div>
      </div>
    )
  }
}

export default WatchList;