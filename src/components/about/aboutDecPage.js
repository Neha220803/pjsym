import { Container, Row, Col } from 'react-bootstrap';
import about1 from '../images/about1.png';
import '../../index.css';

const AboutDec = () => {
  return (
    <section>

      <Container className='d-flex my-5 align-item-center justify-content-start'>
        <Row>
          <Col md={5}>
            <img src={about1} alt="About1" className="img-fluid" style={{ maxHeight: '550px' }} />
          </Col>
          <Col md={7} className='h4'>
            <div className='each-head d-flex my-2 justify-content-start'>About Us</div>
            <p>“We cannot confine ourselves just to Catholics. Rather we have to reach out to the youth of all religions and no religion. This is where the true wealth of human kind is. That is where the destiny of our world is being shaped. Therefore, that is where the Lord wishes that WE Jesuits be present actively and effectively as men on the frontiers of service to His Kingdom”
              In order to continue the mission of Jesus Christ among the youth, we the Patna Jesuits rooted and grounded in His Love, strive to empower the youth, especially the unorganized youth and lend support to youth movements by harnessing their potentialities while accompanying them in the process of understanding and responding to the existing realities of our land in a constructive way. This involves igniting the fire of dynamism, creativity and search for meaningfulness in life based on the Gospel values in order to build a just and humane and ecologically sensitive society.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutDec