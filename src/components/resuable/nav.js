import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <Navbar className="bg-dark fixed-top" expand="lg">
            <Container>
                <Navbar.Brand href="#home" style={{ color: 'white' }}>PJSYM</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home" style={{ color: 'white' }}>Home</Nav.Link>
                        <Nav.Link href="#link" style={{ color: 'white' }}>About Us</Nav.Link>
                        <Nav.Link href="#link" style={{ color: 'white' }}>Heros</Nav.Link>
                        <Nav.Link href="#link" style={{ color: 'white' }}>Gallery</Nav.Link>
                        <Nav.Link href="#link" style={{ color: 'white' }}>Contact Us</Nav.Link>
                    </Nav>
                    <Button variant="outline-primary">Search</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
