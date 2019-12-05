import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
let MovieItem = ({ movie, that}) => {
  
  const liStyle = {
    backgroundColor: 'black',
    background: `url(${movie.image_url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '16vw 9vw',
    // backgroundSize: '16vw 100%',
    backgroundPosition: 'center',
    position: 'absolute'
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
        ><FaChevronDown/></h3>
      </div>
      
    </li>
  );
}

export {MovieItem};