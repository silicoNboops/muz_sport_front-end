import './assets/css/style.css';
import './App.css';
import Header from "./view/components/Header";
import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import {Footer} from "./pages/Footer";
import './App.css';
// import {ToastContainer, Zoom} from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import Authorization from "./components/Authorization";
import Main from './view/pages/Main';
import Error404 from './view/pages/Error404';
import Authorization from "./view/components/auth/Authorization";
import Account from "./view/components/account/Account";
import {CartProvider} from 'react-use-cart';
import {AuthChecker} from "./routing/AuthChecker";

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
        <CartProvider>
            <BrowserRouter>
                <div className="App">

                    <Header setModal={setModal} modal={modal} authToken={authToken} setAuthToken={setAuthToken}
                            authUser={authUser}/>

                    <Routes>
                        {/*<Route exact path="/" element={<AuthChecker/>}>*/}
                        {/*    <Route exact path='/' element={<Home/>}/>*/}
                        {/*</Route>*/}
                        <Route path="/" element={<Main/>}/>
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
                </div>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
