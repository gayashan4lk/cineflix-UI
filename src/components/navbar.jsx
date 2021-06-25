import React from "react";
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-md navbar-light bg-light mb-5">
            <Link className="navbar-brand" to="/"><b>Cinetv</b></Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/movies"><b>Movies</b></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/customers"><b>Customers</b></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/rentals"><b>Rentals</b></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link disabled" to="disabled"><b>Disabled</b></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;