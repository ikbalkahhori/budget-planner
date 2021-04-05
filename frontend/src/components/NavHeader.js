/*
 * Copyright (c) 2021 Musa Ugurlu
 * Author: Musa Ugurlu
 * Date: 03/18/2021 11:52:47 pm
 */
import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const NavHeader = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("Unauthorized. Please log in!", { toastId: 1 });
    history.push("/login");
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Project Budget Planner</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <div className="form-inline">
          <Button
            variant="outline-light"
            className="mr-sm-2"
            onClick={() => {
              history.push("/signup");
            }}
          >
            Sign Up
          </Button>
          <Button
            variant="light"
            onClick={() => {
              history.push("/login");
            }}
          >
            Sign in
          </Button>
        </div>
      </Navbar>
    </>
  );
};

export default NavHeader;
