import React from 'react';
import {MovieItem} from './movie_item.jsx';


class movieIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movies: this.props.movies,
      showResults: false,
      currentMovie: null
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
    const MovieShow = (this.state.showResults) ? (
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

    
    

    return (
      <div>
        <div className='genre-div'>
          <h3 className='genre-title'>Comedy</h3>
          <ul className='movie-ul'>
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
          </ul>
            {
              if(this.state.currentMovie.genres.inlcudes('TV Comedy')){
                r
              }
            }
          <div>
            
          </div>
        </div>
        <ul className='movie-ul'>
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
        <div>
          {MovieShow}
        </div>
        
      </div>
    );
  }
}

export default movieIndex;