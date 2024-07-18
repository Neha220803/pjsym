import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import magisbg from '../images/Prog/magis/magis1.png';
import magisSide from '../images/Prog/magis/magis2.png';
import magisCenter from '../images/Prog/magis/magis3.png';
import { Footer } from '../resuable/footer';
import '../../index.css';
import { motion } from 'framer-motion';

const upvariants = {
    initial: {
        y: 10,
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

const MagisPage2023 = () => {
    return (
        <div className='justify-text'>
            <div style={{ backgroundColor: '#F6ECDA' }} className='px-2'>
                <Container className='pt-4'>
                    <Row className='mt-5 each-head2 justify-content-center text-center'>
                        <motion.div variants={upvariants} initial="initial" whileInView="animate">
                            MAGIS 2023
                        </motion.div>
                    </Row>
                </Container>
                <Container>
                    <Row className='mt-3 mb-3'>
                        <Col xs={12} className='d-flex justify-content-center'>
                            <motion.div variants={upvariants} initial="initial" animate="animate">
                                <Image fluid rounded alt="mission img" src={magisbg} className="mt-2 mb-3" />
                            </motion.div>
                        </Col>
                    </Row>
                    <Row className='lead h5'>
                        <motion.div variants={upvariants} initial="initial" whileInView="animate">
                            <strong>
                                <h5>
                                    <p>MAGIS 2023, was a four days event, which proved to be a transformative and enriching experience for all Magis participants all over India and Nepal. Rooted in the Ignatian tradition of seeking excellence, Magis aimed to holistic personal growth, community building, and a deeper connection with one's inner self in order to establish a hope-filled future. This Youth Convention was organized by Jesuit conference of South Asia in St. John’s School, Ranchi, Jharkhand. As students we found ourselves very much blessed and lucky to attend this Mega Event.</p>
                                    <p>The event provided a unique opportunity for each individual to explore, connect, serve, and contemplate, fostering personal and collective growth. All the participants were very happy to carry the lessons learnt during the program. This event became for everyone a catalyst for positive change and a source of inspiration for living a purposeful and meaningful life. Hence, we are very grateful to our college management especially to our Principal Fr. Dr. Martin Poras SJ, Vice-Principal Fr. Dr. Sushil Bilung SJ who gave us this golden opportunity and allowed us to attend this program. Our special thanks to our Co-ordinator Fr. Jeevan Isahak SJ and Fr. Joyson Fernandes SJ, the acting Youth Director of Patna who accompanied us throughout this Event.</p>
                                </h5>
                            </strong>
                        </motion.div>
                    </Row>
                    <Row className='justify-content-center d-flex align-items-center mb-4'>
                        <Col lg={4} className="d-flex align-items-center justify-content-center">
                            <motion.div variants={leftVarient} initial="initial" whileInView="animate">
                                <img src={magisSide} alt='youth side pic' className="img-fluid mt-3" />
                            </motion.div>
                        </Col>
                        <Col lg={8} className="d-flex align-items-center justify-content-center">
                            <motion.div variants={rightVarient} initial="initial" whileInView="animate">
                                <img src={magisCenter} alt='youth side pic' className="img-fluid mt-3" /></motion.div>
                        </Col>
                    </Row>
                </Container>

            </div>
            <Footer />
        </div>
    );
}

export default MagisPage2023;
