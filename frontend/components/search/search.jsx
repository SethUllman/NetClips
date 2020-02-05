import React from 'react';
import { MovieItem } from '../movies/movie_item';
import movieFocus from '../movies/movie_focus';
import { FaCheck } from 'react-icons/fa';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: ""
    }

    this.searchResults = this.searchResults.bind(this);
    this.checkSearch = this.checkSearch.bind(this);
    this.placeFocus = this.placeFocus.bind(this);
    this.updateList = this.updateList.bind(this);
    this.hideResults = this.hideResults.bind(this);
    this.listButtonText = this.listButtonText.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.listPlacement = this.listPlacement.bind(this);
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
    return ({titles: titles, people: people});
  }

  handlePlay(e) {
    e.preventDefault();
    const movie = this.state.currentMovie;
    this.props.history.push(`/movies/${movie.id}`);
  }

  listButtonText() {
    let found = false;
    let i = 0;
    while (!found && i < 51) {
      let list = this.props.state.watchList[i];
      if (list && (list.title === this.state.currentMovie.title)) {
        found = true;
      }
      i++
    }
    if (found) {
      return <button className='in-list' onClick={() => { this.updateList() }}><FaCheck />MY LIST</button>
    } else {
      return <button className='add-list' onClick={() => { this.updateList() }}>+ MY LIST</button>;
    }
  }

  updateList() {
    let found = false;
    let i = 0;

    let current = this.state.currentMovie;
    while (!found && i < this.props.state.watchList.length) {
      let list = this.props.state.watchList[i];
      if (list.title === current.title) {
        found = true;
        this.props.deleteWatchList(current.id);
      }
      i++
    }
    if (!found) {

      this.props.addWatchList(current);
    }


  }

  placeFocus(list) {
    let found = false;
    list.forEach((movie) => {
      if (movie.props.movie === this.state.currentMovie) {
        found = true;
      }
    });
    if (found) {
      return movieFocus(this.state.currentMovie, this);
    }
  }

  hideResults() {
    this.setState({ currentMovie: null });
  }

  listPlacement(list) {
    if (list.length > 0) {
      return list;
    } else {
      return <div></div>
    }
  }

  render(){

    const results = this.searchResults();
    const movies = results.movies;
    const people = results.people;

    const movieList = [];
    for (let [key, value] of Object.entries(movies)) {
      movieList.push(

        <MovieItem
          key={value.id}
          movie={value}
          that={this}
          state={this.state}
        />

      )
    }

    let list1 = movieList.splice(0, 6);
    let list2 = movieList.splice(0, 6);
    let list3 = movieList.splice(0, 6);
    let list4 = movieList.splice(0, 6);
    let list5 = movieList.splice(0, 6);
    let list6 = movieList.splice(0, 6);

    return (
      <div className='search-results'>
        {list1}
      </div>
    )
  }
}

export default Search;