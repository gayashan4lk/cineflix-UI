import Form from "./common/form";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data : {
      username: "",
      password: ""
    },
    errors : {}
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password")
  };

  doSubmit() {
    console.log("Submitted");
  }

  render() {
    return (
      <div className="login-form-container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "UserName")}
          {this.renderInput("password", "Password","password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;