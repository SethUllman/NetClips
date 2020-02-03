import React from 'react';
import {MovieItem} from './movie_item.jsx';
import movieFocus from './movie_focus';
import ReactPlayer from 'react-player';
import { FaCheck } from 'react-icons/fa';

class movieIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movies: this.props.movies,
      currentMovie: null,
      watchList: this.props.watchList,
    }

    
    this.handlePlay = this.handlePlay.bind(this);
    this.PlayFeatured = this.PlayFeatured.bind(this);
    this.hideResults = this.hideResults.bind(this);
    this.listButtonText = this.listButtonText.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  listButtonText(featured = false) {

    let found = false;
    let i = 0;
    while (!found && i < this.props.watchList.length) {
      let list = this.props.watchList[i];
      if (featured){
        if (list.title.includes('Sonic')){
          return <button className='featured-in-list' onClick={() => {this.updateList(true)}}><FaCheck />MY LIST</button>
        } else {
          return <button className='featured-add-list' onClick={() => {this.updateList(true)}}>+ MY LIST</button>;
        }
      }
      if (list.title === this.state.currentMovie.title){
        found = true;
      }
      i++
    }
    if (found){
      return <button className='in-list' onClick={() => {this.updateList()}}><FaCheck/>MY LIST</button>
    } else {
      return <button className='add-list' onClick={() => {this.updateList()}}>+ MY LIST</button>;
    }
  }

  updateList(featured = false){
    let found = false;
    let i = 0;
    if (featured){
      while (!found && i < this.props.watchList.length) {
        let list = this.props.watchList[i];
        debugger;
        if (list.title.includes('Sonic') && featured === true){
          found = true;
          this.props.deleteWatchList(current.id);
        }
        i++
      }
      if (!found){
        this.props.addWatchList(Object.values(this.state.movies)[0]);
      }
    } else {
      let current = this.state.currentMovie;
      while (!found && i < this.props.watchList.length) {
        let list = this.props.watchList[i];
        if (list.title === current.title){
          found = true;
          this.props.deleteWatchList(current.id);
        }
        i++
      }
      if (!found){
        this.props.addWatchList(current);
      }
    }
    
  }

  componentDidMount() {
    this.props.fetchMovies();
    this.props.fetchWatchList();
  }

  handlePlay(e) {
    e.preventDefault();
    const movie = this.state.currentMovie;
    this.props.history.push(`/movies/${movie.id}`);
  }

  PlayFeatured() {
    const movie = this.props.movies[0];
    this.props.history.push(`/movies/${movie.id}`);
  }

  hideResults() {
    this.setState({ currentMovie: null });
  }

  currentPos(genre) {
    if (this.state.currentMovie && this.state.currentMovie.genres === genre){
      return movieFocus(this.state.currentMovie, this);
    }
  }

  render(){
    let tv_comedy = this.props.movies.filter( (movie) => {
      return movie.genres === 'TV Comedy';
    }).splice(0, 6);

    let sci_fi = this.props.movies.filter( (movie) => {
      return movie.genres === 'Sci-Fi & Fantasy';
    }).splice(0, 6);

    let drama = this.props.movies.filter((movie) => {
      return movie.genres === 'Drama';
    }).splice(0, 6);

    let acclaimed = this.props.movies.filter((movie) => {
      return movie.genres === 'Critically Acclaimed';
    }).splice(0, 6);
    
    const featureMovie = <ReactPlayer
      id='featured-movie-id'
      className='featured-movie'
      url='https://vimeo.com/372833024'
      playing={true}
      controls={false}
      width={'100%'}
      height={'65vw'}
      loop={true}
      volume={0}
      muted={true}
    />

    return (
      <div className='movies-index-div'>
        <div className='featured-movie-div'>
          <div className='featured-movie-info'>
            <div className='featured-movie-title-div'>
              <div className='featured-movie-title'></div>
            </div>
            <div className='featured-movie-buttons-div'>
              <div className='featured-movie-buttons'>
                <button
                  className='featured-play-btn'
                  onClick={ this.PlayFeatured }>Play</button>
                {this.listButtonText(true)}
              </div>
              
            </div>
          </div>
          <div className='featured-rating-div'>
            <p className='featured-rating'>PG</p>
          </div>
          {featureMovie}
        </div>
        <div className='movie-uls'>
        <div className='genre-div'>
          
          <ul className='movie-ul'>
            <div>
              <h3 className='genre-title'>TV Comedy</h3>
            </div>
            <div className='movie-lis'>
            {
              tv_comedy.map( movie => (
                <MovieItem
                key={movie.id}
                movie={movie}
                that={this}
                state={this.state}
                />
              ))
            }
            </div>
          </ul>
          <div>
            {this.currentPos('TV Comedy')}
          </div>
        </div>
        <div className='genre-div'>
          <ul className='movie-ul'>
            <div>
              <h3 className='genre-title'>Sci-Fi & Fantasy</h3>
            </div>
            <div className='movie-lis'>
              {
                sci_fi.map(movie => (
                  <MovieItem
                    key={movie.id}
                    movie={movie}
                    that={this}
                    state={this.state}
                  />
                ))
              }
            </div>
          </ul>
          <div>
            {this.currentPos('Sci-Fi & Fantasy')}
          </div>
        </div>
        <div className='genre-div'>
          <ul className='movie-ul'>
            <div>
              <h3 className='genre-title'>Drama</h3>
            </div>
            <div className='movie-lis'>
              {
                drama.map(movie => (
                  <MovieItem
                    key={movie.id}
                    movie={movie}
                    that={this}
                    state={this.state}
                  />
                ))
              }
            </div>
          </ul>
          <div>
            {this.currentPos('Drama')}
          </div>
        </div>
        <div className='genre-div'>
          <ul className='movie-ul'>
            <div>
              <h3 className='genre-title'>Critically Acclaimed</h3>
            </div>
            <div className='movie-lis'>
              {
                acclaimed.map(movie => (
                  <MovieItem
                    key={movie.id}
                    movie={movie}
                    that={this}
                    state={this.state}
                  />
                ))
              }
            </div>
          </ul>
          <div>
            {this.currentPos('Critically Acclaimed')}
          </div>
        </div>
        </div>
      </div>
    );
  }
  
}

export default movieIndex;