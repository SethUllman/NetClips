import React from 'react';
let MovieItem = ({ movie, that}) => {
  
  const liStyle = {
    backgroundImage: `url(${movie.image_url})`,
    backgroundSize: 'cover',
    position: 'relative'
  }
 
  return (
    <li key={movie.id} className='movie-li'>
      <div className='movie-li-content' style={liStyle}>
        {/* <h2 className='movie-li-title'>{movie.title}</h2> */}
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