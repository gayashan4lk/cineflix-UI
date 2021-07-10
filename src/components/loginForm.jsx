import Form from "./common/form";
import Input from "./common/input";
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
    const { data, errors } = this.state; // Object destructuring
    // console.log (data);
    return (
      <div className="login-form-container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name={"username"}
            value={data.username}
            label={"Username"}
            onChange={this.handleChange}
            error={errors.username} />
          <Input
            name={"password"}
            value={data.password}
            label={"Password"}
            onChange={this.handleChange}
            error={errors.password} />
          <button
            disabled={this.validate()}
            type="submit"
            className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;