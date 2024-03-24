// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import '../../index.css';
import { Container, Carousel } from 'react-bootstrap';


function CarouselHeader() {
    return (
        <section>
            <Carousel className='justify-content-center align-items-center'>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libe
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default CarouselHeader;