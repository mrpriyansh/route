import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Link to ="/about">About</Link>
      <Link to ="/home">Home</Link>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
