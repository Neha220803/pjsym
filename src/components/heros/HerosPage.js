import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import herosbg from '../images/herosimg.png';
import '../../index.css';
import { Footer } from '../resuable/footer';
import hero1 from '../images/Heros/hero1.png';
import hero2 from '../images/Heros/hero2.png';
import hero3 from '../images/Heros/hero3.png';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const upvariants = {
    initial: {
        y: 100,
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


const cardData = [
    {
        img: hero1,
        title: "SAINUMA KUMARI",
        text: "In the sun-kissed valleys of North-East of India, where ancient traditions wove the fabric of existence, Sainuma Kumari’s story unfolds - a symphony of resilience, courage and confidence. Born in a family of seven sisters and one brother, Sainuma was the unexpected note - the girl when a boy was anticipated. Her father, a man shackled by societal norms, saw her as excess baggage. The weight of her existence pressed upon her like monsoon clouds, threatening to drown her spirit.",
        buttonText: "Read More ",
        heroUrl: '/sainuma'
    },
    {
        img: hero2,
        title: "AVINASH MAHATO ",
        text: "In the heart of a forgotten village, where poverty clung to every mud-brick wall, Avinash Mahato’s life unfolded like a tattered scroll. His father, a drunken specter, had sold their ancestral land, leaving the family adrift in a sea of deprivation. His mother, a silent warrior, stitched together their survival with frayed threads of love and resilience.",
        buttonText: "Read More ",
        heroUrl: '/avinash'
    },
    {
        img: hero3,
        title: "LOVELY KUMARI",
        text: "Lovely Kumari’s life began in the shadows of adversity. Born into a broken family, she lost her mother at a tender age, leaving her unwanted and vulnerable. Her father’s rejection and her stepmother’s indifference further compounded her struggles; yet, amidst the chaos, two pillars of support emerged: her grandmother and later her uncle.",
        buttonText: "Read More ",
        heroUrl: '/kumari'
    },
];

const HerosPage = () => {
    return (
        <div className='justify-text'>
            <img alt="mission img" src={herosbg} className="img-fluid w-100" />
            <Container className='px-3'>
                <Row>
                    <motion.div variants={upvariants} initial="initial" whileInView="animate" className='each-head d-flex justify-content-center my-4 text-center'>Heroes Stories</motion.div>
                </Row>
                <motion.div variants={upvariants} initial="initial" whileInView="animate">
                    {cardData.map((card, index) => (
                        <CardContainer key={index} delay={index * 0.9} card={card} />
                    ))}
                </motion.div>
            </Container>
            <Footer />
        </div>
    )
}

const CardContainer = ({ card, delay }) => {
    const navigate = useNavigate();
    return (
        <motion.div key={card.title} variants={upvariants} initial="initial" whileInView="animate" transition={{ duration: 0.5, delay }}>
            <Card className="mb-3">
                <Card.Body className="d-flex flex-column flex-lg-row">
                    <Card.Img src={card.img} style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} className="align-self-center ms-lg-1 mx-md-4 mb-3 mb-md-0" />
                    <div className="d-flex flex-column justify-content-between">
                        <div>
                            <Card.Title className='mt-md-2' style={{ fontFamily: "Inknut Antiqua" }}>{card.title}</Card.Title>
                            <Card.Text><p>{card.text}</p></Card.Text>
                        </div>
                        <div className="text-end mt-3 mt-lg-0">
                            <Button variant="primary" onClick={() => navigate(card.heroUrl)}><strong>{card.buttonText}</strong><FaArrowRight className='ms-1 mb-1' /></Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </motion.div>
    );
}




export default HerosPage;
