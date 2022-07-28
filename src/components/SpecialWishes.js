import React, {useState} from "react";

const SpecialWishes = ({price, placeOrder}) => {
    const [commentary, setCommentary] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const initData = () => {
        setCommentary('');
        setName('');
        setPhone('');
        setEmail('');
    }

    return (
        <div className="container p-5">
            <div className="background-accordion pt-4 pb-4 container">
                <div className="container text-start ps-4 card pt-3" style={{borderRadius: "12px"}}>
                    <h5 className="pt-2">Особые пожелания</h5>
                    <h6>Что-то, что относится ко всей спортивной программе</h6>
                    <textarea type="text"
                              value={commentary}
                              className="form-control input-box mt-3 mb-3"
                              style={{minHeight: "220px", backgroundColor: "#f4f4f4"}}
                              placeholder="ТОП-3 бесполежных особых пожелания =)
                          -Чтобы тренеру понравилось
                          -Чтобы душа пела
                          -Чтобы что-то необычное
                          А теперь серьзено и по делу...
                          Пример:
                          -Увеличить общую громкость трека
                          -Понизить басы (низкие частоты)"
                              onChange={(e) =>
                                  setCommentary(e.target.value)}/>

                </div>
                    <input className="checkbox-ex" id="label3" type="checkbox" value=""
                           data-bs-toggle="collapse"
                           data-bs-target="#collapseFive"
                           aria-expanded="true"
                           style={{borderRadius: "12px"}}
                           aria-controls="collapseOne"/>
                <label id="label1" htmlFor="label3" className="text-white checkbox-ex">Отмечая данный пункт я
                    подтверждаю, что меня уведомили о сроке выполнения заказа (обычно от 5 до 7 рабочих дней)>
                </label>

                <div>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingOne"
                         data-bs-parent="#accordionExample">
                        <div className="pt-5">
                            <div className="container card p-5" style={{borderRadius: "12px"}}>
                                <div className="col-5">
                                    <div className="icontext">
                                        <img src="assets/icons/account2.png" className="pb-4 me-3" width="40px"/>
                                        <input type="text" required
                                               value={name}
                                               placeholder="ФИО"
                                               className="form-control col-6 input-box mb-4"
                                               onChange={(e) =>
                                                   setName(e.target.value)}
                                        />
                                    </div>

                                    <div className="icontext">
                                        <img src="assets/icons/phone.png" className="pb-4 me-3" width="40px"/>
                                        <input type="tel" required
                                               value={phone}
                                               className="form-control col-6 input-box mb-4"
                                               placeholder="Телефон"
                                               onChange={(e) =>
                                                   setPhone(e.target.value)}
                                        />
                                    </div>

                                    <div className="icontext">
                                        <img src="assets/icons/mail.png" className="pb-4 me-3" width="40px"/>
                                        <input type="email" required
                                               value={email}
                                               placeholder="Эл. почта"
                                               className="form-control col-6 input-box mb-4"
                                               onChange={(e) =>
                                                   setEmail(e.target.value)}
                                        />
                                    </div>
                                    {/*<img src="assets/icons/secure.png"  height="200px"/>*/}
                                </div>
                            </div>
                        </div>

                        {/*<img src='/assets/icons/price-tag.png' className="price-icon-wishes"/>*/}
                        <div className="imgblock-service">
                            <a href="/order" className="link-unstyled">
                                <a href="/order" className="fs-5 link-unstyled text-white">
                                    Заказать и оплатить</a>
                                <img src='assets/icons/price-tag.png' style={{bottom:'20px'}} className="price-icon-services"/>
                                <span>{price} ₽</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default SpecialWishes

