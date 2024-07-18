import { Container, Col, Row, Image } from 'react-bootstrap'
import herosbg from '../images/herosimg.png';
import { Footer } from '../resuable/footer';
import sainuma1 from '../images/Heros/sainuma/sainuma1.png';
import sainuma2 from '../images/Heros/sainuma/sainuma2.png';
import sainuma3 from '../images/Heros/sainuma/sainuma3.png';
import sainuma4 from '../images/Heros/sainuma/sainuma4.png';
import sainuma5 from '../images/Heros/sainuma/sainuma5.png';
import sainuma6 from '../images/Heros/sainuma/sainuma6.png';
import sainuma7 from '../images/Heros/sainuma/sainuma7.png';
import '../../index.css';
import { motion } from 'framer-motion';

const upvariants = {
    initial: {
        y: 30,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
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

const SainumaPage = () => {
    return (
        <div className='justify-text '>
            <img alt="mission img" src={herosbg} className="img-fluid w-100" />
            <div className='px-2'>
                <Container>
                    <Row>
                        <motion.div variants={upvariants} initial="initial" whileInView="animate" className='each-subhead text-center my-3' >
                            SAINUMA’s Symphony: From Burden to Beacon
                        </motion.div>

                        <motion.div variants={upvariants} initial="initial" whileInView="animate" className='quotes-head text-center px-4'>“For those who said, I CANNOT – look at me I CAN and I DID” <br /> – Sainuma Kumari</motion.div>
                        <Col lg={4} className='p-4 d-flex align-items-center justify-content-center'>
                            <motion.img src={sainuma1} className='img-fluid rounded' alt="sainuma img 1 " style={{ maxHeight: '200px' }}
                                variants={leftVarient} initial="initial" whileInView="animate"
                            />
                        </Col>
                        <Col lg={8}>
                            <motion.div variants={rightVarient} initial="initial" whileInView="animate" className='lead pt-4 mt-lg-2'>
                                <strong><p>In the sun-kissed valleys of North-East of India, where ancient traditions wove the fabric of existence, Sainuma Kumari’s story unfolds
                                    - a symphony of resilience, courage and confidence. Born in a family of seven sisters and one brother, Sainuma was the unexpected note -
                                    the girl when a boy was anticipated. Her father, a man shackled by societal norms, saw her as excess baggage. The weight of her existence
                                    pressed upon her like monsoon clouds, threatening to drown her spirit.</p></strong>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
                <Container className="d-flex align-items-center justify-content-center">
                    <Row>
                        <Col lg={6} md={12} sm={12} className='lead pt-4 d-flex align-items-center justify-content-center'>
                            <motion.div variants={leftVarient} initial="initial" whileInView="animate">
                                <strong> <p>But destiny had other plans; there appeared Tony Penda, a Jesuit with eyes that held galaxies. His empathy
                                    wrapped around Sainuma like a protective cloak.<strong><span style={{ color: "#124076" }}>“You can”</span></strong>he whispered, and those two words became her anthem.
                                    Tony was more than a guide; he was a loving father figure who chiseled strength from her fragility. The Society of Jesus,
                                    in the form of three Jesuits, extended their hands. Their mission was to uplift souls and nurture minds. They saw Sainuma’s
                                    potential—the one strength she possessed - the ability to learn and persevere. They ignited her longing for freedom, stoking the
                                    fire to prove that she could defy gravity.</p></strong>
                            </motion.div>
                        </Col>
                        <Col lg={3} md={6} sm={6} xs={6} className='d-flex mb-2 align-items-center justify-content-center'>
                            <motion.img className='img-fluid rounded' src={sainuma2} alt="sainuma motion.img 1" style={{ maxHeight: '280px' }}
                                variants={rightVarient} initial="initial" whileInView="animate" />
                        </Col>
                        <Col lg={3} md={6} sm={6} xs={6} className='d-flex align-items-center justify-content-center'>
                            <motion.img className='img-fluid rounded' src={sainuma3} alt="sainuma img 1" style={{ maxHeight: '280px' }}
                                variants={rightVarient} initial="initial" whileInView="animate" />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col lg={4} className='py-3 d-flex align-items-center justify-content-center'>
                            <motion.img className='img-fluid rounded' src={sainuma4} alt="sainuma img 1" variants={leftVarient} initial="initial" whileInView="animate" />
                        </Col>

                        <Col lg={8}>
                            <motion.div variants={rightVarient} initial="initial" whileInView="animate" className='lead py-lg-5'>
                                <strong><p>The plan unfolded. Sainuma taught 15 to 20 children; her voice weaving dreams into their hearts.
                                    For six to seven years, she balanced between studies and mentoring. The classroom became her sanctuary,
                                    where she sculpted futures while shaping her own. Transitional moments bloomed. Counselling sessions were her
                                    compass that guided her through storms of self-doubt. Macro-level care enveloped her, while micro-level lessons
                                    taught her resilience. Dancing and music became her secret gardens where she blossomed. The platform beneath
                                    her feet whispered, ‘Realize your worth’.</p></strong>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <motion.div variants={upvariants} initial="initial" whileInView="animate" className='lead px-2'>
                            <strong> <p>In the meantime, challenges loomed; proposals arrived like moths drawn to her beauty. But Sainuma
                                resisted. Marriage wasn’t her destiny but liberation was. She defied norms, refusing to be a pawn in society’s
                                game. And then, there was a transformation. From a timid soul to a beacon of hope. Hopeless whispers became
                                anthems of courage. She donned the nurse’s uniform, stitching wounds with compassion. The children she mentored
                                multiplied - five more souls dancing to her rhythm.</p>
                                <p>
                                    From forested hills to New Delhi’s bustling streets, Sainuma’s journey echoed.
                                    She was no longer a burden; she was a symphony - a testament to love, resilience,
                                    and the power of <strong><span style={{ color: "#124076" }}>“You can”</span></strong> In her eyes, galaxies sparkled - the legacy of Tony Penda
                                    and the Jesuits who believed in her. Sainuma Kumari - the girl who defied gravity, who spun hope
                                    from threads of despair. Her brand? A beacon for every forgotten note, whispering, <strong><span style={{ color: "#124076" }}>“You can”</span></strong>.</p></strong>
                        </motion.div>
                    </Row>
                    <motion.div variants={upvariants} initial="initial" whileInView="animate" className='text-center mb-3 quotes-headblue'>Sainuma Kumari serving the Needful</motion.div>
                    <Row className="justify-content-center">
                        <Col lg={4} md={4} sm={4} xs={6} className="d-flex justify-content-center">
                            <motion.img src={sainuma5} alt="sainuma img 1" className="img-fluid rounded mb-2" variants={leftVarient} initial="initial" whileInView="animate" />
                        </Col>
                        <Col lg={4} md={4} sm={4} xs={6} className="d-flex justify-content-center">
                            <motion.img src={sainuma6} alt="sainuma img 1" className="img-fluid rounded  mb-2" variants={upvariants} initial="initial" whileInView="animate" />
                        </Col>
                        <Col lg={4} md={4} sm={4} xs={8} className="d-flex justify-content-center">
                            <motion.img src={sainuma7} alt="sainuma img 1" className="img-fluid rounded" variants={rightVarient} initial="initial" whileInView="animate" />
                        </Col>
                    </Row>

                    <Row className='g-3'>

                        <Col lg={12} >
                            <motion.div variants={upvariants} initial="initial" whileInView="animate" className='lead px-5 text-center mb-4 mt-2 quotes-head'>
                                <h5>Sainuma says, “The path was not easy and many said I CANNOT and I say today,
                                    look at me I CAN and I DID with the little help and constant encouragement.
                                    If I can – many others can too”.
                                </h5></motion.div>
                        </Col>


                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default SainumaPage;
