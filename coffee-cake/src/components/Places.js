import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import axios from 'axios';


class Places extends React.Component{
  constructor() {
    super();
    this.state = {
      locations: {},
    }
    this.deleteLocation = this.deleteLocation.bind(this);
    this.editLocation = this.editLocation.bind(this);
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


//https://coffee-cake-194f3.firebaseio.com/location/area/-Kai2572T4E9BbSuk-8J.json
   deleteLocation(event) {
    let deleteKey = event.target.name;
    console.log(deleteKey);
    // https://coffee-cake-194f3.firebaseio.com//location/area/${deleteKey}.json
    axios.delete(`https://coffee-cake-194f3.firebaseio.com/location/area/${deleteKey}.json`)
    .then((res) =>{
      this.setState({
        locations: res.data
      });
    })
    // axios({
    //   url: `/location/area/${deleteKey}.json`,
    //   baseURL: 'https://coffee-cake-194f3.firebaseio.com/`',
    //   method: 'DELETE'
    // }).then((res) => {
    //   let locations = this.state.locations;
    //   delete locations[deleteKey];
    //   this.setState({ locations: locations })
    // }).catch( function() { console.log('error')})
  }
  editLocation(event) {
   let editKey = event.target.name;
   console.log(editKey)
   axios.patch(`https://coffee-cake-194f3.firebaseio.com/location/area/${editKey}.json`).then((res) => {
     console.log(res)
   })
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
              <button name={crazykey} onClick={ this.deleteLocation } >delete</button>
              <button name={crazykey} onClick={ this.editLocation } >Edit</button>
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
