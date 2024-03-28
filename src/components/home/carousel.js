import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import carousel1 from '../images/girlbg.png';
import carousel2 from '../images/car2.png';
import carousel3 from '../images/car3.png';
import '../../index.css';

function CarouselHeader() {
    const slides = [
        {
            image: carousel1,
            heading: ['Thank You for giving', 'hope to Dream Big!'],
            buttonText: 'Read More',
            buttonVariant: 'outline-primary'
        },
        {
            image: carousel2,
            heading: ['Text for Slide 2'],
            buttonText: 'Read More',
            buttonVariant: 'outline-primary'
        },
        {
            image: carousel3,
            heading: ['Text for Slide 3'],
            buttonText: 'Read More',
            buttonVariant: 'outline-primary'
        }
    ];

    return (
        <header>
            <Carousel interval={1500} pause={false} controls={false}>
                {slides.map((slide, index) => (
                    <Carousel.Item key={index} style={{ overflow: 'hidden' }}>
                        <div className="image-container">
                            <img
                                className="d-block w-100"
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                style={{ objectFit: 'cover', height: '100vh' }}
                            />
                        </div>
                        <Carousel.Caption className="heading1" style={{ top: 0 }}>
                            {slide.heading.map((line, i) => (
                                <h1 key={i}>{line}</h1>
                            ))}
                            <div className='mt-5'>
                                <Button className='me-5' variant='secondary'>{slide.buttonText}</Button>
                                <Button className='px-4' variant='primary'>Donate</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </header>
    );
}

export default CarouselHeader;
