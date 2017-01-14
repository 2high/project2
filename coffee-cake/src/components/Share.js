import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Share = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="">Select a location</div>
        <select>
          <option value="manhattan">Manhattan</option>
          <option value="brooklyn">Brooklyn</option>
          <option value="bronx">Bronx</option>
          <option value="queens">Queens</option>
        </select>
      </div>
    </div>
  </div>
)

export default Share;
