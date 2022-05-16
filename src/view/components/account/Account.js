import React, {useEffect, useState} from 'react';
import {useCart} from "react-use-cart";


const Account = (props) => {
    const deliveryDefault = 'self-delivery';

    const {totalItems, cartTotal, items, emptyCart} = useCart();
    const [radio, setRadio] = useState(deliveryDefault);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState(undefined);
    const [commentary, setCommentary] = useState(undefined);

    const resetForm = () => {
        initData();
    }

    const initData = () => {
        setRadio(deliveryDefault);
        setName('');
        setPhone('');
        setEmail('');
        setName('');
        setCity('');
        setCommentary('');
    }

    const convertRadioValue = (radio) => {
        if (radio == 'sdc') {
            return '«СДЭК»';
        } else if (radio == 'shipping') {
            return 'Доставка'
        } else if (radio == 'business-lines') {
            return '«Деловые линии»'
        } else {
            // TODO уточнить какая доставка по умолчанию
            return 'Самовывоз'
        }
    }

    const placeOrder = (e) => {
        e.preventDefault();

        const price = cartTotal
        const delivery = convertRadioValue(radio)
        const order = {name, phone, email, city, commentary, price, delivery, items};

        fetch(process.env.REACT_APP_NKS_API + 'order/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then((result) => {
                    emptyCart();
                    initData();
                    // notifyOrderSuccess(result);

                    setTimeout(function(){
                        window.location.href = "/";

                    }, 3500);
                },
                (error) => {
                    // notifyOrderError();
                })
    };

    return (
        <section className="container">
            <div className="padding-y-sm">

                <form onSubmit={placeOrder}>

                    <div className="padding-top">
                        <div className="inner-block-1 order-person">
                            <div className="col-md-12">
                                <aside className="col-md-6 padding-y-sm text-left">
                                    <h5 className="text-gray">Шаг 2</h5>
                                    <h4> Введите контактную информацию </h4>
                                </aside>
                            </div>

                            <div className="row m-1">
                                <div className="col-md-5">
                                    <div className="form-group mb-2">
                                        <p className="mb-1 text-left">ФИО</p>
                                        <input type="text" required
                                               placeholder="ФИО контактного лица"
                                               value={name}
                                               className="form-control input-box"
                                               onChange={(e) =>
                                                   setName(e.target.value)}/>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group mb-1">
                                        <p className="mb-1 text-left">Контактный телефон</p>
                                        <input type="tel"
                                               placeholder="Контактный телефон" required
                                               value={phone}
                                               className="form-control input-box"
                                               onChange={(e) =>
                                                   setPhone(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-1">
                                <div className="col-md-5">
                                    <p className="mb-1 text-left">Email</p>
                                    <input type="email" required
                                           placeholder="Ваша электронная почта"
                                           value={email}
                                           className="form-control input-box"
                                           onChange={(e) =>
                                               setEmail(e.target.value)}/>
                                </div>

                                <div className="col-md-6">
                                    <p className="mb-1 text-left">Адрес доставки</p>
                                    <input type="text"
                                           placeholder="Город"
                                           value={city}
                                           className="form-control input-box"
                                           onChange={(e) =>
                                               setCity(e.target.value)}/>
                                </div>
                            </div>

                            <div className="form-group padding-top-sm">
                                <div className="col-md-8">
                                    <p className="mb-1 text-left">Комментарий к заказу</p>
                                    <textarea type="text" name="message"
                                              placeholder="Текст сообщения"
                                              value={commentary}
                                              className="form-control input-box"
                                              onChange={(e) =>
                                                  setCommentary(e.target.value)}>
                                            </textarea>
                                </div>
                            </div>

                            <footer>
                                <div className="col-md-12 center-x">
                                    <div className="row">
                                        <div className="col-md-3 m-3">
                                            <ul className="text-left list-unstyled">
                                                <li><span
                                                    className="text-muted small-info font-weight-bold">Товаров в заказе:</span>
                                                </li>
                                                <li><h5>{totalItems} шт.</h5></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-2 m-3">
                                            <ul className="text-left list-unstyled">
                                                <li><span
                                                    className="text-muted small-info font-weight-bold">Сумма заказа:</span>
                                                </li>
                                                <li><h5>{cartTotal} ₽</h5></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3 m-3">
                                            <ul className="text-left list-unstyled">
                                                <li><span
                                                    className="text-muted small-info font-weight-bold">Способ доставки</span>
                                                </li>
                                                <li><h5>{convertRadioValue(radio)}</h5></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="float-left btn-group">
                                    <div className="col-auto">
                                        <button className="btn btn-muz btn-lg"
                                                type="submit">
                                            Оформить заказ
                                        </button>
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-outline-gray-light btn-lg"
                                                type="button"
                                                onClick={resetForm}>
                                            Сбросить данные
                                        </button>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Account;
