import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import youth from '../images/Prog/prog2/img1.png';
import { Footer } from '../resuable/footer';
import '../../index.css';
import youthside from '../images/Prog/prog2/img2.png';
import youthright from '../images/Prog/prog2/img3.png';
import { motion } from 'framer-motion';

const upvariants = {
    initial: {
        y: 50,
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


const YouthMinistry = () => {
    return (
        <div className='justify-text '>
            <div style={{ backgroundColor: '#F6ECDA' }} className='px-2'>
                <Container className='py-4'>
                    <Row className='justify-content-center mt-5'>
                        <motion.div variants={upvariants} initial="initial" whileInView="animate">
                            <div className='each-subhead2 text-center'>YOUTH MINISTRY COMMISION MEETING</div>
                        </motion.div>
                    </Row>

                    <Row className='d-flex justify-content-center'>
                        <motion.div variants={upvariants} initial="initial" whileInView="animate" className='d-flex justify-content-center'>
                            <Image fluid rounded alt="mission img" src={youth} className="mt-4 mb-3" />
                        </motion.div>
                    </Row>

                    <Row className='justify-content-center lead mt-2 h-1'>
                        <motion.div variants={upvariants} initial="initial" whileInView="animate">
                            <strong><h3><p>We had the youth commission meeting from 10th-12th March 2023 in Vidya Niwas,
                                Varanasi. It was a very fruitful meeting as we have planned meticulously for the forthcoming year.
                                We evaluated our works of the past year and discussed about the coming events of the year. We have
                                organized <span style={{ color: "#124076" }}>“Summer Skill Development Program 2023”</span> from 23 April to 8 May 2023 at Atmadarshan, Patna.
                                There are total of 48 inter completed youth; 32 girls and 16 boys from around 17 parishes. They
                                are taught spoken English, writing skills, GANGA LAHAR – MAY - JUNE, 2023 12 Biology, speech drills,
                                certificate computer course, motivation, Spirituality and so on. Fr. Joseph Sebastian, Fr. Martin and
                                the college community have been very helpful to us in this program. Our sincere thanks to all those
                                who helped us in this program, very specially Sr. Monica SCN, Sr. Priya SCN, Frs. Christy, Sushil,
                                Pulikal, Jeevan, Sebastian Alphonse, Sijo, Sr.Anita CJ, Sr. Pushpa, Mr. Amarjeet, Fr. Alwyn and the
                                team.</p></h3></strong>
                        </motion.div>
                    </Row>

                    <Row className='justify-content-center d-flex align-items-center'>
                        <Col lg={6} className="d-flex align-items-center justify-content-center">
                            <motion.div variants={leftVarient} initial="initial" whileInView="animate">
                                <img src={youthside} alt='youth side pic' className="img-fluid mt-3" />
                            </motion.div>
                        </Col>
                        <Col lg={6} className="d-flex align-items-center justify-content-center">
                            <motion.div variants={rightVarient} initial="initial" whileInView="animate">
                                <img src={youthright} alt='youth side pic' className="img-fluid mt-3" /></motion.div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default YouthMinistry;