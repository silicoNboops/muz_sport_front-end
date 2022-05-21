import React from 'react';
import Ad from "./Ad";

const Home = () => {
    return (
        <div className="container-fluid main-page p-5">
            <h1 className="text-start text-white text-wrap"  style={{width:"700px"}}> Музыка для спортивных
                выступлений на заказ </h1>
            <h5 className="text-white">с элементом суггестивного воздействия и релаксационным модулем</h5>
            <h6 className="text-white text-start"> создано в партнерстве с институтом ИМБИТ
                <a className="text-white p-3" href="#">подробнее</a>
            </h6>

            <div className="pt-5">
                <h1 className="pt-4 text-start text-white">Как это работает?</h1>
                <div className="d-inline-flex m-3 pt-4">
                    <ul className="list-unstyled me-2">
                        <li>
                            <img height="100px" src="assets/icons/magic.png"/>
                        </li>
                        <li>
                            <p className="text-white text-wrap pt-3" style={{width:"185px"}}>Создается трек
                                профессионального звучания по вашим параметрам</p>
                        </li>
                    </ul>

                    <ul className="list-unstyled ms-2 me-2">
                        <li>
                            <img height="100px" src="assets/icons/blockchain.png"/>
                        </li>
                        <li>
                            <p className="text-white text-wrap pt-3" style={{width:"175px"}}>В него внедряется суггестивная
                            информация для повышения концетрации и мобилизации на соревновании</p>
                        </li>
                    </ul>

                    <ul className="list-unstyled ms-2 me-2">
                        <li>
                            <img height="100px" src="assets/icons/relax.png"/>
                        </li>
                        <li>
                            <p className="text-white text-wrap pt-3" style={{width:"185px"}}>Также создается релаксационный
                            модуль для достижения эффекта расслабления и снятия стресса между тренировками</p>
                        </li>
                    </ul>

                    <ul className="list-unstyled ms-2 me-2">
                        <li>
                            <img height="100px" src="assets/icons/vinyl.png"/>
                        </li>
                        <li>
                            <p className="text-white text-wrap pt-3" style={{width:"175px"}}>Регулярное выполение спортсменом
                            данных действий во время и после физической нагрузки</p>
                        </li>
                    </ul>

                    <ul className="list-unstyled pt-5 ms-2 me-2">
                            <img src="assets/icons/minus.PNG" className="ms-2 me-2" height="35px"/>
                            <img src="assets/icons/minus.PNG" className="ms-2 me-2" height="35px"/>
                    </ul>

                    <ul className="list-unstyled ms-2 me-2">
                        <li>
                            <img height="100px" src="assets/icons/goal.png"/>
                        </li>
                        <li>
                            <p className="text-white text-wrap pt-3" style={{width:"205px"}}>Достижение поставленных
                                спортивных целей без вреда для здоровья и применения запрещенных препаратов</p>
                        </li>
                    </ul>
                </div>
            </div>
            <Ad/>
        </div>
    )
};

export default Home;
