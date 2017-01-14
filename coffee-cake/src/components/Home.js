import React from 'react';
import Location from './Location';

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-2">
        This is our app's home page. This is what the user sees when they visit the root URL.
      </div>
    </div>
      <Location />
  </div>



);
export default Home;
