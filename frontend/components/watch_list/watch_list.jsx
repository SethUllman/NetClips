import React from 'react';
import {MovieItem} from '../movies/movie_item';

class WatchList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchWatchList(currentUser.id);
  }

  render() {
    const { movies } = this.props;
    const movieList = (
      <ul>
        {
          movies.map(movie => (
            <MovieItem
              key={movie.id}
              movie={movie}
              that={this}
              state={this.state}
            />
          ))
        }
      </ul>
    );
      
    
    return (
      <div className='watchList'>
        <div className='watch-movies'>{movieList}</div>
      </div>
    )
  }
}

export default WatchList;