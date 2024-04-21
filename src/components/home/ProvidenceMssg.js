import React from 'react'
import '../../index.css';
import { Container, Row, Col } from 'react-bootstrap';
import topleft1 from '../images/topleft1.png'
import botright1 from '../images/botright1.png'
import director from '../images/director.png';
import { motion } from 'framer-motion';

const leftVarient = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const rightVarient = {
    initial: {
        x: 500,
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

export const ProvidenceMssg = () => {
    return (
        <section>
            <div className='overlap-group'>
                <img className="wave-left1" alt="left1" src={topleft1} />

                <img className="wave-left2" alt="right1" src={botright1} />
            </div>
            <Container className='mt-5 mb-4' >
                <Row className=''>
                    <Col lg={4} className='mt-5 mb-5 pt-5' >
                        <motion.img src={director} alt="directors mssg" variants={leftVarient} initial="initial" whileInView="animate" />
                    </Col>

                    <Col lg={8}>
                        <motion.div className='ms-5 h5' variants={rightVarient} initial="initial" whileInView="animate" >
                            <Row>
                                <motion.div className='each-head d-flex justify-content-center my-4' variants={rightVarient} initial="initial" whileInView="animate">Director's Message</motion.div>
                            </Row>
                            <motion.p variants={rightVarient} initial="initial" whileInView="animate">I, as the chairperson of this ministry, welcome you all to this new website of us.<br></br><br></br>
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
                            </motion.p>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}
