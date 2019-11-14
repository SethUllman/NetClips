import React from 'react';
import MovieItem from './movie_item.jsx';


class movieIndex extends React.Component{
  constructor(props){
    super(props);
    
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  render(){
    const { movies } = this.props;


    return (
      <div>
        <ul className='movie-ul'>
          {
            movies.map( movie => (
              <MovieItem
              key={movie.id}
              movie={movie}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default movieIndex;