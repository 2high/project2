import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import axios from 'axios';


class Share extends React.Component{
  createLocation() {
      axios({
        method: 'POST',
        url: `https://coffee-cake-194f3.firebaseio.com/location/area.json`,
        data: {
          location: this.location.value,
          name: this.name.value,
          coffee: this.coffee.value,
          cake: this.cake.value,
          comment: this.comment.value
        }
      }).then(() => {
        this.props.getPlaces();
        this.location.value = "";
        this.name.value = "";
        this.coffee.value = "";
        this.cake.value = "";
        this.comment.value = "";
      })
    }

    keyPress(e) {
      if (e.charCode === 13) {
        this.createLocation();
      }
    }

    render() {
      return (
        <div>
          <div className="container">
          <input
            type="text"
            ref={(input) => this.location = input}
            placeholder="Location"
            />
          <input
            type="text"
            ref={(input) => this.name = input}
            onKeyPress={(e) => this.keyPress(e)}
            placeholder="name" />
          <input
            type="text"
            ref={(input) => this.coffee = input}
            onKeyPress={(e) => this.keyPress(e)}
            placeholder="coffee ranking" />
          <input
            type="text"
            ref={(input) => this.cake = input}
            onKeyPress={(e) => this.keyPress(e)}
            placeholder="cake ranking" />
          <input
            type="text"
            ref={(input) => this.comment = input}
            onKeyPress={(e) => this.keyPress(e)}
            placeholder="Comment " />
          <button
            id="button"
            type="submit"
            onClick={() => this.createLocation()}
            className="xxx">
            Submit
          </button>
        </div>
        </div>
      )
    }


}

export default Share;
