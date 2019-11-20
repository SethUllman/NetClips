import React from 'react';
import { Redirect } from 'react-router-dom'
import ReactPlayer from 'react-player'

class MovieShow extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let movie = { id: this.props.match.params.movieId };
    this.props.fetchMovie(movie);
  }

  render() {
    console.log(this.props);
    const {movie} = this.props;
    debugger;
    if (!movie) {
      return null;
    }
    return ( 
      <div className='movie-show-div'>
        <ReactPlayer
          className='movie-show'
          url={this.props.movie.video_url}
          // url='https://www.youtube.com/watch?v=JvV640xrJ28'
          playing={true}
          controls={true}
          width={'100%'}
          height={'100%'}
          loop={false}
          volume={0.7}
          muted={false}
        />
        <div className='movie-show-back'>
          Back
        </div>
      </div>
    );
  }
}

export default MovieShow;