import React from 'react'
import '../../index.css';
import { Container, Row, Col } from 'react-bootstrap';
import topleft1 from '../images/topleft1.png'
import botright1 from '../images/botright1.png'
import director from '../images/director.png';

export const ProvidenceMssg = () => {
    return (
        <section>
            <div className='overlap-group'>
                <img className="wave-left1" alt="left1" src={topleft1} />

                <img className="wave-left2" alt="right1" src={botright1} />
            </div>
            <Container className='mt-5 mb-4' >
                <Row className=''>
                    <Col lg={4} className='mt-5 mb-5 pt-5'>
                        <img src={director} alt="directors mssg" />
                    </Col>

                    <Col lg={8}>
                        <div className='ms-5 h5'>
                            <Row>
                                <div className='each-head d-flex justify-content-center my-4'>Director's Message</div>
                            </Row>

                            <p>I, as the chairperson of this ministry, welcome you all to this new website of us.<br></br><br></br>
                                The ministry has many young Jesuits priests as its members. We as one team are privileged to lead the efforts of motivating,
                                empowering and engaging the vibrant youth of our mission area. We strongly believe and advocate in creating an inclusive
                                environment for our youth where they could explore and exhibit their talents, develop their leadership skills and actively
                                involve in creating a just society. We try to do all these through spiritual formation, social analysis and outreach,
                                value systems awareness, educational initiatives and training. We try to develop in them the critical thinking skill
                                and a deep sense of responsibility towards each other and environment. <br></br><br></br>
                                I invite you all to explore our new website to know more about our mission works among the youth of Bihar and
                                Uttar Pradesh in India.<br></br><br></br>
                                Thank you for showing interest in our works. Let us together create a better<br></br> world for us and the generations
                                to come. We look forward to your <br></br> collaboration through contribution and suggestions <br></br>for the youth works.
                            </p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section >
    )
}
