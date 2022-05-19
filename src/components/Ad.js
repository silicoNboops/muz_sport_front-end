import React from 'react';

const Ad = () => {
    return (
        <div className="container row">
            <div className="col-8">
                <div className="card-img">
                        <img src="assets/images/ad.png" className="elem-ad" height="345px" width="100%"/>
                </div>
            </div>
            <div className="col-4 elem-ad card">
                <p className="p-3 text-white">Профессионально скомпанованная программа подчеркивает утонченность, или, наоборот, придаст
                современный пульсирующий энергией ритм - что позволит вашему чемпиону раскрыться!<br/><br/>
                А внедренный в программу элемент суггестивного воздействия и дополнительный разгрузочный модуль окажет
                психологическую поддержку спортсмену во время выступления и после интенсивных тренировок</p>

            </div>
        </div>
    )
}
export default Ad;
