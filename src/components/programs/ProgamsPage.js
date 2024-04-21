import React from 'react'
import progbg from '../images/progimg.png'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Footer } from '../resuable/footer';
import prog1 from '../images/Prog/magis.png';

const programData = [
    {
        img: prog1,
        title: "MAGIS 2023",
        text: "To sensitize students to establish \'a hope-filled future\', to orient youth towards their role in Nation Building and to motivate the students to be the change and bring difference in the society wherever one is placed."
    },
    {
        img: prog1,
        title: "Prog 2",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        img: prog1,
        title: "Card 3",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        img: prog1,
        title: "Card 4",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        img: prog1,
        title: "Card 5",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        img: prog1,
        title: "Card 6",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
];

export const ProgamsPage = () => {
    return (
        <div>
            <img alt="mission img" src={progbg} className="img-fluid w-100" />
            <Row>
                <div className='each-head d-flex justify-content-center my-4'>Programs</div>
            </Row>

            <Container className="d-flex justify-content-center">
                <Row>
                    {programData.map((program, index) => (
                        <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={program.img} />
                                <Card.Body>
                                    <Card.Title>{program.title}</Card.Title>
                                    <Card.Text>{program.text}</Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </div>
    )
}
