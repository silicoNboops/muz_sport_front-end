import React from "react";
import {ModalAuth} from "./auth/ModalAuth";
import API from "../../api/API";
import { useNavigate } from "react-router-dom";


const Header = (props) => {

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
                    navigate('/', { replace: true });
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

            <a href="/" className="align-items-center col-md-3 mb-md-0 text-dark text-decoration-none">
                <img src="assets/images/logo.png" width="140px" alt="logo"/>
            </a>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-2 link-dark">Каталог</a></li>
                <li><a href="/services" className="nav-link px-2 link-dark">Услуги</a></li>
                <li><a href="/partnership" className="nav-link px-2 link-dark">Партнерство</a></li>
                <li><a href="/project" className="nav-link px-2 link-dark">Проект</a></li>
            </ul>

            <div className="col-md-3">
                {props.authToken === null ? (
                    <>
                        <div className="icon-link-badged mr-3 px-2">
                            <a href="/login" className="text-black">
                                <img src="assets/icons/account.png" width="35px"/>
                                Вход
                            </a>
                        </div>
                        <div className="icon-link-badged mr-3 px-2">
                            <a href="/register" className="text-black">
                                <img src="assets/icons/account.png" width="35px"/>
                                Регистрация
                            </a>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="icon-link-badged mr-3 px-2">
                            <a href="/account" className="text-black">
                                <img src="assets/icons/account.png" width="35px"/>
                                Личный кабинет
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

}
export default Header;
