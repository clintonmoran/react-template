import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Pages/Layout/Header/Header";
import Footer from "./Pages/Layout/Footer";
import About from "./Pages/About/About";
import { Test } from './Pages/Testing/Test';
import Home from "./Pages/Home/Home";
import Hooks from "./Pages/Hooks/Hooks";

import { AppStateProvider } from "./Pages/Home/State/AppState";
import AppStateReducer, {
  initialState as InitialAppState
} from "./Pages/Home/State/AppStateReducer";

function App() {
  return (
    <AppStateProvider reducer={AppStateReducer} initialState={InitialAppState}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/hooks">
            <Hooks />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/testing">
            <Test />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AppStateProvider>
  );
}

export default App;
