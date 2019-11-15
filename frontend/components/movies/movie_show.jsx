import React from 'react';
import ReactPlayer from 'react-player'

class MovieShow extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='movie-player'>
        <ReactPlayer 
          url='https://www.facebook.com/503756216660301/videos/309656206436820/'
          playing 
          width='100%'
          height='100%'
        />
      </div>
    )
  }
}

export default MovieShow;