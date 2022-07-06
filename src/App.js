import './css/style.css';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {BrowserRouter, Route,  Routes} from "react-router-dom";
import OrderPage from "./pages/OrderPage\'s/OrderPage";
import OrderPage2 from "./pages/OrderPage\'s/OrderPage2";
import OrderSuccess from "./pages/OrderPage\'s/OrderSuccess";
import Partnership from "./pages/Partnership";
import AdPage from "./pages/AdPage";
import Project from "./pages/Project";
import ServicesPage from "./pages/ServicesPage";
import SpecialWishes from "./components/SpecialWishes";
import CatalogTemplate from "./components/filters/CatalogTemplate";
import NewPlayer from "./components/PlayerBlya/FinishedPlayer";
import Slider from "./components/Slider";
import WishList from "./pages/WishList";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
              <Header/>

                  <Routes>
                      <Route exact path="/" element={<Home/>} />
                      <Route exact path="/order" element={<OrderPage/>} />
                      <Route exact path="/order2" element={<OrderPage2/>} />
                      <Route exact path="/order3" element={<OrderSuccess/>} />
                      <Route exact path="/partnership" element={<Partnership/>} />
                      <Route exact path="/ad" element={<AdPage/>} />
                      <Route exact path="/project" element={<Project/>} />
                      <Route exact path="/services" element={<ServicesPage/>} />
                      <Route exact path="/test4" element={<SpecialWishes/>} />
                      <Route exact path="/player" element={<NewPlayer/>} />
                      <Route exact path="/tracks" element={<CatalogTemplate/>}/>
                      <Route exact path="/wishlist" element={<WishList/>} />
                      <Route exact path="/slider" element={<Slider/>} />

                  </Routes>

              <Footer/>
            </div>
      </BrowserRouter>

  );
}

export default App;
