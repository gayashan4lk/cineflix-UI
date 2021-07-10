import { Component } from "react";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false }
    const result = Joi.validate(this.state.data, this.schema, options);
    if(!result.error) return null;

    const errors = {};
    for (let item of result.error.details)
      errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema, { abortEarly: true });
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    // console.log("submit clicked");

    e.preventDefault(); // prevents submitting the form to the server
    const errors = this.validate();
    this.setState({errors: errors || {}}); // If errors is null then passes empty object. If not runtime error occurs
    console.log(errors);
    if (errors) return;

    //Call the Server
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if(errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = {...this.state.data};
    data[input.name] = input.value;
    this.setState({data, errors}); // Same thing as = this.setState({data: data});
  }
}

export default Form;