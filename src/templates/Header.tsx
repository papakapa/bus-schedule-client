import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">Bus Schedule</NavLink>
                <div className="navbar-nav mr-auto">
                    <NavLink className="nav-item nav-link" activeClassName='active-link' to="/">Home</NavLink>
                    <NavLink className="nav-item nav-link" activeClassName='active-link' to="/schedule/main">Schedule</NavLink>
                    <NavLink className="nav-item nav-link" activeClassName='active-link' to="/">About</NavLink>
                </div>
        </nav>
    );
};

export default Header;
