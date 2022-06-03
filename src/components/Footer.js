import React from "react";

const Footer = () => {
    return(
        <footer className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-2 mt-4">
                            <aside className="logo_company_footer">
                                <a href="/">
                                    <img src='/assets/images/logo_white.JPG'
                                         width="150px" className="float-lg-left" alt="logo"/>
                                </a>
                            </aside>
                        </div>

                        <div className="col-4 text-end p-3">
                            <ul className="list-unstyled">
                                <li>
                                    <h6 className="text-white">Интернет-платформа по продаже, поиску и созданию
                                    программ для спортивных выступлений с элементом суггестивного воздействия
                                    и разгрузочным модулем</h6>
                                </li>
                                <li>
                                    <h5 className="text-center text-muted">2021-2022</h5>
                                </li>
                            </ul>
                        </div>

                        <div className="col-3 p-3">
                            <ul>
                                <li>
                                    <p className="text-white">К оплате принимаются:</p>
                                </li>
                                <li className="d-inline-flex">
                                    <img src="assets/icons/card.PNG" className="me-1" height='40px'/>
                                    <img src="assets/icons/qiwi.PNG" className="me-1" height='40px'/>
                                    <img src="assets/icons/y-money.PNG" className="me-1" height='40px'/>
                                    <img src="assets/icons/pay.PNG" className="me-1" height='40px'/>
                                </li>
                            </ul>
                        </div>

                        <div className="col-3 p-5">
                            <div className="icon-link-badged">
                                <a href="ad" className="text-white">
                                    <img src="assets/icons/horn.png" width="30px"/>
                                    Реклама на сайте
                                </a>
                            </div>
                        </div>

                    </div>
            </div>
        </footer>

    )
}

export default Footer


