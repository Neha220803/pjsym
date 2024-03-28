import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import herosbg from '../images/herosimg.png'
import '../../index.css';
import { Footer } from '../resuable/footer';

const cardData = [
    {
        title: "Card 1",
        text: "With supporting text below as a natural lead-in to additional content.",
        buttonText: "Read More...",
    },
    {
        title: "Card 1",
        text: "With supporting text below as a natural lead-in to additional content.",
        buttonText: "Read More...",
    },
    {
        title: "Card 1",
        text: "With supporting text below as a natural lead-in to additional content.",
        buttonText: "Read More...",
    },
    {
        title: "Card 1",
        text: "With supporting text below as a natural lead-in to additional content.",
        buttonText: "Read More...",
    },

];

export const HerosPage = () => {
    return (
        <div>
            <img alt="mission img" src={herosbg} className="img-fluid w-100" />
            <Container>
                <div>
                    {cardData.map((card, index) => (
                        <Card key={index} className="mb-3">
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.text}</Card.Text>
                                <Button variant="primary">{card.buttonText}</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Container>
            <Footer />



        </div>
    )
}
