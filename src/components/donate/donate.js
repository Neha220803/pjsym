import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner, Toast } from 'react-bootstrap';
import donatebg from '../images/donateimg.png';
import donateLogo from '../images/donateLogo.svg';
import '../../index.css';
import { Footer } from '../resuable/footer';
import { FaUser, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import BlurHashImage from '../blurhash';


const leftVarient = {
    initial: {
        x: -20,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
}

const rightVarient = {
    initial: {
        x: 20,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2
        }
    }
};



const ToastMessage = ({ showToast, onClose, toastVariant, status }) => (
    <Toast
        show={showToast}
        onClose={onClose}
        style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
            minWidth: '300px',
            textAlign: 'center'
        }}>
        <Toast.Header closeButton={true} className={`bg-${toastVariant} text-white`}>
            <strong className="me-auto"> PJSYM </strong>
        </Toast.Header>
        <Toast.Body><strong>{status.split('\n').map((line, index) => <div key={index}>{line}</div>)}</strong></Toast.Body>
    </Toast>
);

export const Donate = () => {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastVariant, setToastVariant] = useState('success');
    const [status, setStatus] = useState('');
    const donatebgblur = 'LUGIG]9abvtSysRkxajF?vRPR%xv';

    const toggleToast = (variant) => {
        setShowToast(true);
        setToastVariant(variant);
        window.scrollTo(0, 0);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            try {
                console.log('Form data:', { name, phoneNumber, email, address, city, state, country });
                const response = await fetch("http://localhost:5000/donate",
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            'name': name,
                            'phoneNumber': phoneNumber,
                            'email': email,
                            'address': address,
                            'city': city,
                            'state': state,
                            'country': country
                        }),
                    });

                if (response.ok) {
                    console.log('Form submitted successfully');
                    setLoading(true);
                    setValidated(false);
                    form.reset();
                    form.reset(); // Reset the form
                    setName(''); // Clear name field
                    setPhoneNumber(''); // Clear phoneNumber field
                    setEmail(''); // Clear email field
                    setAddress(''); // Clear address field
                    setCity(''); // Clear city field
                    setState(''); // Clear state field
                    setCountry('');
                    setStatus("Donation request sent successfully!\nYou will be contacted soon...");
                    toggleToast('success');
                } else {
                    console.error('Failed to submit form:', response.statusText);
                    setStatus("Failed to send your donation request!\nCheck your internet connection\nor try again later.");
                    toggleToast('danger');
                }
            } catch (error) {
                console.error('Error submitting form:', error.message);
                setStatus("Failed to send your donation request!\nCheck your internet connection and try again later.");
                toggleToast('danger');
            }
            finally {
                setLoading(false); // Stop loading animation
            }

        } else {
            setValidated(true);
        }
    };

    return (
        <div className='justify-text'>

            <BlurHashImage
                src={donatebg}
                blurhash={donatebgblur}
                alt="donate bg"
                className='img-fluid w-100'
            />

            {/* <img alt="mission img" src={donatebg} className="img-fluid w-100" /> */}
            <Container className='px-2'>
                <Row className='align-items-center'>
                    <Col xs={12} className='d-inline-flex align-items-center'>
                        <motion.div variants={leftVarient} initial="initial" whileInView="animate" className='each-head my-4' style={{ lineHeight: '1.5' }}>
                            <img src={donateLogo} width='60' height='60' alt="donate logo" className='me-2 mb-3' />
                            Donate Now
                        </motion.div>
                    </Col>
                </Row>

                <Row>
                    <Col md={6} lg={6}>
                        <motion.div className='green-box h5 p-5' variants={leftVarient} initial="initial" whileInView="animate" >
                            <p>
                                Patna Jesuits continue the mission of Jesus through the service of faith and promotion of
                                justice in the state of Bihar, one of the most backward states in India in terms of economy,
                                education and health care...
                            </p>
                            <br />
                            <p>We are involved in building human communities based on values
                                of freedom, fellowship and justice.</p>
                            <br />
                            <p>Join us in the venture… let us work together to improve the lives of
                                the neglected, the oppressed, the deprived, the most needy people of Bihar.</p>
                            <br />
                            <p>Contact Us to Donate</p>
                            <div className="d-flex align-items-center mb-3">
                                <FaUser className="me-2" />
                                <span>Fr. Joseph Sebastian<br /><h6>( Province Development Director)</h6></span>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <FaPhone className="me-2" />
                                <span>+91 9871528965 <br />+91 9939447576</span>
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
                        </motion.div>
                    </Col>
                    <Col md={6} lg={6}>
                        <motion.div variants={rightVarient} initial="initial" whileInView="animate">
                            <Form className='h5 blue-text' noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicname">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        isInvalid={validated && !name}
                                    />
                                    <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                        required
                                        isInvalid={validated && !email}
                                    />
                                    <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPhone">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter phone number"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        pattern="[0-9]{10}"
                                        required
                                        isInvalid={validated && !phoneNumber}
                                    />
                                    <Form.Control.Feedback type="invalid">Please enter a valid 10-digit phone number.</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicAddress">
                                    <Form.Label>Street Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter street address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                        isInvalid={validated && !address}
                                    />
                                    <Form.Control.Feedback type="invalid">Please enter your street address.</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter city"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        required
                                        isInvalid={validated && !city}
                                    />
                                    <Form.Control.Feedback type="invalid">Please enter your city.</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter state"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        required
                                        isInvalid={validated && !state}
                                    />
                                    <Form.Control.Feedback type="invalid">Please enter your state.</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicAmount">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter country"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        required
                                        isInvalid={validated && !country}
                                    />
                                    <Form.Control.Feedback type="invalid">Please enter your country.</Form.Control.Feedback>
                                </Form.Group>
                                <Button className='my-4' variant="primary" type="submit">
                                    {loading ? <Spinner animation="border" variant="light" size="sm" /> : 'Submit Details'}
                                </Button>
                            </Form>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
            <ToastMessage
                showToast={showToast}
                onClose={() => setShowToast(false)}
                toastVariant={toastVariant}
                status={status}

            />
            <Footer />
        </div>
    );
}
