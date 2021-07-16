import Form from "./common/form";
import Joi from "joi-browser";
import {getGenres} from "../services/fakeGenreService";
import React from "react";

class AddMovieForm extends Form {
  state = {
    data : {
      title: "",
      genre: "",
      numberInStock: "",
      rate: ""
    },
    errors: {},
    genres: []
  }
  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.string().required().label("Number in Stock"),
    rate: Joi.string().required().label("Rate"),
  }

  doSubmit() {
    console.log("Movie submitted");
  }

  componentDidMount() {
    const genres = [...getGenres()];
    this.setState({genres: genres});
  }

  render() {
    return (
      <div className="addmovie-form-container">
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
        {this.renderInput("title", "Title")}
        {this.renderSelect("genre","Genre", this.state.genres)}
        {this.renderInput("numberInStock", "Number in Stock")}
        {this.renderInput("rate", "Rate")}
        {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}
export default AddMovieForm;