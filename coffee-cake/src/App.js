import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Share from './components/Share';
import Places from './components/Places';
import NotFound from './components/NotFound';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="Container">
        <NavBar />
        <Match exactly pattern="/" component={Home } />
        <Match exactly pattern="/share" component={Share} />
        <Match exactly pattern="/places" component={Places} />
        <Miss component={NotFound} />
      </div>

      </BrowserRouter>
    );
  }
}

export default App;
