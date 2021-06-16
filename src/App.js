import React, {Component} from "react";
import Movies from "./components/movies";
import './App.css';

class App extends Component {
  render() {
    return (
            <div className='movie-container'>
                <Movies/>
            </div>
    );
  }
}

export default App;
