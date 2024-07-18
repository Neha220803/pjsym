import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import worldyouth from '../images/Prog/prog4/img1.png';
import { Footer } from '../resuable/footer';
import '../../index.css';
import youthdown from '../images/Prog/prog4/img2.png'
import youthmid from '../images/Prog/prog4/img3.png'
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
        x: -500,
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



const YouthMinistry = () => {
    return (


        <div className='justify-text'>
            <div style={{ backgroundColor: '#F6ECDA' }} className='px-2' >

                <Container className='d-flex justify-content-center align-items-center'>

                    <motion.div variants={upvariants} initial="initial" whileInView="animate">
                        <Row className='mt-5'>
                            <h1 className='mt-5 each-subhead2 text-center'> WORLD YOUTH DAY - 2023 </h1> </Row>
                    </motion.div>

                </Container>
                <Container className='d-flex justify-content-center align-items-center'>

                    <motion.div variants={upvariants} initial="initial" whileInView="animate"> <Row>
                        <Image fluid rounded alt="mission img" src={worldyouth} className="mt-3 mb-3" /></Row></motion.div>

                </Container>
                <Container className='d-flex justify-content-center align-items-center flex-column'>
                    <Row className='lead pb-2 h-1 d-flex justify-content-center align-items-center'>

                        <strong>
                            <h3>
                                <motion.div variants={upvariants} initial="initial" whileInView="animate">
                                    <p> We had MAGIS LISBON 2023 and World Youth Day in July and August 2023 in Portugal. We were 41 members from JCSA delegation (35 Youth and 6 Jesuits from different Zones). From Our Province, Mr. Aryan Samuel from Ara, Miss. Anisha Anthony from SXCMT and myself went to Portugal.</p>
                                    <p>We reached Lisbon on 21 July 2023. On the 23rd we went to Fatima and spent the day there. We had two days program in Lisbon and then we were sent to different places for our Ignatian experiments. I went to Spain for the pilgrimage (walking to Santiago de Compostella). Our two youth were in Portugal for the experiment. Again, we came to Lisbon on 29 July night. On the 31st Fr. General celebrated the Feast Day Eucharistic celebration. On that day evening we ended the MAGIS 2023. Then we began the ‘World Youth Day’ from 1 to 6 August. It was very enriching to see the sea of youth and their faith. We all had wonderful time and experiences.</p>

                                </motion.div>
                            </h3>
                        </strong>
                    </Row>
                    <Row className='d-flex justify-content-center flex-column'>
                        <motion.div variants={upvariants} initial="initial" whileInView="animate" className='d-flex justify-contents-center align-items-center'>
                            <Image fluid rounded src={youthdown} alt='youthdownpic' className="mb-2" /></motion.div>
                    </Row>
                    <Row className='lead pb-2 h-1 d-flex justify-content-center align-items-center'>

                        <strong>
                            <h3>
                                <motion.div variants={upvariants} initial="initial" whileInView="animate">
                                    <p> Then we had AICUF national council meeting from 12 to 15 August 2023 in Chennai. Fr. Prakash
                                        went to Chennai from Mumbai. Fr. Jeevan took 5 youth from Patna and Varanasi and reached Chennai
                                        on the 12th morning. Our youth participated in the meeting enthusiastically. Then Fr. Prakash went
                                        to Vijayawada to participate in JYMSA annual meeting.</p></motion.div>
                            </h3>
                        </strong>
                    </Row>


                    <Row className='justify-content-center'>
                        <motion.div variants={upvariants} initial="initial" whileInView="animate">
                            <Image fluid rounded src={youthmid} alt='youthdownpic' className="mb-5" style={{ minWidth: '100px' }} /></motion.div>
                    </Row>
                </Container>

            </div>
            <Footer />
        </div >
    )
}

export default YouthMinistry;
