import React from 'react'
import '../../index.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import missimg from '../images/mission.png'
import visimg from '../images/vission.png'
import { motion } from 'framer-motion';

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
                        <div className='col-7 h5'>Lorem ipsum dolor sit amet consectetur. sit. Siamet nunc aliquam nisi sit. Sit morbi aliquam aliquet velit elit... lor sit amet consectetur. sit. Si lor sit amet consectetur. sit. Silor sit amet consectetur. sit. Si Lorem ipsum dolor sit amet consectetur. Tellus massa cum amet nunc aliquam nisi sit. Sit morbi aliquam aliquet velit elit...Lorem ipsum dolor sit amet consectetur. Tellus massa cum amet nunc aliquam nisi sit. Sit morbi aliquam aliquet velit elit...Lorem ipsum dolor sit amet consectetur. Tellus massa cum amet nunc aliquam nisi sit. Sit morbi aliquam aliquet velit elit... velit elit...
                            <br></br><Button variant="primary mt-2">Read More...</Button>
                        </div>
                        <div className='col-4'><img className='img-fluid' alt="mission img" src={missimg} /></div>

                    </Row>
                </Container>
                <Container>
                    <Row className='justify-content-end'>
                        <Col lg={4}>
                        </Col>
                        <Col lg={8}> <div className='each-head2'>Vission</div>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <div className='col-4'><img className='img-fluid' alt="mission img" src={visimg} /></div>
                        <div className='col-7 h5' >Lorem ipsum dolor sit amet consectetur. sit. Siamet nunc aliquam nisi sit. Sit morbi aliquam aliquet velit elit... lor sit amet consectetur. sit. Si lor sit amet consectetur. sit. Silor sit amet consectetur. sit. Si Lorem ipsum dolor sit amet consectetur. Tellus massa cum amet nunc aliquam nisi sit. Sit morbi aliquam aliquet velit elit...Lorem ipsum dolor sit amet consectetur. Tellus massa cum amet nunc aliquam nisi sit. Sit morbi aliquam aliquet velit elit...Lorem ipsum dolor sit amet consectetur. Tellus massa cum amet nunc aliquam nisi sit. Sit morbi aliquam aliquet velit elit... velit elit...
                            <br></br><Button variant="primary mt-2">Read More...</Button>
                        </div>
                        <div className='col-1'></div>
                    </Row>
                </Container>

            </motion.div>


        </section>
    )
}
