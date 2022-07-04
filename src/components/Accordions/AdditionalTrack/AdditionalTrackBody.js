import React, {useState} from "react";


const AdditionalTrackBody = (props) => {
    const {product} = props
    const [link, setLink] = useState('')
    const [file, setFile] = useState('')
    const [commentary, setCommentary] = useState('');


    const initData = () => {
        setFile('');
        setLink('');
        setCommentary('');
    }
    return(
        <div id={'additional_track' + product.id} className="accordion-collapse collapse" aria-labelledby="headingOne"
             data-bs-parent="#accordionExample">
            <div className="col-2 imgblock-accordion">
                <img src='assets/icons/price-tag.png' className='price-icon-accordion'/>
                <span>{product.price} ₽</span>
            </div>
            <div className="accordion-body row justify-content-center">

                <div className="card col-8 p-5" style={{borderRadius:"12px"}}>
                    <h5 className="text-start ">Материал (трек) для компановки программы*:</h5>
                    <div className="d-inline-flex pt-3">
                        <img src="assets/icons/www.png" className="card me-3 p-1" height="50px"/>
                        <img src="assets/icons/download.png" className="card p-1 me-3" height="50px"/>
                        <img src="assets/icons/list.png" className="card p-1" height="50px"/>
                    </div>

                    <div className="col-6 pt-3">
                        <input type="url" required
                               value={link}
                               placeholder="Ссылка на файл..."
                               className="form-control input-box"
                               onChange={(e) =>
                                   setLink(e.target.value)}
                        />
                        <input type="file"
                               value={file}
                               placeholder="формат mp3, mpeg"
                               className="form-control input-box mt-3"
                               onChange={(e) =>
                                   setFile(e.target.value)}
                        />
                    </div>
                    <h5 className="text-start">
                        <img src="assets/icons/info.png" className="mb-1 me-1" width="12px"/>
                        Компоновка*</h5>
                    <figcaption className="card-props-column">
                    <img src="assets/icons/auto.png" className="float-start" height="50px"/>
                    <img src="assets/icons/palm-of-hand.png"
                         data-bs-toggle="collapse"
                         data-bs-target="#collapseTwo"
                         aria-expanded="true"
                         aria-controls="collapseTwo"
                         className="float-start ms-2" height="45px"/>
                    </figcaption>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingOne"
                         data-bs-parent="#accordionExample">
                        <h6 className="text-start">Здесь будут кнопки доработок(Подумать, как она будет закрываться,
                            если человек нажмет на AUTO)</h6>
                    </div>
                    <div className="text-start pt-3">
                        <h5>Комментарии к данному треку:</h5>
                        <h6>По желанию. Только если остались какие-то неуточненные моменты</h6>
                        <textarea type="text"
                                  value={commentary}
                                  className="form-control input-box"
                                  style={{minHeight: "150px", backgroundColor: "#f4f4f4"}}
                                  placeholder="Пример:
                                   -Оставить все энергичные части трека
                                   или
                                   -Убрать все части с вокалом"
                                  onChange={(e) =>
                                      setCommentary(e.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdditionalTrackBody;
