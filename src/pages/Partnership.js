import React, {useEffect, useState} from "react";


const Partnership = () => {
    const [email, setEmail] = useState('')

    return (
        <div className="container-fluid">
            <div className="p-5">
                <div className="icon-link-badged">
                    <h5 className="text-white text-start">
                        <img src="assets/icons/penny-whistle.png" width="70px"/>
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
                    <h5 className="text-white text-start">
                        <img src="assets/icons/medal.png" width="70px"/>
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

            <div className="col-4 row p-4">
                <div className="form-group mb-1">
                    <input type="text" required
                           placeholder="Ваш e-mail"
                           // value={email}
                           className="form-control input-box"
                           />
                </div>
                <button className="btn btn-light col-4">Подписаться</button>
            </div>
        </div>
    )
}
export default Partnership
