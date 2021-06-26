import React, {Component} from "react";
import Input from "./common/input";

class LoginForm extends Component {
    state = {
        account : {username: "", password: "" },
        errors : {}
    }

    /*username = React.createRef();*/ // Create reference to dom object

    /*componentDidMount() {
        this.username.current.focus();
    }*/

    validate = () => {
        const errors = {};
        const {account} = this.state;
        if (account.username.trim() === "")
            errors.username = "Username is required.";
        if (account.password.trim() === "")
            errors.password = "Password is required.";
        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = e => {
        // console.log("submit clicked");

        e.preventDefault(); // prevents submitting the form to the server
        const errors = this.validate();
        this.setState({errors: errors || {}}); // If errors is null then passes empty object. If not runtime error occurs
        console.log(errors);
        if (errors) return;

        // Call the server -> save the changes -> redirect user to a another page
        /*const username = this.username.current.value;*/
        console.log ("username: ", this.state.account.username);
        console.log ("password: ", this.state.account.password);
    };

    validateProperty = ({name, value}) => {
        if (name === "username") {
            if (value.trim() === "") return "Username is required.";
            // ... Any other rules?
        }
        if (name === "password") {
            if (value.trim() === "") return "Password is required.";
            // ... Any other rules?
        }
    }

    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account, errors}); // Same thing as = this.setState({account: account});
    }
    // This handleChange function is the same as below!
    /*handleChange = e => {
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account}); // Same thing as this! this.setState({account: account});
    }*/

    render() {
        const { account, errors } = this.state; // Object destructuring
        // console.log (account);
        return (
            <div className="login-form-container">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input name={"username"} value={account.username} label={"Username"} onChange={this.handleChange} error={errors.username} />
                    <Input name={"password"} value={account.password} label={"Password"} onChange={this.handleChange} error={errors.password} />
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;