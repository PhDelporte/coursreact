import React from 'react';
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    // Link
  } from "react-router-dom";
import Home from '../Home/Home';
import Users from '../Users/Users';
import Register from '../Register/Register';


export default function Nav() {
    return (
        <Router>
      <div className="Nav">
        <nav>
            <Route exact path="/Home"><Home /></Route>  
            <Route exact path="/Users"><Users /></Route>
            <Route exact path="/Register"><Register /></Route>  
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
      </div>
    </Router>
    )
}