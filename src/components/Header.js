import React from "react";

const Header = () => {

    return(

    <header className="d-flex header flex-wrap align-items-center justify-content-center
         justify-content-md-between py-3 border-bottom">
        <a href="/" className="align-items-center col-md-3 mb-md-0 text-dark text-decoration-none">
            <img src="assets/images/logo.png" width="140px" alt="logo"/>
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 link-secondary">Каталог</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Услуги</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Партнерство</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Проект</a></li>
        </ul>

        <div className="col-md-3">
            <div className="icon-link-badged px-2">
                <a href="#" className="text-black">
                    <img src="assets/icons/account.png" width="35px"/>
                    Вход
                </a>
            </div>
            <div className="icon-link-badged px-2">
                <a href="#" className="text-black">
                    <img src="assets/icons/account.png" width="35px"/>
                    Регистрация
                </a>
            </div>
        </div>
    </header>
    )

}
export default Header
