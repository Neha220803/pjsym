import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import donatebg from '../images/donateimg.png';
import '../../index.css';
import { Footer } from '../resuable/footer';

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
                    <Col md={6} lg={6} className='h6'>
                        <p>Patna Jesuits continue the mission of Jesus through the service of faith and promotion of justice in the state of Bihar, one of the most backward states in India in terms of economy, education and health care...</p>
                        <p>We are involved in building human communities based on values of freedom, fellowship and justice.</p>
                        <p>Come… Join us in the venture… let us work together to improve the lives of the neglected, the oppressed, the deprived, the most needy people of Bihar.</p>
                        <p>Contact Us to Donate</p>
                        <p>Fr. Joseph Sebastian</p>
                        <p>Province Development Director</p>
                        <p>Provincial Residence, St. Xavier’s, West Gandhi Maidan,</p>
                        <p>Patna – 800 001</p>
                        <p>Phone – +91 (0612) 221-9677</p>
                        <p>Email – pddpjs@gmail.com</p>
                    </Col>
                    <Col md={6} lg={6}>
                        <Form className='h6'>

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
