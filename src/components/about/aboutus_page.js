import aboutbg from '../images/aboutimg.png';
import '../../index.css';
import { Footer } from '../resuable/footer';
import HistoryComp from './HistoryComp';
import FullMissVissPage from './Full_Miss_Viss_Page';
import AboutDec from './aboutDecPage';


export const AboutUsPage = () => 
{
    return (
        <div className='justify-text'>
            <img alt="mission img" src={aboutbg} className="img-fluid w-100 " />
            <AboutDec />
            <FullMissVissPage />
            <HistoryComp />
            <Footer />
        </div>
    )
}