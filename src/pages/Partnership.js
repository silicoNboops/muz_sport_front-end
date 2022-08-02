import React, {useEffect, useState} from "react";
import {useContext} from "react";
import LanguageContext from "../LanguageProvider/LanguageProvider";


const Partnership = () => {
    const {language} = useContext(LanguageContext)
    const [email, setEmail] = useState('')

    const initData = () => {
        setEmail('')
    }
    return (
        <>
        {language === 'Russian' ?
            <div className="container-fluid text-start">
                <div className="p-5">
                    <div className="icon-link-badged">
                        <h5 className="text-white text-start">
                            <img src="/assets/icons/penny-whistle.png" width="70px"/>
                            Тренерам:
                        </h5>
                        <h6 className="text-white">У вас подающие надежды спортсмены, которых вы хотите взрастить до
                            олимпийских чемпионов? Использование суггестивного воздействия (эффекта внушения) не противоречит
                            антидоппинговым правилам, а значит вы и Ваш подопечный ничем не рискуете при использовании наших
                            программ на выступлениях любого уровня. И тем не менее, вы будете иметь явное преимущество по
                            сравнению с остальными конкурентами. Мы предлагаем индивидуальным тренерам партнерскую программу с
                            гибкими условиями сотрудничества и существенными скидками при соответсвующем объеме постоянных
                            заказов. Подробнее узнать по условиям вы можете написав нам в обратной связи</h6>
                    </div>

                    <div className="icon-link-badged pt-5">
                        <h5 className="text-white">
                            <img src="/assets/icons/medal.png" width="70px"/>
                            Спортивным школам:
                        </h5>
                        <h6 className="text-white">Спортивные ученики всегда заинтересованы не только в высоких спортивных
                            показателях, но и в стабильном психо-эмоциональном состоянии своих учеников. Тренировка не только
                            под любимого исполнителя, но и при воздействии суггестивного фона позволит уменьшить
                            психо-эмоциональную нагрузку и стабилизировать психо-эмоциональный фон. Это приведет к повышению
                            концентрации и мотивации спортсмена, - а следовательно и более высоким спортивным результатам.</h6>
                    </div>
                    <p className="text-white pt-3">Подробнее о методике и в каких организациях, в том числе спортивных, она
                        применяется можно ознакомиться тут : <a href="https://имбит.рф/" className="text-white"> официальный
                            сайт ИМБИТ </a></p>
                </div>

                <div className="col-4 d-inline-flex p-4">
                    <input type="text" required
                           placeholder="Ваш e-mail"
                           value={email}
                           className="form-control input-box"
                           onChange={(e) =>
                               setEmail(e.target.value)}
                    />
                    <button className="btn btn-light col-4">Подписаться</button>
                </div>
            </div>
            :
            <div className="container-fluid text-start">
                <div className="p-5">
                    <div className="icon-link-badged">
                        <h5 className="text-white text-start">
                            <img src="/assets/icons/penny-whistle.png" width="70px"/>
                            Coaches:
                        </h5>
                        <h6 className="text-white">You have promising athletes that you want to develop into
                            Olympic champions? The use of suggestion does not contradict the anti-doping rules.
                            anti-doping rules, which means you and your student don't risk anything when using our
                            programs at any level of performances. Nevertheless, you will have a distinct advantage
                            compared to other competitors. We offer individual coaches a partner program with
                            flexible terms of cooperation and substantial discounts with the corresponding volume of permanent
                            orders. For more information on the conditions you can write us in feedback</h6>
                    </div>

                    <div className="icon-link-badged pt-5">
                        <h5 className="text-white">
                            <img src="/assets/icons/medal.png" width="70px"/>
                            Sports schools:
                        </h5>
                        <h6 className="text-white">Sports students are always interested not only in high athletic
                            performance, but also in the stable psycho-emotional state of their students. Training not only
                            under the favorite performer, but also with the influence of a suggestive background will allow to reduce
                            psycho-emotional load and stabilize the psycho-emotional background. This will lead to increased
                            concentration and motivation of the athlete, - and, consequently, a higher sports performance .</h6>
                    </div>
                    <p className="text-white pt-3">More information about the methodology and in which organizations, including sports, it
                        is used, you can read here : <a href="https://имбит.рф/" className="text-white"> official
                            IMBIT website </a></p>
                </div>

                <div className="col-4 d-inline-flex p-4">
                    <input type="text" required
                           placeholder="Ваш e-mail"
                           value={email}
                           className="form-control input-box"
                           onChange={(e) =>
                               setEmail(e.target.value)}
                    />
                    <button className="btn btn-light col-4">Subscribe</button>
                </div>
            </div>
        }
        </>
    )

}
export default Partnership
