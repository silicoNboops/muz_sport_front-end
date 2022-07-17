import React from "react";
import {ModalAuth} from './auth/ModalAuth';
import API from "../api/API";
import {useNavigate} from "react-router-dom";

const Header = React.memo((props) => {
    const navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault();

        API.logout()
            .then((res) => {
                // стираем токен
                localStorage.removeItem("authToken");
                props.setAuthToken(null);

                // 204 - нет контента в ответе
                if (res.status === 204) {
                    navigate('/', {replace: true});
                }
            })
            .catch((error) => {
                console.log('error-logout');
            });
    }

    return (
        <header className="d-flex header flex-wrap align-items-center justify-content-center
         justify-content-md-between py-3 border-bottom">

            {props.modal ?
                // TODO юзать другой компонент
                <ModalAuth
                    authUser={props.authUser}
                    authToken={props.authToken}
                    setAuthToken={props.setAuthToken}
                    setModal={props.setModal}
                    modal={props.modal}
                /> : <></>}

            <a href="/" className="col-md-3 mb-md-0">
                <img src="/assets/images/logo.png" width="140px" alt="logo"/>
            </a>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/tracks" className="nav-link px-2 link-dark">Каталог</a></li>
                <li><a href="/services" className="nav-link px-2 link-dark">Услуги</a></li>
                <li><a href="/partnership" className="nav-link px-2 link-dark">Партнерство</a></li>
                <li><a href="/project" className="nav-link px-2 link-dark">Проект</a></li>
            </ul>

            <div className="col-md-3">
                <div className="icon-link-badged px-2">
                    <a href="/order" className="text-black heart-style d-inline ps-2">
                        <img src="/assets/icons/cart.png" width="30px"/>
                    </a>
                </div>

                {props.authToken === null ? (
                    <>
                        <div className="icon-link-badged mr-3 px-2">
                            <a href="/login" className="text-black">
                                <img src="/assets/icons/account.png" width="30px"/>
                                Вход
                            </a>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="icon-link-badged px-2">
                            <a href="/wishlist" className="text-black header-btn d-inline ps-2">
                                {/*<img src="assets/icons/heart.png" height="30px"/>*/}
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                     fill="currentColor" className="bi bi-heart-fill heart-style" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                                </svg>
                            </a>
                        </div>

                        <div className="icon-link-badged mr-3 px-2">
                            <a href="/account" className="text-black">
                                <img src="/assets/icons/account.png" width="35px"/>
                            </a>
                        </div>
                        <div className="icon-link-badged mr-3">
                            {/*<a href="/logout" className="icon-md">*/}
                            {/*    <img src="assets/icons/account.png" width="35px"/>*/}
                            {/*    Выйти*/}
                            {/*</a>*/}
                            <button className="text-black"
                                    type="button"
                                    onClick={logout}>
                                Выйти
                            </button>
                        </div>
                    </>
                )}
            </div>
    </header>
    )
});

export default Header;
