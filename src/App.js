import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Pages/Layout/Header";
import Footer from "./Pages/Layout/Footer";
import About from "./Pages/About/About";
import { Test } from './Pages/Testing/Test';
import Home from "./Pages/Home/Home";
import Hooks from "./Pages/Hooks/Hooks";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/testing">Testing</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/testing">
            <Test />
          </Route>
        </Switch>
      </div>
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/hooks">
          <Hooks />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
