import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Modal, Form, Toast } from 'react-bootstrap';
import { FaEnvelope, FaUser, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../images/logo.png';
import '../../index.css';
import { useNavigate } from 'react-router-dom';



export const NavBar = () => {
    const navigate = useNavigate();
    const [lgShow, setLgShow] = useState(false);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastVariant, setToastVariant] = useState('success');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [expanded, setExpanded] = useState(false); // State to manage Navbar collapse

    const handleNavbarToggle = () => setExpanded(!expanded);

    const handleClose = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
            return; // Exit function if form is invalid
        }
        try {
            // Only send the form data to the API if the form is validated
            const response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "name": name,
                    "phoneNumber": phoneNumber,
                    "message": message,
                    "email": email
                })
            });
            if (response.ok) {
                setStatus("Message sent successfully!\nYou will be contacted soon...");
                setName('');
                setPhoneNumber('');
                setEmail('');
                setMessage('');
                toggleToast('success');
                setFormSubmitted(true);
                setLgShow(false);
            } else {
                setStatus("Failed to send your message!\nCheck your internet connection\nor try again later.");
                toggleToast('danger');
                setFormSubmitted(false);
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setStatus("Failed to send your message!\nCheck your internet connection and try again later.");
            toggleToast('danger');
            setFormSubmitted(false);
        }
    };

    const handleModalClose = () => {
        if (!formSubmitted) {
            setLgShow(false); // Close modal only if form is submitted successfully
        }
    };

    const handleSendButtonClick = (event) => {
        event.preventDefault(); // Prevent default form submission
        if (!formSubmitted && name && phoneNumber && email && message) {
            handleClose(event); // Perform submit only if form is submitted successfully and all fields are filled
        }
    };


    const toggleToast = (variant) => {
        setShowToast(true);
        setToastVariant(variant);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        else if (name === 'phoneNumber') setPhoneNumber(value);
        else if (name === 'email') setEmail(value);
        else if (name === 'message') setMessage(value);
        setFormSubmitted(false);
    };
    return (
        <Navbar className="navcont fixed-top" expand="lg" expanded={expanded}>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />
                    <span className='ms-3 nav-head d-none d-lg-inline'>PATNA JESUIT SOCIETY YOUTH MINISTRY</span>
                    <span className='ms-3 nav-head d-lg-none'>PJSYM</span> {/* Display this on small screens */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavbarToggle} />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        {/* <Nav.Link href="/" className='navpaths nav-text'>Home</Nav.Link> */}
                        {/* <Nav.Link href="/#about" className='navpaths'>About Us</Nav.Link> */}
                        {/* <Nav.Link href="/#programs" className='navpaths'>Programs</Nav.Link> */}
                        {/* <Nav.Link href="/#heros" className='navpaths'>Heroes</Nav.Link> */}
                        {/* <Nav.Link href="/#gallery" className='navpaths'>Gallery</Nav.Link> */}
                        {/* <Nav.Link href="#!" className='navpaths' onClick={() => setLgShow(true)}>Contact Us</Nav.Link> */}
                        <button className="btn btn-transparent" onClick={() => { navigate('/'); setExpanded(false); }}>
                            <div className='navpaths nav-text'>Home</div>
                        </button>
                        <button className="btn btn-transparent" ariant='transparent' onClick={() => { navigate('/about'); setExpanded(false); }}>
                            <div className='navpaths nav-text'>About Us</div>
                        </button>
                        <button className="btn btn-transparent" ariant='transparent' onClick={() => { navigate('/programs'); setExpanded(false); }}>
                            <div className='navpaths nav-text'> Programs</div>
                        </button>
                        <button className="btn btn-transparent" ariant='transparent' onClick={() => { navigate('/heros'); setExpanded(false); }}>
                            <div className='navpaths nav-text'>Heroes</div>
                        </button>
                        <button className="btn btn-transparent" ariant='transparent' onClick={() => { navigate('/gallery'); setExpanded(false); }}>
                            <div className='navpaths nav-text'>Gallery</div>
                        </button>
                        <button className="btn btn-transparent" ariant='transparent' onClick={() => setLgShow(true) > navigate('#!')}>
                            <div className='navpaths nav-text'>Contact Us</div>
                        </button>
                        <div className="d-flex align-items-center justify-content-center">
                            <button onClick={() => { navigate('/donate'); setExpanded(false); }} className="btn btn-primary mx-2 me-lg-0">Donate</button>
                        </div>

                    </Nav>
                </Navbar.Collapse>
            </Container>

            <Modal
                show={lgShow}
                dialogClassName="modal-90w"
                onHide={handleModalClose}
                aria-labelledby="example-modal-sizes-title-lg"
            >

                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Contact Us
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex">
                    <div className="blue-section d-none d-sm-block">
                        <h3 className='mb-4'>
                            CONTACT INFORMATION
                        </h3>
                        <div className="d-flex align-items-start mb-3">
                            <FaUser className="me-2 mt-1" />
                            <span>Fr. Anthony Prakash SJ</span>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <FaPhone className="me-2" />
                            <span>+91 9871528965 <br></br>+91 9939447576</span>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <FaEnvelope className="me-2 mt-1" />
                            <span>pjsym1975@gmail.com</span>
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
                        <Form onSubmit={handleClose} validated={formSubmitted}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Your Name"
                                    name="name"
                                    value={name}
                                    onChange={handleInputChange}
                                    required
                                    isInvalid={formSubmitted && !name}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your name.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Your Phone Number"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={handleInputChange}
                                    pattern="[0-9]{10}"
                                    required
                                    isInvalid={formSubmitted && !phoneNumber}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid phone number.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange}
                                    required
                                    isInvalid={formSubmitted && !email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid email address.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Enter Your Message here..."
                                    name="message"
                                    rows={3}
                                    value={message}
                                    onChange={handleInputChange}
                                    required
                                    isInvalid={formSubmitted && !message}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your message.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <p>{status}</p>
                    <Button variant="secondary" onClick={() => { setLgShow(false); setStatus(''); setFormSubmitted(false); }}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(event) => handleSendButtonClick(event)}>
                        Send Message
                    </Button>
                </Modal.Footer>
            </Modal>
            <Toast show={showToast} onClose={() => setShowToast(false)} style={{ position: 'absolute', top: 20, right: 20 }}>
                <Toast.Header closeButton={true} className={`bg-${toastVariant} text-white`}>
                    <img
                        src={logo}
                        className="rounded me-2"
                        alt=""
                        style={{ 'width': 30 }}
                    />
                    <strong className="me-auto"> PJSYM </strong>
                </Toast.Header>
                <Toast.Body><strong>{status.split('\n').map((line, index) => <div key={index}>{line}</div>)}</strong></Toast.Body>
            </Toast>
        </Navbar>
    );
};