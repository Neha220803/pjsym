import React from 'react'
import '../../index.css';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import missimg from '../images/mission.png'
import visimg from '../images/vission.png'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const upvariants = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.1,
        }
    }
};


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

export const MissionVission = () => {
    const navigate = useNavigate();
    return (
        <section style={{ backgroundColor: '#F6ECDA' }} className="d-flex align-items-center justify-content-center flex-column px-2">

            <Container>
                <Row className='justify-content-start'>
                    <motion.div variants={leftVarient} initial="initial" whileInView="animate">
                        <motion.div className='each-head2'>Mission</motion.div>
                    </motion.div>

                </Row>
                <Row className=''>
                    <Col lg={8} className='h5'>
                        <motion.div variants={leftVarient} initial="initial" whileInView="animate">
                            <p>To continue the mission of Jesus Christ among the youth, rooted and grounded in His love,
                                striving to empower the youth, especially the unorganized youth, and lend support to youth
                                movements by harnessing their potentialities. We accompany them in the process of understanding
                                and responding to the existing realities of our land in a constructive way, igniting the fire of
                                dynamism, creativity, and search for meaningfulness in life based on Gospel values. Our goal is to
                                build a just, humane, and ecologically sensitive society.
                            </p>
                            <Button variant="primary mt-2" onClick={() => navigate('/about/#vission')}><strong>Read More</strong> <FaArrowRight className='ms-1 mb-1' /></Button>
                        </motion.div>
                    </Col>
                    <Col lg={4}>
                        <motion.div variants={rightVarient} initial="initial" whileInView="animate">
                            <img className='img-fluid d-none d-sm-none d-md-none d-lg-block' alt="mission img" src={missimg} />
                        </motion.div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='justify-content-end'>
                    <Col lg={4}>
                    </Col>
                    <Col lg={8}>
                        <motion.div variants={rightVarient} initial="initial" whileInView="animate">
                            <div className='each-head2'>Vision</div>
                        </motion.div>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center align-items-center mb-5'  >
                    <Col lg={4} className='d-flex justify-content-center align-items-center' >
                        <motion.div variants={leftVarient} initial="initial" whileInView="animate">
                            <Image fluid src={visimg} />
                        </motion.div>
                    </Col>
                    <Col lg={8} className='h5 mt-3'>
                        <motion.div variants={rightVarient} initial="initial" whileInView="animate">
                            <p>
                                The mission of the Patna Jesuits is to empower the youth, especially the unorganized youth,
                                by accompanying them in understanding and responding to the existing realities of our land.
                                We strive to harness their potentialities, ignite their fire for dynamism and creativity, and
                                guide them in living out Gospel values. Through our work, we aim to build a just, humane, and
                                ecologically sensitive society.
                            </p>
                            <Button variant="primary" onClick={() => navigate('/about#vission')}><strong>Read More</strong> <FaArrowRight className='ms-1 mb-1' /></Button>

                        </motion.div>
                    </Col>
                </Row>
            </Container>

        </section>
    );
}
