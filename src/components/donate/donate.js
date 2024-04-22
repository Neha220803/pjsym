import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import donatebg from '../images/donateimg.png';
import '../../index.css';
import { Footer } from '../resuable/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const blueBoxStyle = {
    backgroundColor: '#cce6ff', // Light blue color
    padding: '20px',
    borderRadius: '5px',
};

const boldTextStyle = {
    fontWeight: 'bold',
};

const iconStyle = {
    marginRight: '5px',
};

const variants = {
    initial: {
        y: 300,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const Donate = () => {
    return (
        <motion.div variants={variants} initial="initial" whileInView="animate" >
            <img alt="mission img" src={donatebg} className="img-fluid w-100" />
            <Container>
                <Row>
                    <motion.div className='each-head my-4' variants={variants} initial="initial" animate="animate">
                        Donate Now
                    </motion.div>
                </Row>
                <Row>
                    <Col md={6} lg={6}>
                        <div style={blueBoxStyle}>
                            <p style={boldTextStyle}>Patna Jesuits continue the mission of Jesus through the service of faith and promotion of justice in the state of Bihar, one of the most backward states in India in terms of economy, education and health care...</p>
                            <p style={boldTextStyle}>We are involved in building human communities based on values of freedom, fellowship and justice.</p>
                            <p style={boldTextStyle}>Come… Join us in the venture… let us work together to improve the lives of the neglected, the oppressed, the deprived, the most needy people of Bihar.</p>
                            <p style={boldTextStyle}>Contact Us to Donate</p>
                            <p style={boldTextStyle}>Fr. Joseph Sebastian</p>
                            <p style={boldTextStyle}>Province Development Director</p>
                            <p style={boldTextStyle}>Provincial Residence, St. Xavier’s, West Gandhi Maidan,</p>
                            <p style={boldTextStyle}>Patna – 800 001</p>
                            <p style={boldTextStyle}><FontAwesomeIcon icon={faMobileAlt} style={iconStyle} /> Phone – +91 (0612) 221-9677</p>
                            <p style={boldTextStyle}><FontAwesomeIcon icon={faEnvelope} style={iconStyle} /> Email – pddpjs@gmail.com</p>
                        </div>
                    </Col>
                    <Col md={6} lg={6}>
                        <Form >

                            <Form.Group className="mb-3" controlId="formBasicname">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter phone number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicAddress">
                                <Form.Label>Street Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter street address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="Enter city" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicState">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="Enter state" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicAmount">
                                <Form.Label>Enter Amount</Form.Label>
                                <Form.Control type="text" placeholder="Enter amount" />
                            </Form.Group>

                            <Button className='my-4' variant="primary" type="submit">
                                Proceed to Payment
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </motion.div>
    )
}
