import React, {useEffect, useState} from "react";
// import {useCart} from "react-use-cart";


const OrderPage2 = () => {
    return(
        <div className="container-fluid p-5">
            <div className="row m-1 text-white text-start">
                <div className="col-3">
                    <div className="form-group mb-2">
                        <p className="mb-1">Имя</p>
                        <input type="text" required
                               className="form-control input-box"/>
                    </div>
                </div>

                <div className="col-3">
                    <div className="form-group mb-1">
                        <p className="mb-1">Фамилия</p>
                        <input type="text" required
                               className="form-control input-box"/>
                    </div>
                </div>
            </div>

            <div className="row m-1 text-white text-start">
                <div className="col-3">
                    <p className="mb-1 text-left">Email</p>
                    <input type="email" required
                           className="form-control input-box"/>
                </div>

                <div className="col-3">
                    <p className="mb-1 text-left">Телефон</p>
                    <input type="tel"
                           className="form-control input-box"/>
                </div>
            </div>

            <div className="col-6 m-2">
                <h6 className="text-white">Согласно политики конфидециальности внесенные в форму личные данные будут использованы исключительно
                для обработки вашего заказа.</h6>
            </div>

        </div>
    )
}
export default OrderPage2;
