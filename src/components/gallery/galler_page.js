import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../../index.css';


export const GalleryPage = () => {
    return (
        <div>
            <section style={{ minHeight: '100vh' }}>
                <Container className="d-flex justify-content-center align-items-center">
                    <Row>
                        <Col>
                            <h1>About Us Page</h1>
                            <h1>Gallery Page</h1>
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    )
}
