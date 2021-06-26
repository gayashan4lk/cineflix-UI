import React, {Component} from "react";

class LoginForm extends Component {
    username = React.createRef();

    /*componentDidMount() {
        this.username.current.focus();
    }*/

    handleSubmit = e => {
        e.preventDefault(); // prevents submitting the form to the server
        // Call the server -> save the changes -> redirect user to a another page

        const username = this.username.current.value;
        console.log("submitted");
    };

    render() {
        return (
            <div className="login-form-container">
                <h1>Login</h1>
                <form onSubmit={""}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">User name</label>
                        <input
                            autoFocus
                            ref={this.username}
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