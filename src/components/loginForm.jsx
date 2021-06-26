import React, {Component} from "react";

class LoginForm extends Component {
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

        const username = this.username.current.value;
        console.log("submitted");
    };

    handleChange = e => {
        const account = {...this.state.account};
        account.username = e.currentTarget.value;
        this.setState({account: account});
    }

    render() {
        return (
            <div className="login-form-container">
                <h1>Login</h1>
                <form onSubmit={""}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">User name</label>
                        <input
                            value={this.state.account.username}
                            onChange={this.handleChange}
                            autoFocus
                            /*ref={this.username}*/
                            id="username"
                            type="text" 
                            className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
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

export default LoginForm;