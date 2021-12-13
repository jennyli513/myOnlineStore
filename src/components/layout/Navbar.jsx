import React, { Component } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import {Link}  from "react-router-dom";

//File: Navbar.jsx
//This file is to create a navbar with links to different pages

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <img src="./images/logo.jpg" alt="logo" width="120px" height="80px"></img>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                   <Link className="nav-link active" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                   <Link className="nav-link active" to="/contact">Contact Us</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link active" to="/products">Shop</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/cart">  
                     <Badge color="primary"><ShoppingCartIcon /></Badge>
                     {/* Getting the props form MyApp */}
                        <span className="p-1 badge bg-primary m-1">{this.props.count}</span>
                      </Link>  
                  </li>
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                   {/* Link to Confirm page */}
                  <Link to="/confirm">
                  <button className="btn btn-outline-success" type="submit">Search</button>
                  </Link>
                </form>
              </div>
            </div>
          </nav>
        )
    }
}

export default Navbar;
