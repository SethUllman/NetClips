import React from 'react';
import { MovieItem } from '../movies/movie_item';
import movieFocus from '../movies/movie_focus';
import { FaCheck } from 'react-icons/fa';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: "",
      currentMovie: false
    }

    this.titleResults = this.titleResults.bind(this);
    this.peopleResults = this.peopleResults.bind(this);
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

  titleResults() {
    let titles = [];
    for (let i = 0; i <= 25; i++){
      let current = this.props.movies[i];
      if (current && (current.title.toLowerCase().includes(this.state.search.toLowerCase()))){
        titles.push(current);
      }
      
    }
    return titles;
  }

  peopleResults() {
    let people = [];
    for (let i = 0; i <= 25; i++) {
      let current = this.props.movies[i];

      if (current && (current.cast.toLowerCase().includes(this.state.search.toLowerCase()))) {
        people.push(current);
      }
    }
    return people;
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
      let list = this.props.watchList[i];
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
    while (!found && i < this.props.watchList.length) {
      let list = this.props.watchList[i];
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

    const movies = this.titleResults();
    const people = this.peopleResults();

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

    const peopleList = [];
    for (let [key, value] of Object.entries(people)) {
      peopleList.push(

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
    
    let list5 = peopleList.splice(0, 6);
    let list6 = peopleList.splice(0, 6);
    let list7 = peopleList.splice(0, 6);
    let list8 = peopleList.splice(0, 6);

    return (
      <div className='search-results'>
        <div className='watch-movies'>
          <ul className='movie-ul'>
          <div className='search-title'>
            Titles
          </div>
            <div className='watch-lis'>
              {this.listPlacement(list1)}
            </div>
          </ul>
          {this.placeFocus(list1)}
          <ul className='movie-ul'>
            <div className='watch-lis'>
              {this.listPlacement(list2)}
            </div>
          </ul>
          {this.placeFocus(list2)}
          <ul className='movie-ul'>
            <div className='watch-lis'>
              {this.listPlacement(list3)}
            </div>
          </ul>
          {this.placeFocus(list3)}
          <ul className='movie-ul'>
            <div className='watch-lis'>
              {this.listPlacement(list4)}
            </div>
          </ul>
          {this.placeFocus(list4)}
          <ul className='movie-ul'>
            <div className='search-title'>
              People
          </div>
            <div className='watch-lis'>
              {this.listPlacement(list5)}
            </div>
          </ul>
          {this.placeFocus(list5)}
          <ul className='movie-ul'>
            <div className='watch-lis'>
              {this.listPlacement(list6)}
            </div>
          </ul>
          {this.placeFocus(list6)}
          <ul className='movie-ul'>
            <div className='watch-lis'>
              {this.listPlacement(list7)}
            </div>
          </ul>
          {this.placeFocus(list7)}
          <ul className='movie-ul'>
            <div className='watch-lis'>
              {this.listPlacement(list8)}
            </div>
          </ul>
          {this.placeFocus(list8)}
        </div>
      </div>
    )
  }
}

export default Search;