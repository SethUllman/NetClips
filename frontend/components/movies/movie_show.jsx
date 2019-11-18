import React from 'react';
import ReactPlayer from 'react-player'

class MovieShow extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const {title} = this.props
    return (
      <div>
        <ReactPlayer 
          className='movie-player'
          url='https://vimeo.com/166667471'
          playing 
          width='100%'
          height='100%'
        />
      </div>
    )
  }
}

export default MovieShow;