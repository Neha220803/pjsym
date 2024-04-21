import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import herosbg from '../images/herosimg.png'
import '../../index.css';
import { Footer } from '../resuable/footer';
import hero1 from '../images/Heros/hero1.png';
import hero2 from '../images/Heros/hero2.png';
import hero3 from '../images/Heros/hero3.png';



const cardData = [
    {
        img: hero1,
        title: "Sainuma Kumari",
        text: "In the sun-kissed valleys of North-East of India, where ancient traditions wove the fabric of existence, Sainuma Kumari’s story unfold - a symphony of resilience, courage and confidence. Born in a family of seven sisters and one brother, Sainuma was the unexpected note - the girl when a boy was anticipated. Her father, a man shackled by societal norms, saw her as excess baggage. The weight of her existence pressed upon her like monsoon clouds, threatening to drown her spirit.",
        buttonText: "Read More...",
    },
    {
        img: hero2,
        title: "AVINASH MAHATO ",
        text: "In the heart of a forgotten village, where poverty clung to every mud-brick wall, Avinash Mahato’s life unfolded like a tattered scroll. His father, a drunken specter, had sold their ancestral land, leaving the family adrift in a sea of deprivation. His mother, a silent warrior, stitched together their survival with frayed threads of love and resilience.",
        buttonText: "Read More...",
    },
    {
        img: hero3,
        title: "LOVELY KUMARI",
        text: "Lovely Kumari’s life began in the shadows of adversity. Born into a broken family, she lost her mother at a tender age, leaving her unwanted and vulnerable. Her father’s rejection and her stepmother’s indifference further compounded her struggles; yet, amidst the chaos, two pillars of support emerged: her grandmother and later her uncle.",
        buttonText: "Read More...",
    },
];

const HerosPage = () => {
    return (
        <div>
            <img alt="mission img" src={herosbg} className="img-fluid w-100" />
            <Container>
                <div>
                    <Row>
                        <div className='each-head d-flex justify-content-center my-4'>Heros Stories</div>
                    </Row>
                    {cardData.map((card, index) => (
                        <Card key={index} className="mb-3">
                            <Card.Body className="d-flex flex-row">
                                <Card.Img src={card.img} style={{ width: '150px', height: 'auto' }} className="align-self-center me-4" />
                                <div>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>{card.text}</Card.Text>
                                    <Button variant="primary">{card.buttonText}</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default HerosPage;