import React from 'react';

class movieIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  render(){
    return (
      <div>Movies!</div>
    )
  }
}

export default movieIndex;