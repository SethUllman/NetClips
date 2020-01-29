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
    // for (let [key, value] of Object.entries(this.props.state.watchList.list)) {
    //   debugger;
    //   console.log(key, value);
    // }
    return (
      <div className='watchList'>
        <div className='watch-movies'></div>
      </div>
    )
  }
}

export default WatchList;