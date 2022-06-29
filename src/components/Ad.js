import React, {useEffect, useState} from 'react';

const Ad = () => {
    const [adImage, setAdImage] = useState({})

    useEffect(() => {
        async function fetchInitData() {
            await fetch(process.env.REACT_APP_MUZSPORT_API + '/adbig/1')
                .then(response => response.json())
                .then(data => setAdImage(data))
        }
        fetchInitData();
    },[])

    return (
        <div className="container row pb-3">
            <div className="col-8">
                <div className="card-img img-wrap">
                    {!adImage.photo ?
                        <img src="assets/images/ad.png" className="elem-ad" height="345px" width="100%"/>
                        :
                        <img src={adImage.photo} className="elem-ad" height="345px" width="100%"/>
                    }
                    <p>Красивое платье - еще полдела...</p>
                    <h6>место для вашей рекламы : 1225*440</h6>
                </div>
            </div>
            <div className="col-4 elem-ad card">
                <p className="p-3 text-white">Профессионально скомпанованная программа подчеркивает утонченность, или,
                    наоборот, придаст современный пульсирующий энергией ритм - что позволит вашему чемпиону раскрыться!
                    <br/><br/>
                А внедренный в программу элемент суггестивного воздействия и дополнительный разгрузочный модуль окажет
                психологическую поддержку спортсмену во время выступления и после интенсивных тренировок</p>
            </div>
        </div>
    )
}
export default Ad;
