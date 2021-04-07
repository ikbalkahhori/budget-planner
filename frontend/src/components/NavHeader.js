import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const NavHeader = () => {
  const history = useHistory();
  const owner = localStorage.getItem("ownername");

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Project Budget Planner</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <div className="form-inline">
          <Button variant="outline-light" className="mr-sm-2">
            {owner || "User"}
          </Button>
          <Button variant="light" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Navbar>
    </>
  );
};

export default NavHeader;
