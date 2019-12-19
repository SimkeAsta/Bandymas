import React from 'react';
import { Link } from 'react-router-dom';

var Navigation = (props) => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link">Admin</Link>
                        </li>
                        <form className="form-inline">
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </form>
                    </ul>
                    <Link to="/cart">
                        < button type="button" className="btn btn-light"><i className="fas fa-cart-plus" />Cart items</button>
                    </Link>
                </div>
            </nav>
        </div >
    );
}

export default Navigation;