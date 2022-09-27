import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './styles/Home.css';
const Navbarr = () => {
  const history = useNavigate();

  const Logout = () => {
    localStorage.removeItem("login");
    history("/");
  };

  const state = useSelector((state) => state.handleCart);
  return (
    <Navbar
      className="navbar navbar-expand-lg bg-light navbar-light bg-white py-3 shadow-sm"
      expand="lg"
    >
      <Container >
        <Navbar.Brand className="navbar-brand fw-bold fs-4">
          LA COLLECTION
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav mx-auto mb-2 mb-lg-0">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-dark"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="col-sm-8">
            <div className="button float-right">
              <NavLink to="/" className="btn btn-outline-dark ms-5">
                <i className="fa fa-sign-in me-1"></i>Login
                
              </NavLink>
              <NavLink to="/signin" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>Cart({state.length})
              </NavLink>
              <button className="btn btn-outline-danger ms-2" onClick={Logout}>
                <i className="fa fa-sign-out me-1"></i>Logout
              </button>
            </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
};

export default Navbarr;
