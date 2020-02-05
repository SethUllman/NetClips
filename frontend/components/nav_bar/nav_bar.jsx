import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

class NavBar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      search: ""
    }

    this.display = this.display.bind(this);
    this.searchBar = this.searchBar.bind(this);
    this.logoutBtn = this.logoutBtn.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  display() {
    if (this.props.currentUser){
      return(
        <div>
          <ul className='nav-bar-ul'>
            <li className='nav-bar-li'>
              <Link to='/movies'>Home</Link>
            </li>
            {/* <li className='nav-bar-li'>TV Shows</li>
            <li className='nav-bar-li'>Movies</li> */}
            <li className='nav-bar-li'>
              <Link to={`/watch_list/${this.props.currentUser.id}`}>My List</Link>
            </li>
          </ul>

        </div>
      )
    }
  }

  searchBar(){
    if (this.props.currentUser){
      return (
        <div className='search-bar'>
          <div className='search-icon'>
            <FaSearch />
          </div>
          <div className='search-input'>
            <input 
              type="text" 
              value={this.state.search}
              placeholder="Titles, people"
              onChange={this.handleInput()}
            />
          </div>
        </div>
      )
    }
  }

  logoutBtn(){
    if (this.props.currentUser){
      return (
        <div className='logout-btn'>
          <button onClick={() => {
            this.props.logout();
          }}>Logout</button>
        </div>
      );

    }
  }

  handleInput() {
    if (!this.state.search){
      
    }
    return (e) => {
      this.setState({ search: e.target.value });
    };
  }

  render() {
    return (
      <header className="nav-bar">
        <div className='nav-options'>
          <div className="logo">
            <Link to='/movies'>NETCLIPS</Link>
          </div>
          <div>
            {this.display()}
          </div>
        </div>
        <div className='nav-search'>
          {this.searchBar()}
          {this.logoutBtn()}
        </div>
      </header>
    )
  }
}



export default NavBar;
