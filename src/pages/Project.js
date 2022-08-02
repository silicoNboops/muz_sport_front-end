import React, {useEffect, useState} from "react";
import {useContext} from "react";
import LanguageContext from "../LanguageProvider/LanguageProvider";


const Project = () => {
    const {language} = useContext(LanguageContext)
    const [email, setEmail] = useState('')

    const initData = () => {
        setEmail('')
    }

    return(
        <>
            {language === 'Russian' ?
                <div className="container-fluid text-start">
                    <div className="p-5">
                        <div className="icon-link-badged">
                            <h5 className="text-white">
                                <img src="/assets/icons/about-us.png" className="pe-3" width="80px"/>
                                Кто мы:
                            </h5>
                            <h6 className="text-white pt-2">Сообщество профессиональных звукорежиссеров и специалистов в области
                                саунддизайна. Некоторые из наших сотрудников сами музыканты и выпускают свои работы на лейблах.
                                Суммарно через нас прошло уже более 5000 заказов и поэтому мы прекрасно разбираемся в том, чем
                                занимаемся.
                            </h6>
                        </div>
                        <div className="icon-link-badged pt-4">
                            <h5 className="text-white">
                                <img src="/assets/icons/premium.png" className="pe-3" width="80px"/>
                                Наша особенность:
                            </h5>
                            <h6 className="text-white pt-2">Уникальность проекта - создание спортивных программ с возможностью
                                добавления суггестивного эфекта (элемент психологического сопровождения). Это не просто красивые
                                слова. Это методика психологического воздествия, которая уже зарекомендовала себя в различных
                                областях и доказала свою высокую практическую эффективность. В сотрудничестве с Институтом ИМБИТ
                                мы подготавливаем программы для сопровождения спортсменов различных дисциплин, а теперь можем
                                подготовить и для Вас.
                            </h6>
                            <h6 className="text-white pt-2">Подробнее о методике и в каких организациях, в том числе спортивных, она
                                применяется можно ознакомиться тут: <a href="https://имбит.рф/" className="text-white">
                                    официальный сайт ИМБИТ</a>
                            </h6>
                        </div>

                        <div className="icon-link-badged pt-4">
                            <h5 className="text-white">
                                <img src="/assets/icons/more.png" className="pe-3" width="80px"/>
                                О сервисе:
                            </h5>
                            <h6 className="text-white pt-2">Для вашего удобства мы создали данную платформу по продаже, поиску и
                                созданию на заказ программ для спортивных выступлений различных дисциплин. Здесь вы сможете
                                послушать, выбрать и оплатить то, что вам понравиться из готовых работ прямо онлайн и сразу
                                получить на почту. А можете заказать  специализированную программу с эффектом суггестивного
                                воздествия, а также дополнительно разгрузочный модуль. И мы сделаем индивидуально под Вас.</h6>
                            <h6 className="text-white pt-2">В среднем после оформления и 100% оплаты заказа придется подождать от 5
                                до 7 рабочих дней в зависимости от степени загруженности(бывает и раньше выполняем). Готовые заказы
                                будут находиться в вашем личном кабинете, откуда вы их сможете скачать в течение 5 суток. Как заказ
                                будет готов, Вам придет автоматическое оповещение на почту.</h6>
                            <h6 className="text-white pt-2">Надеемся на Ваше терпение и понимание, ведь в итоге Ваш ребенок услышит
                                долгожданную программу, под которую ему захочется выступать снова и снова.
                            </h6>
                        </div>
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
                            <h5 className="text-white">
                                <img src="/assets/icons/about-us.png" className="pe-3" width="80px"/>
                                Who we are:
                            </h5>
                            <h6 className="text-white pt-2">A community of professional sound engineers and specialists in
                                sound design. Some of our employees are musicians themselves and release their works on labels.
                                Altogether more than 5000 orders have passed through us and that's why we know what we do very well.
                                we do.
                            </h6>
                        </div>
                        <div className="icon-link-badged pt-4">
                            <h5 className="text-white">
                                <img src="/assets/icons/premium.png" className="pe-3" width="80px"/>
                                Our specialty:
                            </h5>
                            <h6 className="text-white pt-2">The uniqueness of the project is the creation of sports programs with the possibility of
                                The uniqueness of the project is the creation of sports programs with the possibility of adding a suggestive effect (an element of psychological support). This is not just pretty
                                words. It is a technique of psychological influence that has already proved itself in various
                                It is a technique of psychological influence that has already proved to be very effective in practice. In collaboration with the Institute IMBIT
                                We prepare programs to accompany athletes in various disciplines, and now we can
                                Now we can do it for you.
                            </h6>
                            <h6 className="text-white pt-2">More information about the methodology and in which organizations, including sports, it
                                is used, you can read here: <a href="https://имбит.рф/" className="text-white">
                                    IMBIT official website</a>
                            </h6>
                        </div>

                        <div className="icon-link-badged pt-4">
                            <h5 className="text-white">
                                <img src="/assets/icons/more.png" className="pe-3" width="80px"/>
                                About the service:
                            </h5>
                            <h6 className="text-white pt-2">For your convenience, we have created this platform for selling, searching and
                                custom programs for sports performances of different disciplines. Here you can
                                listen, choose and pay for what you like out of the ready-made works directly online and immediately
                                get it in your mail. Or you can order a specialized program with the effect of suggestive
                                The program can also be ordered with the effect of suggestion, as well as an additional
                                unloading module. And we will do it individually for you.</h6>
                            <h6 className="text-white pt-2">On average, after registration and 100% payment of the order you have to wait from 5
                                To 7 working days depending on availability (sometimes earlier execution). Ready orders
                                will be in your personal cabinet, where you can download them within 5 days. As the order
                                will be ready, you will receive automatic notification on e-mail.</h6>
                            <h6 className="text-white pt-2">We hope for your patience and understanding, because in the end your child will hear
                                a long-awaited program that he or she will want to perform to over and over again.
                            </h6>
                        </div>
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
export default Project;
