import React, {useEffect, useState} from "react";
// import {useCart} from "react-use-cart";


const OrderPage = () => {
    // const {
        // items, emptyCart, removeItem, isEmpty, updateItemQuantity,totalItems,
        // cartTotal} = useCart();
    const [coupon, setCoupon] = useState('');

    const submit = (e) => {
        const number = coupon
    }

        const initData = () => {
            setCoupon('');
        }

        return (
            <div className="container-fluid row p-5">
                <table className="table text-white">
                    <tbody>
                    <tr>
                        <td scope="col">Тип заказа</td>
                        <td scope="col">Трек</td>
                        <td scope="col">Дата</td>
                        <td scope="col">Стоимость</td>
                    </tr>
                    <tr>
                        <td scope="row">Трек из каталога</td>
                        <td>Alan Walker - Alone</td>
                        <td>10.04.2022</td>
                        <td>560 руб</td>
                    </tr>
                    <tr>
                        <td scope="row">Трек из каталога</td>
                        <td>RuPaul - Call Me Mother</td>
                        <td>10.04.2022</td>
                        <td>560 руб</td>
                    </tr>
                    {/*<tr>*/}
                    {/*    <th scope="row">3</th>*/}
                    {/*    <td>Larry</td>*/}
                    {/*    <td>the Bird</td>*/}
                    {/*    <td>@twitter</td>*/}
                    {/*</tr>*/}
                    </tbody>
                </table>
                <div className="card col-3 row offset-9">
                    <h5>Стоимость : 1600 ₽</h5>
                </div>

                <form onSubmit={submit}>

                    <div className="ms-3 row">
                        <div className="col-3">
                            <div className="form-group mb-2">
                                <input type="text" required
                                       placeholder="введите код купона"
                                       value={coupon}
                                       className="form-control text-center input-box"
                                       onChange={(e) =>
                                           setCoupon(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-1">
                            <button type="submit" className="btn btn-light">Применить</button>
                        </div>
                    </div>
                </form>


                <div className="card col-4 row offset-8">
                    <h5>Стоимость со скидкой : 1545,6 ₽</h5>
                </div>

                <div className="row p-4 justify-content-end">
                    <div className="col-1 me-4">
                        <button type="button" className="btn btn-lg btn-light">Назад</button>
                    </div>
                    <div className="col-1">
                        <button type="button" className="btn btn-lg btn-light">Далее</button>
                    </div>
                </div>


            </div>
        )
    }
export default OrderPage
