import React, {useEffect, useState} from "react";
// import {useCart} from "react-use-cart";


const OrderPage2 = () => {

    const [name, setName] = useState('');
    const [last_name, setLast_name] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const initData = () => {
        setName('');
        setPhone('');
        setEmail('');
        setLast_name('');
    }

    const placeOrder = (e) => {
        e.preventDefault();
        const order_number = 12345
        const price = 123
        const order = {name, last_name, phone, email, order_number, price};

        console.log(JSON.stringify(order))

        fetch(process.env.REACT_APP_MUZSPORT_API + '/order/create/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then((result) => {
                    setTimeout(function(){
                        window.location.href = "/";

                    }, 3500);
                },
                (error) => {
                })
    };

    return(
        <div className="container-fluid row p-5">
            <form className="row" onSubmit={placeOrder}>
            <div className="col-6">
                <div className="row m-1 text-white text-start">
                    <div className="col-6">
                        <div className="form-group mb-2">
                            <p className="mb-1">Имя</p>
                            <input type="text" required
                                   value={name}
                                   className="form-control input-box"
                                   onChange={(e) =>
                                       setName(e.target.value)}/>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-group mb-1">
                            <p className="mb-1">Фамилия</p>
                            <input type="text" required
                                   value={last_name}
                                   className="form-control input-box"
                                   onChange={(e) =>
                                       setLast_name(e.target.value)}/>
                        </div>
                    </div>
            </div>

            <div className="row m-1 text-white text-start">
                <div className="col-6">
                    <p className="mb-1 text-left">Email</p>
                    <input type="email" required
                           value={email}
                           className="form-control input-box"
                           onChange={(e) =>
                               setEmail(e.target.value)}/>
                </div>

                <div className="col-6">
                    <p className="mb-1 text-left">Телефон</p>
                    <input type="tel" required
                           value={phone}
                           className="form-control input-box"
                           onChange={(e) =>
                               setPhone(e.target.value)}/>
                </div>
            </div>


            <div className="col-11 m-2">
                <h6 className="text-white">Согласно политики конфидециальности внесенные в форму личные данные будут использованы исключительно
                для обработки вашего заказа.</h6>
            </div>
            </div>


            <div className="mt-4 col-6 text-white">
                <h5 className="text-start pb-3">Детали заказа</h5>
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
                    <button type="button" className="btn btn-lg btn-light">
                        <a href="/order" className="link-unstyled">Назад</a>
                    </button>
                </div>
                <div className="col-1 me-4">
                    <button type="submit" className="btn btn-lg btn-light">
                        {/*<a href="#" className="link-unstyled">*/}
                            Оформить
                        {/*</a>*/}
                    </button>
                </div>
            </div>
            </form>
        </div>
    )
}
export default OrderPage2;
