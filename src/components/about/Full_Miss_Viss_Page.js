import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import vismispic from '../images/vismis.png';
import { motion } from 'framer-motion';
import '../../index.css';

const upvariants = {
    initial: {
        y: 200,
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

const FullMissVissPage = () => {
    return (
        <section id="vission" className='d-flex align-items-center justify-content-center px-2' style={{ backgroundColor: "#124076", color: "white" }}>

            <div className="d-flex align-items-center justify-content-center">
                <motion.div variants={upvariants} initial="initial" whileInView="animate" >
                    <Container className='d-flex align-items-center justify-content-center flex-column'>
                        <Container className='my-4'>
                            <Row>
                                <motion.div variants={upvariants} initial="initial" whileInView="animate" >
                                    <h1 className="text-center" style={{ fontFamily: 'Inknut Antiqua' }}>Mission and Vision</h1>
                                </motion.div>
                            </Row>
                        </Container>


                        <Row>
                            <Col size={12} className='d-flex align-items-center justify-content-center mb-4'>
                                <motion.div variants={upvariants} initial="initial" whileInView="animate" >
                                    <img alt="mission img" src={vismispic} className="img-fluid" style={{ width: '1000px' }} />
                                </motion.div>
                            </Col>
                        </Row>
                        <Row className='h5'>
                            <div variants={upvariants} initial="initial" whileInView="animate" >
                                <p variants={upvariants} initial="initial" whileInView="animate">
                                    Rooted and grounded in the love of Jesus Christ, the charism of the Society of Jesus, and in the
                                    lives of our people, we Patna Jesuits continue the mission of Jesus through the service of faith
                                    and promotion of justice. This involves building human communities based on the Gospel values of freedom,
                                    fellowship and justice. We do this by making a preferential option for the poor, deep insertion into the
                                    cultures of our people and through dialogue with other members of other faiths and with all those working for an ecologically sensitive and just society
                                    Vision and Mission of the Patna Jesuit Youth ministry 22nd April 2012 promulgated In order to continue
                                    the mission of Jesus Christ among the youth, we the Patna Jesuits rooted and grounded in His Love, strive
                                    to empower the youth, especially the unorganized youth and lend support to youth movements by harnessing
                                    their potentialities while accompanying them in the process of understanding and responding to the existing
                                    realities of our land in a constructive way. This involves igniting the fire of dynamism, creativity and
                                    search for meaningfulness in life based on the Gospel values in order to build a just and humane and
                                    ecologically sensitive society
                                </p>
                            </div>
                        </Row>
                    </Container>
                </motion.div>
            </div>
        </section>
    )
}

export default FullMissVissPage;
