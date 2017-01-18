  import React from 'react';
import { Link } from 'react-router';

const NavBar = () => (
  <div className="App-header">
    <h2>Coffee & Cakes</h2>
    <ul>
      <li className="dan">
        <Link
          to="/"
          activeOnlyWhenExact
          activeClassName="active"
        >
          Home
        </Link>
      </li>
      <li className="dan">
        <Link
          to="/Share"
          activeOnlyWhenExact
          activeClassName="active"
        >
          Share
        </Link>
      </li>
      <li className="dan">
        <Link
          to="/Places"
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
