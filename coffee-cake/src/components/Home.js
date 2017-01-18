import React from 'react';
import { Link } from 'react-router';


const Home = () => (
  <div className="home bgb">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="aprs">Coffee & Cakes</div>
          <div className="aprsa">The best coffee and cakes in NYC</div>
          <div className="appz"><Link
            to="/Share"
            activeOnlyWhenExact
            activeClassName="active"
          >
            Add review
          </Link></div>
        </div>
      </div>
    </div>
    <div className="commen">
      <div className="aprsb text-center">because we all need the little moments of zen</div>
    </div>
  </div>
);
export default Home;
