import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import axios from 'axios';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Share from './components/Share';
import Places from './components/Places';
import Location from './components/Location';
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
        <div className="Container">
        <NavBar />
        <Match exactly pattern="/" component={Home} />
        <Match exactly pattern="/share" component={Share} />
        <Match exactly pattern="/places" component={Places} />      
        <Miss component={NotFound} />
      </div>

      </BrowserRouter>
    );
  }
}

export default App;
