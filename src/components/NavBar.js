import React, { useState } from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export default function NavBar() {
  const [currentPage, setCurrentPage] = useState("/");
  const isActiveTab = (tabName) => {
    return tabName === currentPage ? "nav-link active" : "nav-link";
  };

  const onTabClick = (event, tabName) => {
    this.setState({ currentPage: tabName });
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Johnny's Bank</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            <LinkContainer to="/accounts">
              <Nav.Link>Accounts</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/transactions">
              <Nav.Link>Transactions</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
