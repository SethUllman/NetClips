import React, { Component } from 'react';
import VideoPlayer from 'react-video-markers';

class MoviePlayer extends Component {
  state = {
    isPlaying: false,
    volume: 0.7
  };

  handlePlay = () => {
    this.setState({ isPlaying: true });
  };

  handlePause = () => {
    this.setState({ isPlaying: false });
  };

  handleVolume = value => {
    this.setState({ volume: value });
  };

  render() {
    const { isPlaying, volume } = this.state;

    return <VideoPlayer
      url="https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4"
      isPlaying={isPlaying}
      volume={volume}
      onPlay={this.handlePlay}
      onPause={this.handlePause}
      onVolume={this.handleVolume}
    />
  }
}

export default MoviePlayer;