import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import axios from 'axios';


class Places extends React.Component{
  constructor() {
    super();
    this.state = {
      locations: {},
    }
  }

  componentDidMount() {
    this.getPlaces();
  }

  getPlaces = () => {
     axios.get(`https://coffee-cake-194f3.firebaseio.com/location/area.json`)
     .then((res) => {
       this.setState({
         locations: res.data,
       });
      });
   }

   renderLocations = () => {
     if (Object.keys(this.state.locations) != 0) {
       let test = Object.keys(this.state.locations).map((crazykey, i) => {
        //  console.log("crazykey", crazykey)
        //  console.log("i", i);
          return (
            <div key={i} className="col-md-3 wrapz">
              <div className="places_in"><span className="places_info">Location:</span>{this.state.locations[crazykey].location}</div>
              <div className="places_in"><span className="places_info">Name:</span>{this.state.locations[crazykey].name}</div>
              <div className="places_in"><span className="places_info">Coffee score:</span>{this.state.locations[crazykey].coffee}</div>
              <div className="places_in"><span className="places_info">Cake score:</span>{this.state.locations[crazykey].cake}</div>
              <div className="places_in"><span className="places_info">Comment:</span>{this.state.locations[crazykey].comment}</div>
            </div>
          )

       });
       console.log(test);
       return test;
    }
    return (
      <div>
        <p>Loading</p>
      </div>
    );
   }

   render(){
       return(
        <div>
          <div className="container">{this.renderLocations()}</div>
        </div>
       )

   }
}

export default Places;
