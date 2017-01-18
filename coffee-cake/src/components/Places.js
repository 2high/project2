import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import axios from 'axios';


class Places extends React.Component{
  constructor() {
    super();
    this.state = {
      locations: {},
      edit: false,
    }
    this.deleteLocation = this.deleteLocation.bind(this);
    this.editLocation = this.editLocation.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
        locations: res.data,
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
 //  editLocation(event) {
 //   let editKey = event.target.name;
 //   console.log(editKey)
 //   axios.patch(`https://coffee-cake-194f3.firebaseio.com/location/area/${editKey}.json`).then((res) => {
 //     console.log(res)
 //   })
 // }

editLocation() {
  this.state.edit? this.setState({edit: false}) : this.setState({edit: true})

}
 saveEdit(event) {
      let edit = event.target.name;

      let locations = this.state.locations
       let newLocation = locations[edit].location;
       let newName = locations[edit].name;
       let newCoffee = locations[edit].coffee;
       let newCake = locations[edit].cake;
       let newComment = locations[edit].comment;
     axios({
       method: 'PATCH',
         url: `/location/area/${edit}.json`,
         baseURL: 'https://coffee-cake-194f3.firebaseio.com/',
       data: {
         location: newLocation,
         name: newName,
         coffee: newCoffee,
         cake: newCake,
         comment: newComment
       }
     }).then((response) => {
      //  console.log("=====>", this.location.value);
        console.log(response)
      //  this.location.value = "";
      //  this.name.value = "";
      //  this.coffee.value = "";
      //  this.cake.value = "";
      //  this.comment.value = "";
     })
   }


   handleChange(event) {
     let id = event.target.name;
     let prop = event.target.id;
     let locations = this.state.locations;
     locations[id][prop] = event.target.value;
     debugger;
     this.setState({locations})
     console.log(this.state)
   }

   renderLocations = () => {
     if (Object.keys(this.state.locations) != 0) {
       let test = Object.keys(this.state.locations).map((crazykey, i) => {
        //  console.log("crazykey", crazykey)
        //  console.log("i", i);
          return (
            <div key={i} className="col-md-3 wrapz">
              <div className="places_in">
                <span className="places_info">Location:</span>
                {this.state.edit?
                  <input type="text" name={crazykey} id="location" value={this.state.locations[crazykey].location} onChange={this.handleChange}></input>
                  :
                  <p>{this.state.locations[crazykey].location}</p>
                }
                </div>
              <div className="places_in">
                <span className="places_info">Name:</span>
                {this.state.edit?
                  <input type="text" name={crazykey} id="name" value={this.state.locations[crazykey].name} onChange={this.handleChange}></input>
                  :
                <p>{this.state.locations[crazykey].name}</p>
              }
              </div>
              <div className="places_in">
                <span className="places_info">Coffee score:</span>
                {this.state.edit?
                  <input type="text" name={crazykey} id="coffee" value={this.state.locations[crazykey].coffee}
                  onChange={this.handleChange}></input>
                  :
                <p>{this.state.locations[crazykey].coffee}</p>
              }
              </div>
              <div className="places_in">
                <span className="places_info">Cake score:</span>
                {this.state.edit?
                <input type="text" name={crazykey} id="cake" value={this.state.locations[crazykey].cake}
                onChange={this.handleChange}></input>
                :
                <p>{this.state.locations[crazykey].cake}</p>
                }
              </div>
              <div className="places_in">
                <span className="places_info">Comment:</span>
                {this.state.edit?
                <input type="text" name={crazykey} id="comment" value={this.state.locations[crazykey].comment}
                onChange={this.handleChange}></input>
                :
                <p>{this.state.locations[crazykey].comment}</p>
              }
              </div>
              <button name={crazykey} onClick={ this.deleteLocation } >delete</button>
              <button name={crazykey} onClick={ this.editLocation } >Edit</button>
              {this.state.edit? <button name={crazykey} onClick={ this.saveEdit } >Save</button> : <div></div>}
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
