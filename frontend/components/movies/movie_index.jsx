import React from 'react';
import {MovieItem} from './movie_item.jsx';
import ReactPlayer from 'react-player';
// import MoviePlayer from './movie_player.jsx';
// import YouTube from 'react-youtube';



class movieIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movies: this.props.movies,
      showResults: false,
      currentMovie: null,
    }
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  handlePlay(e) {
    e.preventDefault();
    const movie = this.state.currentMovie;
    this.props.fetchMovie(currentMovie);
  }

  render(){
    
    const { movies } = this.props;
    this.MovieShow1 = (this.state.showResults) ? (
      <div className='drop-content'>
        <div className='drop-background'>
          <div className='left'></div>
          <div className='right'></div>
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
            <button 
              className='play-btn'
              onClick={this.handlePlay}>PLAY</button>
            <button className='add-list'>+MY LIST</button>
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

    
    

    return (
      <div className='movies-index-div'>
        <div className='featured-movie-div'>
          <div className='featured-movie-info'>
            <div className='movie-title-div'>
              <h1 className='movie-title'>Sonic</h1>
            </div>
          </div>
          <ReactPlayer 
            className='featured-movie'
            url='https://www.youtube.com/watch?v=SXDa8i75PpM'
            playing={true}
            controls={false}
            width={'100%'}
            height={'55vw'}
            loop={true}
            volume={0}
            muted={true}
          />
        </div>
        <div className='genre-div'>
          
          <ul className='movie-ul'>
            <div>
              <h3 className='genre-title'>TV Comedy</h3>
            </div>
            <div className='movie-lis'>
            {
              movies.map( movie => (
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
                movies.map(movie => (
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
                movies.map(movie => (
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
                movies.map(movie => (
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