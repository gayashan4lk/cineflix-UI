import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-md navbar-light bg-light mb-5">
            <Link className="navbar-brand" to="/">Cinetv</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/movies">Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/customers">Customers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/rentals">Rentals</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="something">Disabled</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;