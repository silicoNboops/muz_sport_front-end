import React, {useEffect, useState} from "react";
// import {useCart} from "react-use-cart";


const OrderPage2 = () => {
    return(
        <div className="container-fluid row p-5">
            <div className="col-6">

            <div className="row m-1 text-white text-start">
                    <div className="col-6">
                        <div className="form-group mb-2">
                            <p className="mb-1">Имя</p>
                            <input type="text" required
                                   className="form-control input-box"/>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-group mb-1">
                            <p className="mb-1">Фамилия</p>
                            <input type="text" required
                                   className="form-control input-box"/>
                        </div>
                    </div>
            </div>

            <div className="row m-1 text-white text-start">
                <div className="col-6">
                    <p className="mb-1 text-left">Email</p>
                    <input type="email" required
                           className="form-control input-box"/>
                </div>

                <div className="col-6">
                    <p className="mb-1 text-left">Телефон</p>
                    <input type="tel"
                           className="form-control input-box"/>
                </div>
            </div>


            <div className="col-11 m-2">
                <h6 className="text-white">Согласно политики конфидециальности внесенные в форму личные данные будут использованы исключительно
                для обработки вашего заказа.</h6>
            </div>
            </div>


            <div className="mt-4 col-6 text-white">
                <p className="text-start">Детали заказа</p>
                <figcaption className="card-props-column features-text">
                    <div className="card-props card-text">
                        <span className="font-weight-bolder">Тип заказа(1):</span>
                        <span className="font-weight-bold">Трек(и) из каталога</span>
                    </div>
                    <div className="card-props card-text">
                        <span className="font-weight-bolder ">Трек(1):</span>
                        <span className="font-weight-bold">RuPaul - Call Me Mother</span>
                    </div>
                    <div className="card-props card-text">
                        <span className="font-weight-bolder">Тип заказа(2):</span>
                        <span className="font-weight-bold">Трек(и) из каталога</span>
                    </div>
                    <div className="card-props card-text">
                        <span className="font-weight-bolder">Трек(2):</span>
                        <span className="font-weight-bold">Alan Walker - Alone</span>
                    </div>
                    <div className="card-props card-text">
                        <span className="font-weight-bolder">Общая стоимость:</span>
                        <span className="font-weight-bold">1680 Р</span>
                    </div>
                    <div className="card-props card-text">
                        <span className="font-weight-bolder">Примененная скидка:</span>
                        <span className="font-weight-bold">8%</span>
                    </div>
                    <div className="card-props card-text">
                        <span className="font-weight-bolder">Метод оплаты:</span>
                        <span className="font-weight-bold">Банковская карта</span>
                    </div>
                    <div className="card-props card-text">
                        <span className="font-weight-bolder">Дата заказа:</span>
                        <span className="font-weight-bold">10.04.2022</span>
                    </div>
                </figcaption>
                <div className="card col-12 mt-4">
                    <h5 className="text-black">Стоимость со скидкой : 1545,6 ₽</h5>
                </div>

            </div>

            <div className="row p-4 justify-content-end">
                <div className="col-1 me-4">
                    <button type="button" className="btn btn-lg btn-light">Назад</button>
                </div>
                <div className="col-1 me-4">
                    <button type="button" className="btn btn-lg btn-light">Оформить</button>
                </div>
            </div>

        </div>
    )
}
export default OrderPage2;
