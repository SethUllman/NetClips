import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { logout } from '../../actions/session';

export default ({ currentUser, logout }) => {

// class NavBar extends React.Component{

//   constructor(props){
//     super(props);
//     this.handleList = this.handleList.bind(this);
//   }

//   handleList(){
//     debugger;
//     this.props.history.push(`/watch_list/${currentUser}`);
//   }
//   render(){
  const display = currentUser ? (
      <div>
        <ul className='nav-bar-ul'>
          <li className='nav-bar-li'>
            <Link to='/movies'>Home</Link>
          </li>
          <li className='nav-bar-li'>TV Shows</li>
          <li className='nav-bar-li'>Movies</li>
          <li className='nav-bar-li'>Recently Added</li>
          <li className='nav-bar-li'>
            {/* <Link to={`/watch_list/${currentUser}`}>My List</Link> */}
            My List
          </li>
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
// }

// export default NavBar;