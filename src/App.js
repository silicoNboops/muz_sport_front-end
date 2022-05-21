import './css/style.css';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {BrowserRouter, Route,  Routes} from "react-router-dom";
import OrderPage from "./pages/OrderPage";
import OrderPage2 from "./pages/OrderPage2";
import OrderSuccess from "./pages/OrderSuccess";

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
                  </Routes>
              <Footer/>
          </BrowserRouter>
      </div>
  );
}

export default App;
