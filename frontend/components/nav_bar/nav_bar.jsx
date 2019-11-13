import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.email}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      
    </div>
  );
  return (
    <header className="nav-bar">
      <h1 className="logo">NETCLIPS</h1>
      <div>
        {display}
      </div>
    </header>
  )
}
