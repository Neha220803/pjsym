import React from 'react'
import CarouselHeader from './carousel'
import '../../index.css';
import { Button, Col, Row } from 'react-bootstrap';
import { ProvidenceMssg } from './ProvidenceMssg';
import { MissionVission } from './MissionVission';
import logo from '../images/logo.png';
import { Footer } from '../resuable/footer';

export const HomePage = () => {
    return (
        <div>
            {/* <header>
                <div className="heading1">
                    <h1>Thank You for
                        <br></br>
                        giving hope to Dream Big!
                    </h1>
                    <div className='mt-5'>
                        <Button className='me-5' variant='outline-primary'>Read More</Button>
                        <Button className='px-4' variant='primary'>Donate</Button>
                    </div>
                </div>
            </header> */}
            <CarouselHeader />
            <ProvidenceMssg />
            <MissionVission />

            <Footer />



        </div>
    )
}


