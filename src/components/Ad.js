import React, {useContext, useEffect, useState} from 'react';
import LanguageContext from "../LanguageProvider/LanguageProvider";

const Ad = () => {
    const [BigImage, setBigImage] = useState({})
    const [SmallImage, setSmallImage] = useState({})

    useEffect(() => {
        // TODO картинка блочится расширением браузера!
        async function fetchInitData() {
            await fetch(process.env.REACT_APP_MUZSPORT_API + '/adbig/1')
                .then(response => response.json())
                .then(data => setBigImage(data))
        }
        async function fetchData() {
            await fetch(process.env.REACT_APP_MUZSPORT_API + '/adsmall/1')
                .then(response => response.json())
                .then(data => setSmallImage(data))
        }
        fetchInitData();
        fetchData();
    },[])

    return (
        <div className="container-fluid justify-content-center row pb-3 ad-image">
            <div className="col-8 col-xxl-6">
                <div className="card-img">
                    {!BigImage.photo ?
                        <div className="img-wrap">
                            <img src="assets/images/ad.png" className="elem-ad" height="345px" width="100%"/>
                            <p>Красивое платье - еще полдела...</p>
                            <h6>место для вашей рекламы : 1225*440</h6>
                        </div>
                        :
                        <img src={BigImage.photo} className="elem-ad" height="345px" width="100%"/>
                    }
                </div>
            </div>
            <div className="col-4 elem-ad card col-xxl-4">
                {!SmallImage.photo ?
                    <p className="p-3 text-white">Профессионально скомпанованная программа подчеркивает утонченность, или,
                        наоборот, придаст современный пульсирующий энергией ритм - что позволит вашему чемпиону раскрыться!
                        <br/><br/>
                        А внедренный в программу элемент суггестивного воздействия и дополнительный разгрузочный модуль окажет
                        психологическую поддержку спортсмену во время выступления и после интенсивных тренировок</p>
                    :
                    <img src={SmallImage.photo} className="elem-ad" height="345px" width="100%"/>
                }
            </div>
        </div>
    )
}
export default Ad;
