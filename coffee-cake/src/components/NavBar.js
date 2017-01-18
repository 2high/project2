  import React from 'react';
import { Link } from 'react-router';

const NavBar = () => (
  <div className="">
  <div className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand aaa" href="#">Coffee & Cakes</a>
      </div>
      <ul className="nav navbar-nav pull-right">
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
  </div>
  </div>
);

export default NavBar;
