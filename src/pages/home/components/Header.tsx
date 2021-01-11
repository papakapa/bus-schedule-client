import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">Bus schedule</NavLink>
                <div className="navbar-nav mr-auto">
                    <NavLink className="nav-item nav-link" activeClassName='active__link' to="/">Home</NavLink>
                    <NavLink className="nav-item nav-link" activeClassName='active__link' to="/">Features</NavLink>
                    <NavLink className="nav-item nav-link" activeClassName='active__link' to="/">About</NavLink>
                </div>
        </nav>
    );
};

export default Header;