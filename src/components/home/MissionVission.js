import React from 'react'
import '../../index.css';
import { Button, Container, Row } from 'react-bootstrap';
import missimg from '../images/mission.png'
import visimg from '../images/vission.png'

export const MissionVission = () => {
    return (
        <section style={{ backgroundColor: '#F6ECDA' }}>
            <Container>
                <Row className='justify-content-start'>
                    <div className='col-lg-2'>
                        <div className='display-3'>Mission</div>
                    </div>
                </Row>
                <Row className='mt-2'>
                    <div className='col-1'></div>
                    <div className='col-7'>Lorem ipsum dolor sit amet consectetur. sit. Siamet nunc aliquam nisi sit. Sit morbi aliquam aliquet velit elit... lor sit amet consectetur. sit. Si lor sit amet consectetur. sit. Silor sit amet consectetur. sit. Si Lorem ipsum dolor sit amet consectetur. Tellus massa cum amet nunc aliquam nisi sit. Sit morbi aliquam aliquet velit elit...Lorem ipsum dolor sit amet consectetur. Tellus massa cum amet nunc aliquam nisi sit. Sit morbi aliquam aliquet velit elit...Lorem ipsum dolor sit amet consectetur. Tellus massa cum amet nunc aliquam nisi sit. Sit morbi aliquam aliquet velit elit... velit elit...
                        <br></br><Button variant="primary mt-2">Read More...</Button>
                    </div>
                    <div className='col-4'><img className='img-fluid' alt="mission img" src={missimg} /></div>

                </Row>
            </Container>
            <Container>
                <Row className='justify-content-end'>
                    <div className='col-lg-3'>
                        <div className='display-3'>Vission</div>
                    </div>
                </Row>
                <Row className='mt-3'>
                    <div className='col-4'><img className='img-fluid' alt="mission img" src={visimg} /></div>
                    <div className='col-7' >Lorem ipsum dolor sit amet consectetur. sit. Siamet nunc aliquam nisi sit. Sit morbi aliquam aliquet velit elit... lor sit amet consectetur. sit. Si lor sit amet consectetur. sit. Silor sit amet consectetur. sit. Si Lorem ipsum dolor sit amet consectetur. Tellus massa cum amet nunc aliquam nisi sit. Sit morbi aliquam aliquet velit elit...Lorem ipsum dolor sit amet consectetur. Tellus massa cum amet nunc aliquam nisi sit. Sit morbi aliquam aliquet velit elit...Lorem ipsum dolor sit amet consectetur. Tellus massa cum amet nunc aliquam nisi sit. Sit morbi aliquam aliquet velit elit... velit elit...
                        <br></br><Button variant="primary mt-2">Read More...</Button>
                    </div>
                    <div className='col-1'></div>
                </Row>
            </Container>
        </section>
    )
}
