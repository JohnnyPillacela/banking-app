import React from "react";
import { Nav, Container, Navbar } from 'react-bootstrap';
// import { BrowserRouter, Route} from "react-router-dom";


export default function NavBar() {
  return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Johnny's Bank</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link"></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
}
