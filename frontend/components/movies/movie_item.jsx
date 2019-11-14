import React from 'react';

export default ({ movie }) => {
  return (
    <li key={movie.id} className='movie-li'>
      <h2 className='movie-li-content'>{movie.title}</h2>
      <button className="arrow down"></button>
    </li>
  );
}