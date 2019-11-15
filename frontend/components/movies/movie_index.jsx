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

  render(){
    
    const { movies } = this.props;
    const MovieShow = (this.state.showResults) ? (
      <div className='drop-content'>
        <div className='drop-background'>
          <div className='left'>left</div>
          <div className='right'>right</div>
        </div>
        <div className='drop-content-container'>
          <h1>{this.state.currentMovie.title}</h1>
          <h2>{this.state.currentMovie.maturity_rating}</h2>
          <p>{this.state.currentMovie.description}</p>
          <div>
            <button className='play-btn'>▶ PLAY</button>
            <button className='add-list'>➕ MY LIST</button>
          </div>
          <div>
            <h3>Staring: </h3>
            <p>{this.state.currentMovie.cast}</p>
          </div>
          <div>
            <h3>Genres: </h3>
            <p>{this.state.currentMovie.genres}</p>
          </div>
        </div>
      </div>
    ) : (
      <div></div>
    );

    
    

    return (
      <div>
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
        <div>
          {MovieShow}
        </div>
        
      </div>
    );
  }
}

export default movieIndex;