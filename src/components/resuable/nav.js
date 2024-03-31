import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Modal, Form } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../images/logo.png';
import '../../index.css';

export const NavBar = () => {
    const [lgShow, setLgShow] = useState(false); // State for modal visibility

    // Function to close the modal
    const handleClose = () => setLgShow(false);

    return (
        <Navbar className="navcont fixed-top" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{'   '}
                    PJSYM
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/" className='navpaths'>Home</Nav.Link>
                        <Nav.Link href="/about" className='navpaths'>About Us</Nav.Link>
                        <Nav.Link href="/programs" className='navpaths'>Programs</Nav.Link>
                        <Nav.Link href="/heros" className='navpaths'>Heroes</Nav.Link>
                        <Nav.Link href="/gallery" className='navpaths'>Gallery</Nav.Link>
                        <Nav.Link href="#!" className='navpaths' onClick={() => setLgShow(true)}>Contact Us</Nav.Link>
                    </Nav>
                    <Button href='/donate' variant="outline-primary">Donate</Button>
                </Navbar.Collapse>
            </Container>

            <Modal
                show={lgShow}
                dialogClassName="modal-90w"
                onHide={handleClose}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Contact Us
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex">
                    <div className="blue-section">
                        <h3 className='mb-4'>
                            CONTACT INFORMATION
                        </h3>
                        <div className="d-flex align-items-start mb-3">
                            <FaUser className="me-2" />
                            <span>Fr. JOYSON FERNANDES SJ</span>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <FaPhone className="me-2" />
                            <span>+91 9871528965 <br></br>+91 9939447576</span>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <FaEnvelope className="me-2" />
                            <span>demo@gmail.com</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <FaMapMarkerAlt className="me-2" />
                            <span>
                                St. Xavier’s,
                                <br />
                                West Gandhi Maidan,
                                <br />
                                Patna – 800 001
                            </span>
                        </div>
                    </div>

                    <div className="form-section">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Your Name"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Your Phone Number"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" placeholder="Enter Your Message here..." rows={3} />
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Send Message
                    </Button>
                </Modal.Footer>
            </Modal>
        </Navbar>
    );
};

export default NavBar;
