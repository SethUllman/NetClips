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
    // // debugger;
    // const movieList = (
    //   <ul>
    //     {
    //       watchList.map(movie => (
    //         <MovieItem
    //           key={movie.id}
    //           movie={movie}
    //           that={this}
    //           state={this.state}
    //         />
    //       ))
    //     }
    //   </ul>
    // );
    return (
      <div className='watchList'>
        <div className='watch-movies'></div>
      </div>
    )
  }
}

export default WatchList;