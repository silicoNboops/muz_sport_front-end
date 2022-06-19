import React, {useEffect, useState} from "react";
// import {useCart} from "react-use-cart";


const OrderPage = () => {
    // const {
        // items, emptyCart, removeItem, isEmpty, updateItemQuantity,totalItems,
        // cartTotal} = useCart();
    const [coupon, setCoupon] = useState('');



    const getCoupon = (coupon) => {
        fetch(process.env.REACT_APP_MUZSPORT_API + '/coupon/' + coupon)
            .then(res => res.json())
            .then(data => console.log(data))
            // JSON.stringify(data))
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
                <div className="card  col-3 row offset-9">
                    <h5>Стоимость : 1600 ₽</h5>
                </div>


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
                            <button className="btn btn-light btn-danger btn-block"
                                    onClick={() => getCoupon(coupon)}>
                                    Применить
                            </button >
                        </div>
                    </div>


                <div className="card col-4 row offset-8">
                    <h5>Стоимость со скидкой : 1360 ₽</h5>
                </div>

                <div className="row p-4 justify-content-end">
                    <div className="col-1 me-4">
                        <button type="button" className="btn btn-lg btn-light">
                            <a href="/" className="link-unstyled">Назад</a>
                        </button>
                    </div>
                    <div className="col-1">
                        <button type="button" className="btn btn-lg btn-light">
                            <a href="/order2" className="link-unstyled">Далее</a>
                        </button>
                    </div>
                </div>


            </div>
        )
    }
export default OrderPage