import React, { Component } from 'react';
import TestOne from './test/test1'
import TestTwo from './test/test2'
import './App.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import Route from 'react-router-dom/Route'

class App extends Component {
  state = {
    textChoice: 'description',
    color: 'black',
    buttonLabel: 'ADD TO CART',
  };

  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <NavLink to="/test1" exact>Test One</NavLink>
            </li>
            <li>
              <NavLink to="/test2" exact>Test Two</NavLink>
            </li>
          </ul>
          <Route path="/test1" exact component={TestOne} ></Route>
          <Route path="/test2" exact component={TestTwo} ></Route>
        </div>
      </Router>
    );
  }
}


export default App;
