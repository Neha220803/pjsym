import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import gallerybg from '../images/galleryimg.png';
import { Footer } from '../resuable/footer';
import { motion, useAnimation } from 'framer-motion';

const staggeredVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: index * 20
        }
    })
};

const galleryData = [
    require('../images/Gallery/1.jpg'),
    require('../images/Gallery/2.jpg'),
    require('../images/Gallery/3.jpg'),
    require('../images/Gallery/4.jpg'),

    require('../images/Gallery/5.jpg'),
    require('../images/Gallery/6.jpg'),
    require('../images/Gallery/7.jpg'),
    require('../images/Gallery/8.jpg'),

    require('../images/Gallery/9.jpg'),
    require('../images/Gallery/10.jpg'),
    require('../images/Gallery/11.jpg'),
    require('../images/Gallery/12.jpg'),

    require('../images/Gallery/13.jpg'),
    require('../images/Gallery/35.jpg'),
    require('../images/Gallery/36.jpg'),
    require('../images/Gallery/37.jpg'),

    require('../images/Gallery/38.jpg'),
    require('../images/Gallery/39.jpg'),
    require('../images/Gallery/40.jpg'),
    require('../images/Gallery/42.jpg'),

    require('../images/Gallery/43.jpg'),
    require('../images/Gallery/45.jpg'),
    require('../images/Gallery/46.jpg'),
    require('../images/Gallery/59.jpg'),

    // require('../images/Gallery/67.jpg'),
    require('../images/Gallery/68.jpg'),
    require('../images/Gallery/34.jpg'),
    require('../images/Gallery/48.jpg'),

    require('../images/Gallery/47.jpg'),
    require('../images/Gallery/44.jpg'),
    require('../images/Gallery/41.jpg'),
    require('../images/Gallery/14.jpg'),

    require('../images/Gallery/15.jpg'),
    require('../images/Gallery/16.jpg'),
    require('../images/Gallery/17.jpg'),
    require('../images/Gallery/18.jpg'),

    require('../images/Gallery/19.jpg'),
    require('../images/Gallery/20.jpg'),
    require('../images/Gallery/21.jpg'),
    require('../images/Gallery/22.jpg'),

    require('../images/Gallery/22.jpg'),
    require('../images/Gallery/23.jpg'),
    require('../images/Gallery/24.jpg'),
    require('../images/Gallery/25.jpg'),

    require('../images/Gallery/26.jpg'),
    require('../images/Gallery/27.jpg'),
    require('../images/Gallery/28.jpg'),
    require('../images/Gallery/29.jpg'),

    require('../images/Gallery/31.jpg'),
    require('../images/Gallery/32.jpg'),
    require('../images/Gallery/50.jpg'),
    require('../images/Gallery/51.jpg'),

    require('../images/Gallery/53.jpg'),
    require('../images/Gallery/54.jpg'),
    require('../images/Gallery/55.jpg'),
    require('../images/Gallery/56.jpg'),

    require('../images/Gallery/61.jpg'),
    require('../images/Gallery/64.jpg'),
    require('../images/Gallery/65.jpg'),
    require('../images/Gallery/69.jpg'),
];

const GalleryPage = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start('visible');
    }, [controls]);

    return (
        <div>
            <img alt="Gallery Background Image" src={gallerybg} className="w-100 vh-50" />
            <Container className='px-3'>
                <motion.div initial="hidden" animate={controls} variants={staggeredVariants} className='each-head d-flex justify-content-center my-4'>Gallery</motion.div>
                <Row>
                    {galleryData.map((image, index) => (
                        <Col key={index} xs={12} sm={6} md={4}>
                            <GalleryItem
                                img={image}
                                index={index}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </div>
    )
};

const GalleryItem = ({ img, index }) => {
    return (
        <motion.div
            custom={index}
            variants={staggeredVariants}
            className="mb-4"
        >
            <Card style={{ height: "250px" }}>
                <Card.Img variant="top" src={img} style={{ height: "100%", objectFit: "cover" }} />
            </Card>
        </motion.div>
    );
};

export default GalleryPage;