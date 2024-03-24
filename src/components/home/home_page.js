import React from 'react'
import CarouselHeader from './carousel'
import '../../index.css';

import { Button, Container, Col, Row } from 'react-bootstrap';
import { ProvidenceMssg } from './ProvidenceMssg';
import { MissionVission } from './MissionVission';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram } from 'react-icons/fa';
import logo from '../images/logo.png';

export const HomePage = () => {
    return (
        <div>
            <header>
                <div className="heading1">
                    <h1>Thank You for
                        <br></br>
                        giving hope to Dream Big!
                    </h1>
                    <div className='mt-5'>
                        <Button className='me-5' variant='outline-primary'>Read More</Button>
                        <Button variant='primary'>Read More</Button>
                    </div>

                </div>
            </header>
            <ProvidenceMssg />
            <MissionVission />
            <footer>
                <Row>
                    <Col xs="auto">
                        <img src={logo} alt="logo" />

                    </Col>
                    <h1>PJSYM</h1>
                    <Col>

                    </Col>
                </Row>
                <Row>
                    <div class="col span_2_of_4">
                        <p>hello Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci ..</p>
                        <ul className="social-links">
                            <li><a href="#"><FaFacebook className="fb" /></a></li>
                            <li><a href="#"><FaTwitter className="tw" /></a></li>
                            <li><a href="#"><FaGoogle className="gl" /></a></li>
                            <li><a href="#"><FaInstagram className="ig" /></a></li>
                        </ul>

                    </div>
                    <div class="col span_2_of_4">
                        <ul class="footer-nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Programms</a></li>
                            <li><a href="#">Heros</a></li>
                            <li><a href="#">Gallery</a></li>
                        </ul>
                    </div>

                    <div class="col span_2_of_4">
                        <ul class="footer-nav">
                            <li>Fr. JOYSON FERNANDES SJ</li>
                            <li>+91 9871528965</li>
                            <li>+91 9939447576</li>
                            <li>Provincial Residence,</li>
                            <li>St. Xavier's - West Gandhi Maidan,</li>
                            <li>Patna – 800 001</li>
                        </ul>
                    </div>
                </Row>





                <div class="row">
                    <p>Copyright &copy; 2024 pjsym All Rights Reserved.</p>
                </div>
            </footer>



        </div>
    )
}


