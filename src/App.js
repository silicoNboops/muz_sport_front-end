import './css/style.css';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {BrowserRouter, Route,  Routes} from "react-router-dom";
import OrderPage from "./pages/OrderPage";
import OrderPage2 from "./pages/OrderPage2";
import OrderSuccess from "./pages/OrderSuccess";
import Partnership from "./pages/Partnership";
import AdPage from "./pages/AdPage";
import Project from "./pages/Project";
import ServicesPage from "./pages/ServicesPage";
import FinishedTrack from "./components/FinishedTrack";
import AddSuggestiveEffect from "./components/AddSuggestiveEffect";
import UnloadingModule from "./components/UnloadingModule";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
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
                      <Route exact path="/test" element={<FinishedTrack/>} />
                      <Route exact path="/test2" element={<AddSuggestiveEffect/>} />
                      <Route exact path="/test3" element={<UnloadingModule/>} />
                  </Routes>
              <Footer/>
          </BrowserRouter>
      </div>
  );
}

export default App;
