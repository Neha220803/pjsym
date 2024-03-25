import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './components/home/home_page';
import { NavBar } from './components/resuable/nav';
import { AboutUsPage } from './components/about/aboutus_page';
import { Donate } from './components/donate/donate';
import { HerosPage } from './components/heros/HerosPage';
import { GalleryPage } from './components/gallery/galler_page';
import { ProgamsPage } from './components/programs/ProgamsPage';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/programs' element={<ProgamsPage />} />
        <Route path='/heros' element={<HerosPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/donate' element={<Donate />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;