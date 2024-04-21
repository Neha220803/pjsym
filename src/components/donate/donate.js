import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import donatebg from '../images/donateimg.png'
import '../../index.css';
import { Footer } from '../resuable/footer';
import { motion } from 'framer-motion';

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
            <section>
                <Container>
                    <Row>
                        <motion.div className='each-head my-4' variants={variants} initial="initial" animate="animate">
                            Donate Now</motion.div>
                    </Row>
                    <div>
                        <motion.Form variants={variants} initial="initial" whileInView="animate">
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicAmount">
                                        <Form.Label>Enter Amount</Form.Label>
                                        <Form.Control type="text" placeholder="Enter amount" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPhone">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" placeholder="Enter phone number" />
                                    </Form.Group>
                                </Col>
                                <Col>
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

                                    <Form.Group className="mb-3" controlId="formBasicPincode">
                                        <Form.Label>Pincode</Form.Label>
                                        <Form.Control type="text" placeholder="Enter pincode" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button className='mt-4' variant="primary" type="submit">
                                Proceed to Payment
                            </Button>
                        </motion.Form>
                    </div>
                </Container>
            </section>
            <Footer />
        </motion.div>

    )
}
