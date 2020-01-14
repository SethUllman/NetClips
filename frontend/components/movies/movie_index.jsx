import React from 'react';
import {MovieItem} from './movie_item.jsx';
import ReactPlayer from 'react-player';

class movieIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movies: this.props.movies,
      showResults: false,
      currentMovie: null
    }
    this.handlePlay = this.handlePlay.bind(this);
    this.PlayFeatured = this.PlayFeatured.bind(this);
    this.hideResults = this.hideResults.bind(this);
  }

  componentDidMount() {
    this.props.fetchMovies();
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
    this.setState({ showResults: false });
  }

  render(){
    let tv_comedy1 = this.props.movies.filter( (movie) => {
      return movie.genres === 'TV Comedy';
    });

    let sci_fi1 = this.props.movies.filter( (movie) => {
      return movie.genres === 'Sci-Fi & Fantasy';
    });

    let drama1 = this.props.movies.filter((movie) => {
      return movie.genres === 'Drama';
    });

    let acclaimed1 = this.props.movies.filter((movie) => {
      return movie.genres === 'Critically Acclaimed';
    });

    let tv_comedy = tv_comedy1.splice(0, 6);
    let sci_fi = sci_fi1.splice(0, 6);
    let drama = drama1.splice(0, 6);
    let acclaimed = acclaimed1.splice(0, 6);

    
    const { movies } = this.props;
    const MovieShow = (this.state.showResults) ? (
      
      <div className='drop-content'>
        <div className='drop-background'>
          <div className='left'></div>
          <div className='right'>
            <ReactPlayer
              className='drop-movie'
              url={this.state.currentMovie.video_url}
              playing={true}
              controls={false}
              width={'68vw'}
              height={'42vw'}
              loop={false}
              volume={0}
              muted={true}
            />
            <div className='right-X' onClick={this.hideResults}>X</div>
          </div>
        </div>
        <div className='drop-content-container'>
          <div className='movie-title-div'>
            <h1 className='movie-title'>{this.state.currentMovie.title}</h1>
          </div>
          <div className='movie-info-div'>
            <h2 className='movie-year'>{this.state.currentMovie.year}</h2>
            <h2 className='movie-rating'>{this.state.currentMovie.maturity_rating}</h2>
          </div>
          <div className='movie-description-div'>
            <p className='movie-description'>{this.state.currentMovie.description}</p>
          </div>
          <div className='movie-buttons-div'>

 {/* ------------------------------- */}
            <button 
              className='play-btn'
              onClick={this.handlePlay}>PLAY</button>
{/* ------------------------------- */}

            <button className='add-list'>+ MY LIST</button>
          </div>
          <div className='movie-starring-div'>
            <div className='movie-starring'>
              <p>Starring: </p>
            </div>
            <div className='movie-cast'>
              <p>{this.state.currentMovie.cast}</p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div></div>
    );
    if (this.state.currentMovie) {
      if (this.state.currentMovie.genres === ('TV Comedy')) {
        this.MovieShow1 = MovieShow;
      } else if (this.state.currentMovie.genres === ('Sci-Fi & Fantasy')) {
        this.MovieShow2 = MovieShow;
      } else if(this.state.currentMovie.genres === ('Drama')) {
        this.MovieShow3 = MovieShow;
      } else if(this.state.currentMovie.genres === ('Critically Acclaimed')) {
        this.MovieShow4 = MovieShow;
      }
    }
    
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
                <button className='featured-add-list'>+My List</button>
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
            {this.MovieShow1}
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
            {this.MovieShow2}
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
            {this.MovieShow3}
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
            {this.MovieShow4}
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default movieIndex;