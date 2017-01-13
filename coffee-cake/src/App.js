import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import axios from 'axios';
import Home from './components/Home';
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
      <BrowserRouter>
        <div>
        <Match exactly pattern="/" component={Home} />
        <Miss component={NotFound} />
      </div>

      </BrowserRouter>
    );
  }
}

export default App;
