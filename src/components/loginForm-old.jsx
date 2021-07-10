import React, {Component} from "react";
import Joi from "joi-browser";
import Input from "./common/input";

class LoginFormOld extends Component {
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

    /*username = React.createRef();*/ // Create reference to dom object

    /*componentDidMount() {
        this.username.current.focus();
    }*/

    /*validate = () => {
        const result = Joi.validate(this.state.data, this.schema, { abortEarly: false });
        console.log(result);

        const errors = {};
        const {data} = this.state;
        if (data.username.trim() === "")
            errors.username = "Username is required.";
        if (data.password.trim() === "")
            errors.password = "Password is required.";
        return Object.keys(errors).length === 0 ? null : errors;
    };*/

    validate = () => {
        const options = { abortEarly: false }
        const result = Joi.validate(this.state.data, this.schema, options);
        if(!result.error) return null;

        const errors = {};
        for (let item of result.error.details)
            errors[item.path[0]] = item.message;
        return errors;
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

    doSubmit = () => {
        // Call the server -> save the changes -> redirect user to a another page
        /*const username = this.username.current.value;*/
        console.log ("username: ", this.state.data.username);
        console.log ("password: ", this.state.data.password);
        console.log("Submitted");
    }

    /*validateProperty = ({name, value}) => {
        if (name === "username") {
            if (value.trim() === "") return "Username is required.";
            // ... Any other rules?
        }
        if (name === "password") {
            if (value.trim() === "") return "Password is required.";
            // ... Any other rules?
        }
    }*/

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema, { abortEarly: true });
        return error ? error.details[0].message : null;
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
    // This handleChange function is the same as below!
    /*handleChange = e => {
        const data = {...this.state.data};
        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({data}); // Same thing as this! this.setState({data: data});
    }*/

    render() {
        const { data, errors } = this.state; // Object destructuring
        // console.log (data);
        return (
            <div className="login-form-container">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input name={"username"} value={data.username} label={"Username"} onChange={this.handleChange} error={errors.username} />
                    <Input name={"password"} value={data.password} label={"Password"} onChange={this.handleChange} error={errors.password} />
                    <button
                      disabled={this.validate()}
                      type="submit"
                      className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginFormOld;