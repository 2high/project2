import React from 'react';
import { Link } from 'react-router';

const NavBar = () => (
  <div className="App-header">
    <h2>Coffee & Cakes</h2>
    <ul>
      <li>
        <Link
          to="/"
          activeOnlyWhenExact
          activeClassName="active"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/people"
          activeOnlyWhenExact
          activeClassName="active"
        >
          Share
        </Link>
        <Link
          to="/people"
          activeOnlyWhenExact
          activeClassName="active"
        >
          Places
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
