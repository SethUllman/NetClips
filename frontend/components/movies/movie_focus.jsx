import React from 'react';
import ReactPlayer from 'react-player';

const movieFocus = (currentMovie, that) => {
  if (currentMovie) {
    return (
      <div className='drop-content'>
        <div className='drop-background'>
          <div className='left'></div>
          <div className='right'>
            <ReactPlayer
              className='drop-movie'
              url={currentMovie.video_url}
              playing={true}
              controls={false}
              width={'68vw'}
              height={'42vw'}
              loop={false}
              volume={0}
              muted={true}
            />
            <div className='right-X' onClick={() => { that.hideResults() }}>X</div>
          </div>
        </div>
        <div className='drop-content-container'>
          <div className='movie-title-div'>
            <h1 className='movie-title'>{currentMovie.title}</h1>
          </div>
          <div className='movie-info-div'>
            <h2 className='movie-year'>{currentMovie.year}</h2>
            <h2 className='movie-rating'>{currentMovie.maturity_rating}</h2>
          </div>
          <div className='movie-description-div'>
            <p className='movie-description'>{currentMovie.description}</p>
          </div>
          <div className='movie-buttons-div'>

            <button
              className='play-btn'
              onClick={that.handlePlay}>PLAY</button>

            {that.listButtonText(false)}
          </div>
          <div className='movie-starring-div'>
            <div className='movie-starring'>
              <p>Starring: </p>
            </div>
            <div className='movie-cast'>
              <p>{currentMovie.cast}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>
  }
}

export default movieFocus;