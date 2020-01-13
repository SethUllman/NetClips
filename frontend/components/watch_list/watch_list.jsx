import React from 'react';

class WatchList extends React.Component {
  constructor(props){
    debugger;
    super(props);
  }

  componentDidMount() {
    debugger;
    this.props.fetchWatchList(currentUser.id);
  }

  render() {
    const { movies } = this.props;
    return (
      <div className='watchList'>
        <h1 className='watch-movies'>{movies}</h1>
      </div>
    )
  }
}

export default WatchList;