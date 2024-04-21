import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import progbg from '../images/progimg.png';
import { Footer } from '../resuable/footer';
import prog1 from '../images/Prog/magis.png';
import { motion } from 'framer-motion';
import prog2 from '../images/Prog/leadership.jpg';
import prog3 from '../images/Gallery/65.jpg';

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
        title: "MAGIS 2023",
        text: "To sensitize students to establish 'a hope-filled future', to orient youth towards their role in Nation Building and to motivate the students to be the change and bring difference in the society wherever one is placed."
    },
    {
        img: prog2,
        title: "Leadership Training Program",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content. Loreum Ipsom Idor Loreum Ipsom Idor Loreum Ipsom Idor Loreum Ipsom Idor"
    },
    {
        img: prog3,
        title: "Summer Skill Dev Program",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content. Loreum Ipsom Idor Loreum Ipsom Idor Loreum Ipsom Idor Loreum Ipsom Idor"
    },
    {
        img: prog1,
        title: "Card 4",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content. Loreum Ipsom Idor Loreum Ipsom Idor Loreum Ipsom Idor Loreum Ipsom Idor"
    },
    {
        img: prog1,
        title: "Card 5",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content. Loreum Ipsom Idor Loreum Ipsom Idor Loreum Ipsom Idor Loreum Ipsom Idor"
    },
    {
        img: prog1,
        title: "Card 6",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.Loreum Ipsom Idor Loreum Ipsom Idor Loreum Ipsom Idor Loreum Ipsom Idor"
    }
];

export const ProgamsPage = () => {
    return (
        <div>
            <img alt="Programs Background Image" src={progbg} className="w-100 vh-50" />
            <motion.div variants={upvariants} initial="initial" whileInView="animate"
                className='each-head d-flex justify-content-center my-4'>Programs</motion.div>
            <Container className="d-flex justify-content-center">
                <Row>
                    {programData.map((program, index) => (
                        <Col key={index} xs={12} sm={6} md={4}>
                            <ProgramCard
                                img={program.img}
                                title={program.title}
                                text={program.text}
                                index={index} // Pass the index as a prop
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </div>
    )
};

const ProgramCard = ({ img, title, text, index }) => {
    const delay = index * 0.5; // Calculate the delay based on index

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }} // Apply delay to each card
            className="mb-4"
        >
            <Card style={{ width: '100%', height: '400px' }}> {/* Adjust the height as needed */}
                <Card.Img variant="top" src={img} style={{ height: '200px', objectFit: 'cover' }} /> {/* Set image height and maintain aspect ratio */}
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card>
        </motion.div>
    );
};
