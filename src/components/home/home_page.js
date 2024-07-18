import React from 'react'
import CarouselHeader from './carousel'
import '../../index.css';
import { ProvidenceMssg } from './ProvidenceMssg';
import { MissionVission } from './MissionVission';
import { Footer } from '../resuable/footer';
import './homePage.css';

export const HomePage = () => {
    return (
        <div className='justify-text home'>
            <CarouselHeader />
            <ProvidenceMssg />
            <MissionVission />
            <Footer />
        </div>
    )
}


