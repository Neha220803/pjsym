import React from 'react'
import '../../index.css';
import { Container, Row } from 'react-bootstrap';
import topleft1 from '../images/topleft1.png'
import botright1 from '../images/botright1.png'

export const ProvidenceMssg = () => {
    return (
        <section>

            <div className='overlap-group'>
                <img className="wave-left1" alt="left1" src={topleft1} />

                <img className="wave-left2" alt="right1" src={botright1} />
            </div>
            <Container>
                <Row>
                    <div className='d-flex justify-content-center m-5'></div>
                </Row>
                <Row>
                    <div className='d-flex justify-content-center'><h1>Province messages...</h1></div>
                </Row>
                <Row>
                    <div className='d-flex justify-content-center m-5 display-6 col-7 mx-auto'>Lorem ipsum dolor sit amet consectetur. Bibendum arcu morbi nulla ut neque rhoncus faucibus pharetra imperdiet. Id id risus pellentesque lectus eget faucibus semper. Malesuada convallis tortor non a. Egestas sed habitasse volutpat vulputate imperdiet aliquet ultrices ornare tin netus sed egestas...</div>
                </Row>
            </Container>
        </section>
    )
}
