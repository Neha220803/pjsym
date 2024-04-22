import React from 'react'
import '../../index.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import missimg from '../images/mission.png'
import visimg from '../images/vission.png'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const upvariants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
};

export const MissionVission = () => {
    const navigate = useNavigate();
    return (
        <section style={{ backgroundColor: '#F6ECDA' }}>
            <motion.div variants={upvariants} initial="initial" whileInView="animate">
                <Container>
                    <Row className='justify-content-start' >
                        <div className='col-lg-2'>
                            <div className='each-head2'>Mission</div>
                        </div>
                    </Row>
                    <Row className='mt-2'>
                        <div className='col-1'></div>
                        <div className='col-7 h5'>To continue the mission of Jesus Christ among the youth, rooted and grounded in His love,
                            striving to empower the youth, especially the unorganized youth, and lend support to youth movements by harnessing their
                            potentialities. We accompany them in the process of understanding and responding to the existing realities of our land
                            in a constructive way, igniting the fire of dynamism, creativity, and search for meaningfulness in life based on Gospel
                            values. Our goal is to build a just, humane, and ecologically sensitive society.
                            <br></br><Button variant="primary mt-2" onClick={() => navigate('/about')}>Read More...</Button>
                        </div>
                        <div className='col-4'><img className='img-fluid' alt="mission img" src={missimg} /></div>

                    </Row>
                </Container>
                <Container>
                    <Row className='justify-content-end'>
                        <Col lg={4}>
                        </Col>
                        <Col lg={8}> <div className='each-head2'>Vision</div>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <div className='col-4'><img className='img-fluid' alt="mission img" src={visimg} /></div>
                        <div className='col-7 h5' >The mission of the Patna Jesuits is to empower the youth, especially the unorganized youth,
                            by accompanying them in understanding and responding to the existing realities of our land. We strive to harness
                            their potentialities, ignite their fire for dynamism and creativity, and guide them in living out Gospel values.
                            Through our work, we aim to build a just, humane, and ecologically sensitive society.
                            <br></br>
                            <Button variant="primary mt-2" onClick={() => navigate('/about')}>Read More...</Button>
                        </div>
                        <div className='col-1'></div>
                    </Row>
                </Container>

            </motion.div>


        </section>
    )
}
