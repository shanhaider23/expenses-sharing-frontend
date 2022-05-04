import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import UserService from "../UserService";
import Budget from "../../images/budget.png";
import "./navigation.scss";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="sm" className="fixed-top">
      <Navbar.Brand href="/">
        <img src={Budget} alt="" className="nav-icon"></img>
        <b>Expense App </b>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <UserService />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
