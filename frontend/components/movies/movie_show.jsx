import React from 'react';
import { Redirect } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { FaArrowLeft } from 'react-icons/fa';

class MovieShow extends React.Component{
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
  }
  

  componentDidMount() {
    let movie = { id: this.props.match.params.movieId };
    this.props.fetchMovie(movie);
  }

  handleBack() {
    this.props.history.push(`/movies`);
  }

  render() {
    const {movie} = this.props;
    if (!movie) {
      return null;
    }
    return ( 
      <div className='movie-show-div'>
        <ReactPlayer
          className='movie-show'
          url={this.props.movie.video_url}
          playing={true}
          controls={true}
          width={'100%'}
          height={'100%'}
          loop={false}
          volume={0.7}
          muted={false}
        />
        <div className='movie-show-back' onClick={this.handleBack}>
          <FaArrowLeft/>
        </div>
      </div>
    );
  }
}

export default MovieShow;