import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div>
      <ul className='nav-bar-ul'>
        <li className='nav-bar-li'>Home</li>
        <li className='nav-bar-li'>TV Shows</li>
        <li className='nav-bar-li'>Movies</li>
        <li className='nav-bar-li'>Recently Added</li>
        <li className='nav-bar-li'>My Library</li>
      </ul>
      
    </div>
  ) : (
    <div>
      
    </div>
  );
  const logoutBtn = currentUser ? (
    <ul className='search-header'>
      <li>
        <label className='search-bar'>
          <FaSearch/>
          <input type="text"/>
        </label>
      </li>
      <li>
        <div className='logout-btn'>
            <button onClick={logout}>Logout</button>
        </div>
      </li>
    </ul>
  ) : (
    <div></div>
  )
  return (
    <header className="nav-bar">
      <div className='nav-options'>
        <h1 className="logo">NETCLIPS</h1>
        <div>
          {display}
        </div>
      </div>
      <div >
        {logoutBtn}
      </div>
    </header>
  )
}
