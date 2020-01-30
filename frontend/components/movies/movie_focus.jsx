import React from 'react';

const movieFocus = (currentMovie, that) => {
  
  return (
  <div className='drop-content'>
    <div className='drop-background'>
      <div className='left'></div>
      <div className='right'>
        <ReactPlayer
          className='drop-movie'
          url={this.state.currentMovie.video_url}
          playing={true}
          controls={false}
          width={'68vw'}
          height={'42vw'}
          loop={false}
          volume={0}
          muted={true}
        />
        <div className='right-X' onClick={() => { this.hideResults() }}>X</div>
      </div>
    </div>
    <div className='drop-content-container'>
      <div className='movie-title-div'>
        <h1 className='movie-title'>{this.state.currentMovie.title}</h1>
      </div>
      <div className='movie-info-div'>
        <h2 className='movie-year'>{this.state.currentMovie.year}</h2>
        <h2 className='movie-rating'>{this.state.currentMovie.maturity_rating}</h2>
      </div>
      <div className='movie-description-div'>
        <p className='movie-description'>{this.state.currentMovie.description}</p>
      </div>
      <div className='movie-buttons-div'>

        <button
          className='play-btn'
          onClick={this.handlePlay}>PLAY</button>

        {this.listButtonText()}
      </div>
      <div className='movie-starring-div'>
        <div className='movie-starring'>
          <p>Starring: </p>
        </div>
        <div className='movie-cast'>
          <p>{this.state.currentMovie.cast}</p>
        </div>
      </div>
    </div>
  </div>
   
  );
}

export default movieFocus;