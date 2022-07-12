import React, {useState, useEffect} from "react";

const Footer = () => {
    const [Footer, setFooter] = useState({})

    useEffect(() => {
        async function fetchInitData() {
            await fetch(process.env.REACT_APP_MUZSPORT_API + '/footer/4')
                .then(response => response.json())
                .then(data => setFooter(data))
        }
        fetchInitData();
    },[])

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
                                    <h5 className="text-center text-muted">{Footer.year_count_start}-
                                        {Footer.year_count_end}</h5>
                                </li>
                            </ul>
                        </div>

                        <div className="col-3 p-3">
                            <ul>
                                    <p className="text-white">К оплате принимаются:</p>
                                <li className="d-inline-flex">

                                {Footer.payment_icons && Footer.payment_icons.map((payment_icon) => {
                                    return(
                                        <img src={process.env.REACT_APP_MUZSPORT_MEDIA + payment_icon}
                                             className="me-1" height='40px'/>
                                    );
                                })}
                                </li>


                            </ul>
                        </div>

                        <div className="col-3 p-5">
                            <div className="icon-link-badged">
                                {!Footer.link_icon ?
                                    null
                                    :
                                    <a href="ad" className="text-white">
                                        <img src="assets/icons/horn.png" width="30px"/>
                                        Реклама на сайте
                                    </a>
                                }

                            </div>
                        </div>

                    </div>
            </div>
        </footer>
    )
}

export default Footer


