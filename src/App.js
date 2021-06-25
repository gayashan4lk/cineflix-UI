import React, {Component} from "react";
import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch, Redirect} from "react-router-dom";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import NotFound from "./components/notFound";
import Customers from "./components/customers";
import Rentals from "./components/rentals";

class App extends Component {
  render() {
    return (
        <Router>
            <div className="container">
                <NavBar />
                <div className="content">
                    <Switch>
                        <Route path="/rentals" component={Rentals}/>
                        <Route path="/customers" component={Customers}/>
                        <Route path="/movies" component={Movies}/>
                        <Route path="/not-found" component={NotFound} />
                        <Route path="/" exact component={Movies} />
                        <Redirect to="not-found" />
                    </Switch>
                </div>
            </div>
        </Router>
    );
  }
}

export default App;
