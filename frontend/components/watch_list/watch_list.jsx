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

  listButtonText(featured) {
    let found = false;
    let i = 0;
    while (!found && i < 51) {
      let list = this.props.watchList[i];
      if (featured) {
        if (list && list.title.includes('Sonic')) {
          return <button className='featured-in-list' onClick={() => { this.updateList(true) }}><FaCheck />MY LIST</button>
        } else {
          return <button className='featured-add-list' onClick={() => { this.updateList(true) }}>+ MY LIST</button>;
        }
      }
      if (list && (list.title === this.state.currentMovie.title)) {
        found = true;
      }
      i++
    }
    if (found) {
      return <button className='in-list' onClick={() => { this.updateList(false) }}><FaCheck />MY LIST</button>
    } else {
      return <button className='add-list' onClick={() => { this.updateList(false) }}>+ MY LIST</button>;
    }
  }

  updateList(featured) {
    let found = false;
    let i = 0;
    if (featured) {
      while (!found && i < this.props.watchList.length) {
        let list = this.props.watchList[i];
        if (list.title.includes('Sonic') && featured === true) {
          found = true;
          this.props.deleteWatchList(list.id);
        }
        i++
      }
      if (!found) {
        this.props.addWatchList(this.props.movies[0]);
      }
    } else {
      let current = this.state.currentMovie;
      while (!found && i < this.props.watchList.length) {
        let list = this.props.watchList[i];
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

  }

  placeFocus() {
    if (this.state.currentMovie){
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