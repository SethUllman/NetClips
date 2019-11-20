import React from 'react';
import {MovieItem} from './movie_item.jsx';
import ReactPlayer from 'react-player';
// import { Redirect } from 'react-router-dom';

// import MoviePlayer from './movie_player.jsx';
// import YouTube from 'react-youtube';



class movieIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movies: this.props.movies,
      showResults: false,
      currentMovie: this.props.movies[0]
    }
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  handlePlay(e) {
    e.preventDefault();
    const movie = this.state.currentMovie;
    this.props.history.push(`/movies/${movie.id}`);
  }

  render(){
    const tv_comedy = this.props.movies.filter( (movie) => {
      return movie.genres === 'TV Comedy';
    });

    const sci_fi = this.props.movies.filter( (movie) => {
      // debugger;
      return movie.genres === 'Sci-Fi & Fantasy';
    });

    const drama = this.props.movies.filter((movie) => {
      return movie.genres === 'Drama';
    });

    const acclaimed = this.props.movies.filter((movie) => {
      return movie.genres === 'Critically Acclaimed';
    });


    const dropStyle = this.state.currentMovie ? ({
      backgroundImage: `url(${this.state.currentMovie.image_url})`,
      backgroundSize: 'cover',
      width: '70%'
    } ) : null;
    
    const { movies } = this.props;
    this.MovieShow1 = (this.state.showResults) ? (
      
      <div className='drop-content'>
        <div className='drop-background'>
          <div className='left'></div>
          <div className='right' style={dropStyle}>
            <div className='right-X' onClick={() => {
              return (
                this.setState({ showResults: false, currentMovie: this.props.movies[0] })
              )
            }}>X</div>
          </div>
        </div>
        <div className='drop-content-container'>
          <div className='movie-title-div'>
            <h1 className='movie-title'>{this.state.currentMovie.title}</h1>
          </div>
          <div className='movie-info-div'>
            <h2 className='movie-year'>{this.state.currentMovie.year}</h2>
            <h2 className='movie-rating'>{this.state.currentMovie.maturity_rating}</h2>
            <h2 className='movie-seasons'>{this.state.currentMovie.seasons == 0 ? '' : this.state.currentMovie.seasons} </h2>
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
            <div>
              <p>{this.state.currentMovie.cast}</p>
            </div>
          </div>
          <div className='movie-genres-div'>
            <p className='movie-genres'>Genres: </p>
            <p>{this.state.currentMovie.genres}</p>
          </div>
        </div>
      </div>
    ) : (
      <div></div>
    );

    if (this.state.showResults){
      if (this.state.currentMovie.genres === ('Sci-Fi & Fantasy')) {
        this.MovieShow2 = this.MovieShow1;
        this.MovieShow1 = <div></div>;
      } else if(this.state.currentMovie.genres === ('Drama')) {
        this.MovieShow3 = this.MovieShow1;
        this.MovieShow1 = <div></div>
      } else if(this.state.currentMovie.genres === ('Critically Acclaimed')) {
        this.MovieShow4 = this.MovieShow1;
        this.MovieShow1 = <div></div>
      }
    }
    const featureMovie = <ReactPlayer
      id='featured-movie-id'
      className='featured-movie'
      // url={this.state.currentMovie.movie_url}
      url='https://vimeo.com/372833024'
      playing={true}
      controls={false}
      width={'100%'}
      height={'55vw'}
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
                  onClick={ this.handlePlay }>Play</button>
                <button className='featured-add-list'>+My List</button>
              </div>
              
            </div>
          </div>
          <div className='featured-rating-div'>
            <p className='featured-rating'>PG</p>
          </div>
          
          {featureMovie}
        </div>
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
    );
  }
}

export default movieIndex;