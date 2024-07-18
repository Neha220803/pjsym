import '../../index.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import progbg from '../images/progimg.png';
import { Footer } from '../resuable/footer';
import prog1 from '../images/Prog/prog1.png';
import { motion } from 'framer-motion';
import prog2 from '../images/Prog/prog2/img1.png';
import prog3 from '../images/Prog/prog3.png';
import prog4 from '../images/Prog/prog4/img1.png';
import prog5 from '../images/Prog/magis/magis3.png';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

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
            staggerChildren: 0.1,
        }
    }
};

const programData = [
    {
        img: prog1,
        title: " Youth Animator Training Program",
        text: "The Patna Jesuit Youth Commission organized “Youth Animators training Program” in Atmadarshan from 31st May to 4th June ...",
        progUrl: "/animator"

    },
    {
        img: prog2,
        title: "Youth Ministry Commission Meeting",
        text: "We had the youth commission meeting from 10th-12th March 2023 in Vidya Niwas, Varanasi. It was a very fruitful meeting as we...",
        progUrl: '/commissionMeet'
    },
    {
        img: prog3,
        title: "Youth Commission MAGIS 2022",
        text: "Great minds discuss ideas, average minds discuss events and small minds discuss people. - Eleanor  Roosevelt  Indeed, the word...",
        progUrl: '/magis2022'
    },
    {
        img: prog4,
        title: "World Youth Day - 2023",
        text: "We had MAGIS LISBON 2023 and World Youth Day in July and August 2023 in Portugal. We were 41 members from JCSA delegation ...",
        progUrl: '/youthDay'
    },
    {
        img: prog5,
        title: "MAGIS 2023",
        text: "MAGIS 2023, was a 4 days event, which proved to be a transformative and enriching experience for all the participants in India...",
        progUrl: "/magis2023"
    },
];

export const ProgamsPage = () => {
    return (
        <div className='justify-content' >
            <img alt="Programs Background Image" src={progbg} className="w-100 vh-50" />
            <motion.div variants={upvariants} initial="initial" whileInView="animate"
                className='each-head d-flex justify-content-center my-4'>Programs</motion.div>
            <Container className="d-flex justify-content-center mb-4 px-3">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {programData.map((program, index) => (
                        <Col key={index}>
                            <ProgramCard
                                img={program.img}
                                title={program.title}
                                text={program.text}
                                progUrl={program.progUrl}
                                index={index}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </div >
    )
};

const ProgramCard = ({ img, title, text, progUrl, index }) => {
    const delay = index * 0.5;
    const navigate = useNavigate();
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }} // Apply delay to each card
            className="mb-4"
        >
            <div className="h-100">
                <Card className="h-100 d-flex flex-column">
                    <Card.Img variant="top" src={img} style={{ height: '200px', objectFit: 'cover' }} />
                    <Card.Body className="flex-grow-1 d-flex flex-column">
                        <div>
                            <Card.Title className='text-center' style={{ color: "#487D49", fontWeight: '700' }}>{title}</Card.Title>
                            <Card.Text><p>{text}</p></Card.Text>
                        </div>
                        <Button onClick={() => navigate(progUrl)} className="align-self-end mt-auto"><strong>Read More</strong> <FaArrowRight className='ms-1 mb-1' /></Button>
                    </Card.Body>
                </Card>
            </div>
        </motion.div>
    );
};


export default ProgamsPage;
