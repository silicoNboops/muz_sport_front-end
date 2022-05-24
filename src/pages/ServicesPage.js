import React from "react";


const ServicesPage = () => {
    return(
        <div className="container-fluid p-5">
            <h2 className="text-white">Индивидуальный заказ спортивной программы</h2>
            <h5 className="text-white">Выберите подходящее Вам пакетное предложение</h5>

            <div className="row">
                <div className="container pt-5 col-4">
                    <div className="card col-10 mb-2 float-start" style={{borderRadius:"7px"}}>
                        <h5>Спортивная программа</h5>
                    </div>
                    <div className="card service-card col-12">
                        <h6 className="pt-4 text-wrap" style={{width:"315px"}}>
                            <img src="assets/icons/check-purp.psd" className="me-3" width="25px"/>
                            Компановка спортивной программы из одного трека</h6>
                        <h6 className="pt-2  text-wrap" style={{width:"315px"}}>
                            <img src="assets/icons/check-purp.psd" className="me-3" width="25px"/>
                            Две доработки программы в рамках согласованного трека</h6>
                        <p className="card-footer mt-auto">каждый доп. трек к программе +1500 руб (но не более 2-ух)</p>
                        <h6 className="text-start">минимальный тариф без экономии</h6>
                    </div>
                </div>

                <div className="container pt-5 col-4">
                    <div className="card col-10 mb-2 d-inline-flex" style={{borderRadius:"7px"}}>
                        <h5>Спортивная программа</h5>
                        <h6>с суггестивным эффектом</h6>
                    </div>
                    <p className="card col-10 d-inline-flex" style={{borderRadius:"7px"}}>оптимальный выбор</p>

                    <div className="card service-card col-12" style={{minHeight:"450px"}}>
                        <h6 className="pt-4 text-wrap" style={{width:"315px"}}>
                            <img src="assets/icons/check-purp.psd" className="me-3" width="25px"/>
                            Компановка спортивной программы из одного трека</h6>
                        <h6 className="pt-2  text-wrap" style={{width:"315px"}}>
                            <img src="assets/icons/check-purp.psd" className="me-3" width="25px"/>
                            Две доработки программы в рамках согласованного трека</h6>
                        <h6 className="pt-2  text-wrap" style={{width:"315px"}}>
                            <img src="assets/icons/check-purp.psd" className="me-3" width="25px"/>
                            Введение суггестивной информации для повышения концетрации и мобилизации спортсмена на
                        соревнованиях <a href="#" className="text-muted">подробнее о методе</a></h6>
                        <p className="mt-auto">
                            <img src="assets/icons/coupon.png" className="me-3" width="60px"/>
                            Промокод на будущий заказ 8%</p>
                        <p className="card-footer mt-auto">каждый доп. трек к программе +1000 руб (но не более 2-ух)</p>
                        <h6 className="text-start">экономия 1000 руб.</h6>
                    </div>
                </div>

                <div className="container pt-5 col-4">
                    <div className="card col-10 float-end mb-2" style={{borderRadius:"7px"}}>
                        <h5>Спортивная программа</h5>
                        <h6>с суггестивным эффектом</h6>
                        <h6 className="pt-2">+ разгрузочный модуль</h6>
                    </div>
                    <div className="card service-card col-12">
                        <h6 className="pt-4 text-wrap" style={{width:"315px"}}>
                            <img src="assets/icons/check-purp.psd" className="me-3" width="25px"/>
                            Компановка спортивной программы из одного трека</h6>
                        <h6 className="pt-2  text-wrap" style={{width:"315px"}}>
                            <img src="assets/icons/check-purp.psd" className="me-3" width="25px"/>
                            Две доработки программы в рамках согласованного трека</h6>
                        <h6 className="pt-2  text-wrap" style={{width:"315px"}}>
                            <img src="assets/icons/check-purp.psd" className="me-3" width="25px"/>
                            Введение суггестивной информации для повышения концетрации и мобилизации спортсмена на
                            соревнованиях</h6>
                        <h6 className="pt-2  text-wrap" style={{width:"315px"}}>
                            <img src="assets/icons/check-purp.psd" className="me-3" width="25px"/>
                            Создание доп. разгрузочного модуля, для достижения эффекта расслабления и снятия стресса
                            после тренировки</h6>
                        <p className="mt-auto">
                            <img src="assets/icons/coupon.png" className="me-3" width="60px"/>
                            Промокод на будущий заказ 15%</p>
                        <p className="card-footer mt-auto">каждый доп. трек к программе +500 руб (но не более 2-ух)</p>
                        <h6 className="text-start">экономия 2000 руб.</h6>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default ServicesPage;
