import React from 'react';
let MovieItem = ({ movie, that}) => {
  return (
    <li key={movie.id} className='movie-li'>
      <div className='movie-li-content'>
        <h2>{movie.title}</h2>
        <h3 
          className='content-drop' 
          key={`btn-${movie.id}`}
          onClick={() => {
            return (
              that.setState({showResults: true, currentMovie: movie})
            )
          }}
        >▼</h3>
      </div>
      
    </li>
  );
}

export {MovieItem};