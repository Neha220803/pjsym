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
            <CarouselHeader />
            <ProvidenceMssg />
            <MissionVission />
            <Footer />



        </div>
    )
}


