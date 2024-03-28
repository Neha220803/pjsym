import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import donatebg from '../images/donateimg.png'
import '../../index.css';
import { Footer } from '../resuable/footer';



export const Donate = () => {
    return (
        <div>
            <img alt="mission img" src={donatebg} className="img-fluid w-100" />

            <section>
                <Container>
                    <Row>
                        <div className='d-flex my-5 justify-content-start'><h1>Donate Now</h1></div>
                    </Row>
                    <div>
                        <Form>
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
                                        {/* <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text> */}
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
                        </Form>
                    </div>
                </Container>

            </section>
            <Footer />

        </div>

    )
}
