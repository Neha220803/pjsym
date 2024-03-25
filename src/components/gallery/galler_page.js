import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import gallerybg from '../images/galleryimg.png'
import '../../index.css';
const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
];

export const GalleryPage = () => {
    return (
        <div>

            <Container fluid className=" d-flex justify-content-center">
                <Row>
                    <Col>
                        <img alt="mission img" src={gallerybg} className="img-fluid w-100" />
                    </Col>
                </Row>
            </Container>
            <Container>
                {Array.from({ length: 5 }).map((_, rowIndex) => (
                    <Row key={rowIndex} className="mb-3">
                        {Array.from({ length: 4 }).map((_, colIndex) => (
                            <Col key={colIndex}>
                                <img src={images[rowIndex * 4 + colIndex]} alt={`Image ${rowIndex * 4 + colIndex}`} className="img-fluid" />
                            </Col>
                        ))}
                    </Row>
                ))}
            </Container>



        </div>
    )
}
