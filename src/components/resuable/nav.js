import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <Navbar className="bg-dark fixed-top" expand="lg">
            <Container>
                <Navbar.Brand href="/" style={{ color: 'white' }}>PJSYM</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
                        <Nav.Link href="/about" style={{ color: 'white' }}>About Us</Nav.Link>
                        <Nav.Link href="/heros" style={{ color: 'white' }}>Heros</Nav.Link>
                        <Nav.Link href="/gallery" style={{ color: 'white' }}>Gallery</Nav.Link>
                        <Nav.Link href="/contact" style={{ color: 'white' }}>Contact Us</Nav.Link>
                    </Nav>
                    <Button href='/donate' variant="outline-primary">Donate</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
