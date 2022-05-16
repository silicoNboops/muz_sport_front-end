import React from "react";

const Header = () => {

    return(
        <header className="nks-bg-color">
            <section className="header-main header-height border-bottom">
                <div className="container">
                    <div className="row align-items-baseline">

                        <div className="col-lg-3 col-md-6 p-lg-0 pt-md-2">
                            <a href="/">
                                <img src="assets/images/logo.JPG" width="150px" alt="logo"/>
                            </a>
                        </div>

                        <div className="col-xl col-lg-1 col-md order-md-1 p-lg-0">
                            <a className="link-nks-light header-link" href="/contacts">Контакты</a>
                        </div>
                    </div>
                </div>
            </section>
        </header>

        // <header className="container">
        //     <section className="padding-y header-main header-height border-bottom">
        //         <div className="row align-items-baseline">
        //             <img src="assets/images/logo.JPG" width="150px" alt="logo"/>
        //         </div>
        //     </section>
        // </header>
    )

}
export default Header
