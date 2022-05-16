import React from "react";

const Header = () => {

    return(
        // <header className="nks-bg-color">
        //     <section className="header-main header-height border-bottom">
        //         <div className="container">
        //             <div className="row align-items-baseline">
        //
        //                 <div className="col-lg-3 col-md-6 p-lg-0 pt-md-2">
        //                     <a href="/">
        //                         <img src="assets/images/logo.JPG" width="150px" alt="logo"/>
        //                     </a>
        //                 </div>
        //
        //                 <div className="col-xl col-lg-1 col-md order-md-1 p-lg-0">
        //                     <a className="link-nks-light header-link" href="/contacts">Контакты</a>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        // </header>


    <header
        className="d-flex flex-wrap align-items-center justify-content-center
         justify-content-md-between py-2 mb-4 border-bottom">
        <a href="/" className="align-items-center col-md-3 mb-md-0 text-dark text-decoration-none">
            <img src="assets/images/logo.JPG" width="150px" alt="logo"/>
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 link-secondary">Каталог</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Услуги</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Партнерство</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Проект</a></li>
        </ul>

        <div className="col-md-3">
            <button type="button" className="btn btn-primary">Sign-up</button>
        </div>
    </header>
    )

}
export default Header
