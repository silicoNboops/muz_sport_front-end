import React from 'react';
import Ad from "./Ad";
import CatalogTemplate from "./filters/CatalogTemplate";
import {useContext} from "react";
import LanguageContext from "../LanguageProvider/LanguageProvider";

const Home = () => {
    const {language} = useContext(LanguageContext)

    return (
        <>
        {language === 'Russian' ?
            <div className="container-fluid main-page p-5">
                <h1 className="text-start text-white text-wrap ms-5"  style={{width:"700px"}}> Музыка для спортивных
                    выступлений на заказ </h1>
                <h4 className="text-white me-5 text-home">с элементом суггестивного воздействия и релаксационным модулем</h4>
                {/*<img src="assets/icons/imbit_tag.png" height="50px"/>*/}
                <h6 className="text-white text-start ms-5 position-relative" style={{bottom:'30px'}}> создано в партнерстве
                    с институтом ИМБИТ
                    <a className="text-white p-3" href="#">подробнее</a>
                </h6>

                <div className="pt-5">
                    <h1 className="pt-4 ps-5 text-start text-white">Как это работает?</h1>
                    <div className="d-inline-flex m-3 pt-4">
                        <ul className="list-unstyled me-2">
                            <li>
                                <img height="100px" src="/assets/icons/magic.png"/>
                            </li>
                            <li>
                                <p className="text-white text-wrap pt-3" style={{width:"185px"}}>Создается трек
                                    профессионального звучания по вашим параметрам</p>
                            </li>
                        </ul>

                        <ul className="list-unstyled ms-2 me-2">
                            <li>
                                <img height="100px" src="/assets/icons/blockchain.png"/>
                            </li>
                            <li>
                                <p className="text-white text-wrap pt-3" style={{width:"175px"}}>В него внедряется суггестивная
                                    информация для повышения концетрации и мобилизации на соревновании</p>
                            </li>
                        </ul>

                        <ul className="list-unstyled ms-2 me-2">
                            <li>
                                <img height="100px" src="/assets/icons/relax.png"/>
                            </li>
                            <li>
                                <p className="text-white text-wrap pt-3" style={{width:"185px"}}>Также создается релаксационный
                                    модуль для достижения эффекта расслабления и снятия стресса между тренировками</p>
                            </li>
                        </ul>

                        <ul className="list-unstyled ms-2 me-2">
                            <li>
                                <img height="100px" src="/assets/icons/vinyl.png"/>
                            </li>
                            <li>
                                <p className="text-white text-wrap pt-3" style={{width:"175px"}}>Регулярное выполение спортсменом
                                    данных действий во время и после физической нагрузки</p>
                            </li>
                        </ul>

                        <ul className="list-unstyled pt-5 ms-2 me-2">
                            <img src="/assets/icons/minus.png" className="ms-2 me-2" height="35px"/>
                            <img src="/assets/icons/minus.png" className="ms-2 me-2" height="35px"/>
                        </ul>

                        <ul className="list-unstyled ms-2 me-2">
                            <li>
                                <img height="100px" src="/assets/icons/goal.png"/>
                            </li>
                            <li>
                                <p className="text-white text-wrap pt-3" style={{width:"205px"}}>Достижение поставленных
                                    спортивных целей без вреда для здоровья и применения запрещенных препаратов</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <Ad/>
                <CatalogTemplate/>
            </div>
            :
            <div className="container-fluid main-page p-5">
                <h1 className="text-start text-white text-wrap ps-5"  style={{width:"750px"}}> Music for sports
                    custom performances </h1>
                <h4 className="text-white text-start ps-5" style={{bottom:'20px'}}>with a suggestive element and a relaxation module</h4>
                {/*<img src="assets/icons/imbit_tag.png" height="50px"/>*/}
                <h6 className="text-white pt-2 text-start ms-5 position-relative"> created in partnership with
                    with IMBIT Institute
                    <a className="text-white p-3" href="#">more</a>
                </h6>

                <div className="pt-5">
                    <h1 className="pt-4 ps-5 text-start text-white">How does it work?</h1>
                    <div className="d-inline-flex m-3 pt-4">
                        <ul className="list-unstyled me-2">
                            <li>
                                <img height="100px" src="/assets/icons/magic.png"/>
                            </li>
                            <li>
                                <p className="text-white text-wrap pt-3" style={{width:"185px"}}>A track is created
                                    professional sound according to your parameters</p>
                            </li>
                        </ul>

                        <ul className="list-unstyled ms-2 me-2">
                            <li>
                                <img height="100px" src="/assets/icons/blockchain.png"/>
                            </li>
                            <li>
                                <p className="text-white text-wrap pt-3" style={{width:"175px"}}>It incorporates suggestive
                                    information to increase concentration and mobilization in the competition</p>
                            </li>
                        </ul>

                        <ul className="list-unstyled ms-2 me-2">
                            <li>
                                <img height="100px" src="/assets/icons/relax.png"/>
                            </li>
                            <li>
                                <p className="text-white text-wrap pt-3" style={{width:"185px"}}>A relaxation
                                    module to achieve a relaxation effect and relieve stress between workouts</p>
                            </li>
                        </ul>

                        <ul className="list-unstyled ms-2 me-2">
                            <li>
                                <img height="100px" src="/assets/icons/vinyl.png"/>
                            </li>
                            <li>
                                <p className="text-white text-wrap pt-3" style={{width:"175px"}}>The athlete's regular performance of
                                    These activities during and after physical activity</p>
                            </li>
                        </ul>

                        <ul className="list-unstyled pt-5 ms-2 me-2">
                            <img src="/assets/icons/minus.png" className="ms-2 me-2" height="35px"/>
                            <img src="/assets/icons/minus.png" className="ms-2 me-2" height="35px"/>
                        </ul>

                        <ul className="list-unstyled ms-2 me-2">
                            <li>
                                <img height="100px" src="/assets/icons/goal.png"/>
                            </li>
                            <li>
                                <p className="text-white text-wrap pt-3" style={{width:"205px"}}>Achieving your goals
                                    without harming your health or using illegal drugs</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <Ad/>
                <CatalogTemplate/>
            </div>
        }
        </>

    )
};

export default Home;
