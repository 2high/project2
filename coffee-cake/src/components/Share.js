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
      <div className="col-md-12">
          <div className="aa">Name of the place</div>
          <input type="text" name="FirstName" value="Mickey" />
      </div>
      <div className="col-md-12">
        <div className="aa">Coffee ranking (between 1 and 5):</div>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option >5</option>
        </select>
      </div>
      <div className="col-md-12">
        <div className="aa">Cake ranking (between 1 and 5):</div>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option >5</option>
        </select>
      </div>
      <div className="col-md-12">
        <button>Share</button>
      </div>
    </div>
  </div>
)

export default Share;
