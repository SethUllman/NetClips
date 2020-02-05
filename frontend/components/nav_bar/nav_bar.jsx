import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

class NavBar extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <header className="nav-bar">
        <div className='nav-options'>
          <div className="logo">
            <Link to='/movies'>NETCLIPS</Link>
          </div>
          <div>
            {display}
          </div>
        </div>
        <div className='nav-search'>
          {searchBar}
          {logoutBtn}
        </div>
      </header>
    )
  }
}

export default ({ currentUser, logout }) => {


  const display = currentUser ? (
      <div>
        <ul className='nav-bar-ul'>
          <li className='nav-bar-li'>
            <Link to='/movies'>Home</Link>
          </li>
          {/* <li className='nav-bar-li'>TV Shows</li>
          <li className='nav-bar-li'>Movies</li> */}
          <li className='nav-bar-li'>
            <Link to={`/watch_list/${currentUser.id}`}>My List</Link>
          </li>
        </ul>
        
      </div>
    ) : (
      <div>
        
      </div>
  );

  const searchBar = currentUser ? (
    <div className='search-bar'>
      <div className='search-icon' onClick={() => {
        return (
          <div className='search-input'>
            <input type="text" />
          </div>
        );
      }}>
        <FaSearch />
      </div>
    </div>
  ) : (
    <div></div>
  );
  
  const logoutBtn = currentUser ? (
    
    <div className='logout-btn'>
        <button onClick={() => {
          logout();
          }}>Logout</button>
    </div>
      
  ) : (
    <div></div>
  );

  
}

export default NavBar;
