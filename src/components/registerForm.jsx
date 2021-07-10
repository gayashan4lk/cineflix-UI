import Form from "./common/form";
import Joi from "joi-browser"

class RegisterForm extends Form {
  state = {
    data : {
      username: "",
      password: "",
      name: ""
    },
    errors : {}
  }

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
    name: Joi.string().required().label("Name")
  };

  doSubmit() {
    console.log("Registered");
  }

  render() {
    return (
      <div className="login-form-container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "UserName")}
          {this.renderInput("password", "Password","password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;