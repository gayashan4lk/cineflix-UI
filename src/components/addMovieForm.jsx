import Form from "./common/form";
import Joi from "joi-browser";
import {getGenres} from "../services/fakeGenreService";
import {saveMovie} from "../services/fakeMovieService";
import React from "react";

class AddMovieForm extends Form {
  state = {
    data : {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    errors: {},
    genres: []
  }
  schema = {
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().integer().min(0).required().label("Number in Stock"),
    dailyRentalRate: Joi.number().min(0).max(10).required().label("Rate"),
  }

  doSubmit() {
    const movie = this.state.data;
    console.log(movie);
    saveMovie(movie);
    console.log("Movie submitted");
  }

  componentDidMount() {
    const genres = [{_id:"", name:""},...getGenres()];
    this.setState({genres: genres});
  }

  render() {
    return (
      <div className="addmovie-form-container">
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
        {this.renderInput("title", "Title")}
        {this.renderSelect("genreId","Genre", this.state.genres)}
        {this.renderInput("numberInStock", "Number in Stock")}
        {this.renderInput("dailyRentalRate", "Rate")}
        {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}
export default AddMovieForm;