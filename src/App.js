import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/resuable/nav';
import { HomePage } from './components/home/home_page';
import { AboutUsPage } from './components/about/aboutus_page';
import { Donate } from './components/donate/donate';
import { ProgamsPage } from './components/programs/ProgamsPage';
import HerosPage from './components/heros/HerosPage';
import GalleryPage from './components/gallery/galler_page';
import SainumaPage from './components/heros/SainumaPage';
import MagisPage2023 from './components/programs/MagisPage2023';
import AnimatorPage from './components/programs/AnimatorPage';
import YouthMinistry from './components/programs/YouthMinistry';
import YouthCommision from './components/programs/YouthCommision';
import WorldYouth from './components/programs/WorldYouth';
import AvinashPage from './components/heros/AvinashPage';
import KumariPage from './components/heros/KumariPage';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/programs' element={<ProgamsPage />} />
        <Route path='/heros' element={<HerosPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/donate' element={<Donate />} />

        <Route path='/magis2023' element={<MagisPage2023 />} ></Route>
        <Route path='/animator' element={<AnimatorPage />} ></Route>
        <Route path='/commissionMeet' element={<YouthMinistry />} ></Route>
        <Route path='/magis2022' element={<YouthCommision />} ></Route>
        <Route path='/youthDay' element={<WorldYouth />} ></Route>

        <Route path='/sainuma' element={<SainumaPage />} ></Route>
        <Route path='/avinash' element={<AvinashPage />} ></Route>
        <Route path='/kumari' element={<KumariPage />} ></Route>

      </Routes>
    </HashRouter>
  );
}

export default App;
