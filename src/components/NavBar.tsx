import React, {FC} from 'react';
import {Link} from "react-router-dom";

const NavBar: FC = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <p className="navbar-brand">Products</p>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Product list</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/add" className="nav-link">Add product</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default NavBar;