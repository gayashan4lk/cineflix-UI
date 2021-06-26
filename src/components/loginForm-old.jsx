import React, {Component} from "react";

class LoginFormOld extends Component {
    state = {
        account : {username: "", password: "" }
    }

    /*username = React.createRef();*/ // Create reference to dom object

    /*componentDidMount() {
        this.username.current.focus();
    }*/

    handleSubmit = e => {
        e.preventDefault(); // prevents submitting the form to the server
        // Call the server -> save the changes -> redirect user to a another page

        /*const username = this.username.current.value;*/
        console.log("submit clicked");
        console.log ("user name: ", this.state.account.username);
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
                    <div className="form-group mb-3">
                        <label htmlFor="username" className="form-label">User name</label>
                        <input
                            value={account.username}
                            name="username"
                            onChange={this.handleChange}
                            autoFocus
                            /*ref={this.username}*/
                            id="username"
                            type="text" 
                            className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            value={account.password}
                            name="password"
                            onChange={this.handleChange}
                            id="password"
                            type="password"
                            className="form-control"  />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginFormOld;