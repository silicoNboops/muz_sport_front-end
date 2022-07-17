import React from "react";


const AdPage = () => {
    return(
        <div className="container-fluid text-start">
            <div className="p-5">
                <div className="icon-link-badged">
                    <h5 className="text-white">
                        <img src="/assets/icons/horn.png" className="pe-3" width="80px"/>
                        Реклама на сайте
                    </h5>
                    <h6 className="text-white">Мы не стремимся "замусорить" сайт назойливой и нецелевой рекламой. Наша
                        задача предоставить посетителям выбор лучшего, а для нас это способ несколько снизить затраты
                    на хостинг и прочие сервисы, чтобы вы всегда имели возможность быстро и удобно совершить заказ
                    спортивной программы для Вашего чемпиона. Надеемся на понимание =)</h6>
                </div>

                <div className="icon-link-badged pt-5 pb-3">
                    <h5 className="text-white text-start">
                        <img src="/assets/icons/premium.png" className="pe-3" width="80px"/>
                        Рекламодателю
                    </h5>
                    <h6 className="text-white">На главной странице сайта в версии для ПК существует два слота в верхней
                    части (перед фильтром) для размещения вашей рекламы.</h6>

                    <h5 className="text-white pt-4">Широкоформатный баннер:</h5>
                    <h6 className="text-white pt-3">Размеры 1225*440</h6>
                    <h6 className="text-white ">Маска изображения : закругленные углы 20px (автоматическая обрезка
                        по маске)</h6>
                    <h6 className="text-white ">Формат размещения : статическое изображение (JPG, PNG, PDF, SVG)</h6>
                    <h6 className="text-white ">Стоимость : 1200/мес</h6>
                    <div className="col-8 ">
                        <div className="card-img img-wrap text-center pt-3 ">
                            <img src="/assets/images/ad.png" className="elem-ad" height="345px" width="100%"/>
                            <p>Красивое платье - еще полдела...</p>
                            <h6>1225*440</h6>
                        </div>
                    </div>

                    <h5 className="text-white pt-5">Прямоугольный баннер:</h5>
                    <h6 className="text-white pt-3">Размеры 600*440</h6>
                    <h6 className="text-white ">Маска изображения : закругленные углы 20px (автоматическая обрезка
                        по маске)</h6>
                    <h6 className="text-white ">Формат размещения : статическое изображение (JPG, PNG, PDF, SVG)</h6>
                    <h6 className="text-white ">Стоимость : 700/мес</h6>
                </div>
                <div className="col-4 elem-ad card">
                    <p className="p-3 text-white col-12">Профессионально скомпанованная программа подчеркивает утонченность, или,
                        наоборот, придаст современный пульсирующий энергией ритм - что позволит вашему чемпиону раскрыться!
                        <br/><br/>
                        А внедренный в программу элемент суггестивного воздействия и дополнительный разгрузочный модуль окажет
                        психологическую поддержку спортсмену во время выступления и после интенсивных тренировок</p>
                </div>
            </div>

            {/*<div className="col-4 row p-4">*/}
            {/*    <div className="form-group mb-1">*/}
            {/*        <input type="text" required*/}
            {/*               placeholder="Ваш e-mail"*/}
            {/*            // value={email}*/}
            {/*               className="form-control input-box"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <button className="btn btn-light col-4">Подписаться</button>*/}
            {/*</div>*/}

        </div>
    )
}
export default AdPage
