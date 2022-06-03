import React, {useState} from "react";
import './css/style.css';
import './App.css';
// import Header from "./components/Header";
import Header from "./view/components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
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
import SpecialWishes from "./components/SpecialWishes";
import './assets/css/style.css';
import Error404 from "./view/pages/Error404";
import Authorization from "./view/components/auth/Authorization";
import {AuthChecker} from "./routing/AuthChecker";
import Account from "./view/components/account/Account";
// import {ToastContainer, Zoom} from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import Authorization from "./components/Authorization";

function App() {
    const [modal, setModal] = useState(false);

    const [authToken, setAuthToken] = useState(() =>
        localStorage.getItem("authToken")
    );

    const authUser = (token) => {
        localStorage.setItem("authToken", token);
        setAuthToken(token);
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Header setModal={setModal} modal={modal} authToken={authToken} setAuthToken={setAuthToken}
                        authUser={authUser}/>

                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/order" element={<OrderPage/>}/>
                    <Route exact path="/order2" element={<OrderPage2/>}/>
                    <Route exact path="/order3" element={<OrderSuccess/>}/>
                    <Route exact path="/partnership" element={<Partnership/>}/>
                    <Route exact path="/ad" element={<AdPage/>}/>
                    <Route exact path="/project" element={<Project/>}/>
                    <Route exact path="/services" element={<ServicesPage/>}/>
                    <Route exact path="/test" element={<FinishedTrack/>}/>
                    <Route exact path="/test2" element={<AddSuggestiveEffect/>}/>
                    <Route exact path="/test3" element={<UnloadingModule/>}/>
                    <Route exact path="/test4" element={<SpecialWishes/>}/>
                    {/*<Route exact path="/" element={<AuthChecker/>}>*/}
                    {/*    <Route exact path='/' element={<Home/>}/>*/}
                    {/*</Route>*/}
                    {/*<Route exact path="/"*/}
                    {/*       element={<AuthChecker Component={Main} authToken={authToken} />}*/}
                    {/*/>*/}
                    {/*<Route path="/error" element={<Error404/>}/>*/}
                    <Route path="*" element={<Error404/>}/>
                    <Route path="/login" element={<Authorization authUser={authUser}/>}/>
                    {/*<Route exact path="/login"*/}
                    {/*       element={<AuthChecker Component={Authorization} authToken={authToken} />}*/}
                    {/*/>*/}
                    <Route exact path="/register"
                           element={<AuthChecker Component={Authorization} authUser={authUser} />}
                    />
                    {/*<Route path="/account"*/}
                    {/*       element={<AuthChecker Component={Account} authToken={authToken} />}*/}
                    {/*/>*/}
                    <Route path="/account" element={<Account/>}/>
                    <Route exact path="/logout"
                           element={<AuthChecker Component={Authorization} authUser={authUser} />}
                    />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
