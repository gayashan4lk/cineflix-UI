import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
        <Router>
            <div className="container">
                <NavBar />
                <Movies />
            </div>
        </Router>
    );
  }
}

export default App;
