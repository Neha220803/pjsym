import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import about1 from '../images/about1.png';
import { motion } from 'framer-motion';

const leftVariant = {
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

const rightVariant = {
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

const AboutDec = () => {
  return (
    <section>
      <Container className='align-items-center justify-content-center'>
        <Row className='align-items-center justify-content-center'>
          <Col md={5} className='my-4 d-none d-sm-block'>
            <motion.img
              src={about1}
              alt="About image"
              className="img-fluid my-5"
              style={{ maxHeight: '550px' }}
              variants={leftVariant}
              initial="initial"
              animate="animate"
            />
          </Col>
          <Col md={7} xs={12} className='h4'>
            <motion.div
              className='each-head d-flex my-2  justify-content-start'
              variants={rightVariant}
              initial="initial"
              animate="animate"
            >
              About Us
            </motion.div>
            <motion.p
              variants={rightVariant}
              initial="initial"
              animate="animate"
            >
              “We cannot confine ourselves just to Catholics. Rather we have to reach out to the youth of all religions and no religion. This is where the true wealth of humankind is. That is where the destiny of our world is being shaped. Therefore, that is where the Lord wishes that WE Jesuits be present actively and effectively as men on the frontiers of service to His Kingdom” In order to continue the mission of Jesus Christ among the youth, we the Patna Jesuits rooted and grounded in His Love, strive to empower the youth, especially the unorganized youth and lend support to youth movements by harnessing their potentialities while accompanying them in the process of understanding and responding to the existing realities of our land in a constructive way. This involves igniting the fire of dynamism, creativity and search for meaningfulness in life based on the Gospel values in order to build a just and humane and ecologically sensitive society.
            </motion.p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutDec;
