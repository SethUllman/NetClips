import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: ""
    }

    this.searchResults = this.searchResults.bind(this);
    this.filteredResults = this.filteredResults.bind(this);
    this.checkSearch = this.checkSearch.bind(this);
  }

  componentDidMount(){
    this.props.fetchMovies();
    this.props.fetchWatchList();
    this.checkSearch();

  }

  checkSearch(){
    const searchCheck = setInterval( () => {
      if ( this.state.search != window.search ){
        this.setState({search: window.search});
      }
    }, 100);
  }

  searchResults() {
    let titles = [];
    let people = [];
    for (let i = 0; i <= 25; i++){
      let current = this.props.movies[i];
      if (current && (current.title.toLowerCase().includes(this.state.search.toLowerCase()))){
        titles.push(current);
      }
      if (current && (current.cast.toLowerCase().includes(this.state.search.toLowerCase())) || (current.director.toLowerCase().includes(this.state.search.toLowerCase()))){
        people.push(current);
      }
    }
    this.filteredResults(titles, people);
  }

  filteredResults(titles, people) {
    console.log(titles);
    console.log(people);
  }

  render(){
    return (
      <div className='search-results'>
        {this.searchResults()}
      </div>
    )
  }
}

export default Search;