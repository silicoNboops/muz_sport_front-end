import React, {useState} from "react";

const SpecialWishes = () => {
    const [commentary, setCommentary] = useState('');
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const initData = () => {
        setCommentary('');
        setName('');
        setPhone('');
        setEmail('');
    }

    return(
        <div className="container-fluid p-5">
            <div className="container card col-8 ps-5 pt-3" style={{borderRadius:"12px"}}>
                <h5 className="text-start pt-3">Особые пожелания</h5>
                <h6 className="text-start">Что-то, что относится ко всей спортивной программе</h6>
                <textarea type="text"
                          value={commentary}
                          className="form-control input-box mb-5 mt-3"
                          style={{minHeight:"220px", backgroundColor:"#f4f4f4"}}
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

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                           // className="btn btn-light btn-lg dropdown-toggle dropdown-toggle-split"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapseFive"
                           aria-expanded="true"
                           style={{borderRadius:"12px"}}
                           aria-controls="collapseOne"/>
                    <label className="form-check-label text-start pb-3" htmlFor="flexCheckDefault">Отмечая данный пункт я подтверждаю, что
                    меня уведомили о сроке выполнения заказа (обычно от 5 до 7 рабочих дней).</label>
                </div>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingOne"
                     data-bs-parent="#accordionExample">
                    <div className="accordion-body" >
                        <div className="container card p-5" style={{borderRadius:"12px"}}>
                            <div className="col-6">
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
                                <img src="assets/icons/secure.png"  height="200px"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default SpecialWishes

