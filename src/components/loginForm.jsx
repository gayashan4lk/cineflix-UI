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
        return { username: "Username is required." };
    };

    handleSubmit = e => {
        e.preventDefault(); // prevents submitting the form to the server
        const errors = this.validate();
        this.setState({errors});
        if (errors) return;

        // Call the server -> save the changes -> redirect user to a another page

        /*const username = this.username.current.value;*/
        console.log("submit clicked");
        console.log ("username: ", this.state.account.username);
        console.log ("password: ", this.state.account.password);


    };

    handleChange = ({ currentTarget: input }) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account}); // Same thing as = this.setState({account: account});
    }
    // This handleChange function is the same as below!
    /*handleChange = e => {
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account}); // Same thing as this! this.setState({account: account});
    }*/

    render() {
        const { account } = this.state; // Object destructuring
        console.log (account);
        return (
            <div className="login-form-container">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input name={"username"} value={account.username} label={"Username"} onChange={this.handleChange} />
                    <Input name={"password"} value={account.password} label={"Password"} onChange={this.handleChange} />
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;