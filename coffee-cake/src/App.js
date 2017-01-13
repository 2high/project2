import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import axios from 'axios';
import logo from './logo.svg';
import NotFound from './components/NotFound';
import './App.css';

class App extends Component {


  componentDidMount() {
    this.getFirebase();
  }

  getFirebase() {
    axios({
      url: '/todos.json',
      baseURL: 'https://coffee-cake-194f3.firebaseio.com/',
      method: "GET"
    }).then((response) => {
      this.setState({ todos: response.data });
    }).catch((error) => {
      console.log(error);
    });
  }






  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
