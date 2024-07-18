import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import about1 from '../images/AbtDesc.png';
import { motion } from 'framer-motion';

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


const AboutDec = () => {
  return (
    <section className="d-flex align-items-center justify-content-center px-2">
      <Container>
        <Row>
          <motion.div
            className='each-head d-flex my-2 ms-lg-5 justify-content-center text-center'
            variants={rightVarient}
            initial="initial"
            whileInView="animate"
          >
            About Us
          </motion.div>
        </Row>
        <Row className='d-flex align-items-center justify-content-center'>
          <Col lg={5} md={12} xs={12} sm={12} className='d-flex align-items-center justify-content-center'>
            <motion.img
              src={about1}
              alt="About image"
              className="img-fluid rounded"
              variants={leftVarient}
              initial="initial"
              whileInView="animate"
            />
          </Col>
          <Col lg={7} md={12} xs={12} sm={12} className='h4 mt-3 d-flex align-items-center justify-content-start flex-column'>

            <motion.p
              variants={leftVarient}
              initial="initial"
              whileInView="animate"
            >
              “We cannot confine ourselves just to Catholics. Rather we have to reach out to the youth of all religions and no religion.
              This is where the true wealth of humankind is. That is where the destiny of our world is being shaped. Therefore, that is
              where the Lord wishes that we Jesuit be present actively and effectively as men on the frontiers of service to His Kingdom”,
            </motion.p>
            <motion.p
              variants={rightVarient}
              initial="initial"
              whileInView="animate"
            >
              In order to continue the mission of Jesus Christ among the youth, we the Patna Jesuits rooted and grounded in His Love,
              strive to empower the youth, especially the unorganized youth and lend support to youth movements by harnessing their
              potentialities while accompanying them in the process of understanding and responding to the existing realities of our land
              in a constructive way.
            </motion.p>
            <motion.p
              variants={rightVarient}
              initial="initial"
              whileInView="animate"
            >
              This involves igniting the fire of dynamism, creativity and search for meaningfulness in life based
              on the Gospel values in order to build a just and humane and ecologically sensitive society.
            </motion.p>
          </Col>
        </Row>
      </Container>
    </section >
  )
}

export default AboutDec;
