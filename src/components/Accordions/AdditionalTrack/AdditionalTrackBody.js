import React, {useState} from "react";

const AdditionalTrackBody = (props) => {
    const {product} = props
    const [link, setLink] = useState(false)
    const [file, setFile] = useState(false)
    const [catalog, setCatalog] = useState(false)
    const [valueFile, setValueFile] = useState('')
    const [valueLink, setValueLink] = useState('')
    const [commentary, setCommentary] = useState('');
    const [auto, setAuto] = useState(true)
    const [manual, setManual] = useState(false)


    const initData = () => {
        setValueFile('');
        setValueLink('');
    }
    const handleAuto = () => {
        setManual(false)
    };
    const handleManual = () => {
        setManual(true)
    };
    const handleLink = () => {
        setLink(true)
        setFile(false)
        setCatalog(false)
    };
    const handleFile = () => {
        setLink(false)
        setFile(true)
        setCatalog(false)
    };
    const handleCatalog = () => {
        setLink(false)
        setFile(false)
        setCatalog(true)
    };

    return(
        <div id={'additional_track' + product.id} className="accordion-collapse collapse " aria-labelledby="headingOne"
             data-bs-parent="#accordionExample">
            <div className=" imgblock-accordion">
                <img src='assets/icons/price-tag.png' className='price-icon-accordion'/>
                <span>{product.price} ₽</span>
            </div>
            <div className="accordion-body row justify-content-center">
                <div className="card style-accordion p-5" style={{borderRadius:"12px"}}>

                    <h5 className="text-start ">Материал (трек) для компановки программы*:</h5>
                    <div className="d-inline-flex pt-3">
                        <div className="float-start">
                            <button className="btn btn-sm" onClick={handleLink}>
                                <img src="assets/icons/www.png" className="card p-1" height="50px"/>
                            </button>
                            <button className="btn btn-sm" onClick={handleFile}>
                                <img src="assets/icons/download.png" className="card p-1" height="50px"/>
                            </button>
                            <button className="btn btn-sm" onClick={handleCatalog}>
                                <img src="assets/icons/list.png" className="card p-1" height="50px"/>
                            </button>
                        </div>
                    </div>

                    {link ?
                        <div className="col-6 pt-4 pb-2">
                            <input type="url" required
                                // value={valueLink}
                                   placeholder="Ссылка на файл..."
                                   className="form-control input-box"
                                   onChange={(e) =>
                                       setValueLink(e.target.value)}
                            />
                        </div>
                            :
                            null
                    }


                    {file ?
                        <div className="col-6 pt-2 pb-2">
                            <input type="file"
                                value={valueFile}
                                   placeholder="формат mp3, mpeg"
                                   className="form-control input-box mt-3"
                                   onChange={(e) =>
                                       setValueFile(e.target.value)}
                            />
                        </div>
                        :
                        null
                    }

                    {catalog ?
                        <div className="col-6 pt-2 pb-2">
                            <h6>Вот так уот</h6>
                        </div>
                        :
                        null
                    }

                    <h5 className="text-start">
                        <img src="assets/icons/info.png" className="mb-1 me-1" width="12px"/>
                        Компоновка*</h5>
                    <div className="float-start d-flex">
                        <button className="btn btn-sm" onClick={handleAuto}>
                            <img src="assets/icons/auto.png" className="float-start" height="50px"/>
                        </button>
                        <button className="btn btn-sm" onClick={handleManual}>
                            <img src="assets/icons/palm-of-hand.png" className="float-start" height="50px"/>
                        </button>
                    </div>

                    {auto ?
                        null
                        :
                        null
                    }
                    {manual ?
                        <div className="float-start">
                            <div className="row">
                                <div className="buttons d-grid pt-4">
                                    <input label="Удалить отрезок" type="radio" name="segment1" value="delete_segment1" checked/>
                                    <input label="Добавить отрезок" type="radio" name="segment1" value="add_segment1"/>
                                </div>
                                <span className="font-weight-bold d-block col ms-2 text-start pt-5">от
                                        <input type="time" id="appt" name="appt" style={{
                                            backgroundColor: "#948eba",
                                            borderRadius: "10px"
                                        }} min="00:00" max="24:00" className="me-2 ms-2 text-white"
                                               required/>до
                                        <input type="time" id="appt" name="appt" style={{
                                            backgroundColor: "#948eba",
                                            borderRadius: "10px"
                                        }} min="00:00" max="24:00" className="me-2 ms-2 text-white"
                                               required/>
                                        <button type="button" className="btn mb-2 ">
                                            <img src="assets/icons/plus-purple.png" height="25px"/>
                                        </button>
                                        </span>

                            </div>
                            <div className="row ">
                                <div className="buttons d-grid pt-4">
                                    <input label="Удалить отрезок" type="radio" name="segment2" value="smooth1" checked/>
                                    <input label="Добавить отрезок" type="radio" name="segment2" value="sharp1"/>
                                </div>
                                <span className="font-weight-bold d-block col pt-5">от
                                        <input type="time" id="appt" name="appt" style={{
                                            backgroundColor: "#948eba",
                                            borderRadius: "10px"
                                        }} min="00:00" max="24:00" className="me-2 ms-2 text-white"
                                               required/>до
                                        <input type="time" id="appt" name="appt" style={{
                                            backgroundColor: "#948eba",
                                            borderRadius: "10px"
                                        }} min="00:00" max="24:00" className="me-2 ms-2 text-white"
                                               required/>на
                                        <input type="time" id="appt" name="appt" style={{
                                            backgroundColor: "#948eba",
                                            borderRadius: "10px"
                                        }} min="00:00" max="24:00" className="me-2 ms-2 text-white"
                                               required/>

                                        <button type="button" className="btn mb-2">
                                            <img src="assets/icons/plus-purple.png" height="25px"/>
                                        </button>
                                        <button type="button" className="btn mb-2">
                                            <img src="assets/icons/minus-pink.png" height="25px"/>
                                        </button>
                                        </span>
                            </div>
                        </div>
                        :
                        null
                    }
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
