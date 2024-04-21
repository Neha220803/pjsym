import { Container, Row, Col } from 'react-bootstrap';
import vismispic from '../images/vismis.png';

const FullMissVissPage = () => {
    return (
        <section>
            <div style={{ backgroundColor: "#124076", color: "white" }}>
                <Container className='d-flex justify-content-center align-items-center'>
                    <Row className='mt-5'>
                        <h1>Mission and Vission</h1>
                    </Row>
                </Container>
                <Container className='d-flex justify-content-center align-items-center'>
                    <Row>
                        <img alt="mission img" src={vismispic} className="mt-5 mb-3" style={{ maxWidth: '1000px' }} />
                    </Row>
                </Container>
                <Container>
                    <Row className='lead pb-5 h5'>
                        Rooted and grounded in the love of Jesus Christ, the charism of the Society of Jesus, and in the lives of our people, we Patna Jesuits continue the mission of Jesus through the service of faith and promotion of justice. This involves building human communities based on the Gospel values of freedom, fellowship and justice. We do this by making a preferential option for the poor, deep insertion into the cultures of our people and through dialogue with other members of other faiths and with all those working for an ecologically sensitive and just society
                        Vision and Mission of the Patna Jesuit Youth ministry 22nd April 2012 promulgated In order to continue the mission of Jesus Christ among the youth, we the Patna Jesuits rooted and grounded in His Love, strive to empower the youth, especially the unorganized youth and lend support to youth movements by harnessing their potentialities while accompanying them in the process of understanding and responding to the existing realities of our land in a constructive way. This involves igniting the fire of dynamism, creativity and search for meaningfulness in life based on the Gospel values in order to build a just and humane and ecologically sensitive society
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default FullMissVissPage