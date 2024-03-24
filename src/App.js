import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './components/home/home_page';
import { NavBar } from './components/resuable/nav';


function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/store/:LinkCategory?' element={<Store storeData={storeData} setStoreData={setStoreData} setCartActive={setCartActive} fetchStoreData={fetchStoreData} cartCount={cartCount} fetchCartCount={fetchCartCount} />} />
          <Route path='/product/:category/:id' element={<ProductPage products={storeData?.products} setData={setStoreData} setCartActive={setCartActive} fetchStoreData={fetchStoreData} cartCount={cartCount} fetchCartCount={fetchCartCount} />} />
          <Route path='/checkout' element={<Checkout products={storeData?.products} fetchStoreData={fetchStoreData} />} />
          <Route path='/booking' element={<Booking />} /> */}
        {/* <Route path='/about' element={<About />} /> */}
        {/* <Route path='/programs' element={<Programs />} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;