import React, {useState} from "react";


const AdditionalTrackBody = ({price}) => {
    const [valueLink, setValueLink] = useState('')
    const [valueFile, setValueFile] = useState('')
    const [commentary, setCommentary] = useState('');
    const [link, setLink] = useState(false)
    const [file, setFile] = useState(false)
    const [catalog, setCatalog] = useState(false)

    const [auto, setAuto] = useState(true)
    const [manual, setManual] = useState(false)

    const [AddSegment, setAddSegment] = useState(false)
    const [DeleteSegment, setDeleteSegment] = useState(false)

    const [item, setItem] = useState(["ITEM_1"])


    const newItem = ["ITEM_2", "ITEM_3", "ITEM_4", "ITEM_5", "ITEM_6", "ITEM_7"];


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
    const addSegment = () => {
        setAddSegment(true)
        setDeleteSegment(false)
    };
    const deleteSegment = () => {
        setDeleteSegment(true)
        setAddSegment(false)
    };
    const addElem = () => {
        setItem([...item, item.push(newItem.shift())])
        console.log(item)
    }
    const deleteElem = (event) => {
        console.log(event.currentTarget.id)
        const elemIndex = event.currentTarget.id.replace("btn_delete_segment_", "")
        setItem([...item, item.splice(parseInt(elemIndex), 1)])
    }

    return(
        <div id={'additional_track'} className="accordion-collapse collapse " aria-labelledby="headingOne"
             data-bs-parent="#accordionExample">
            <button type="button"
                    data-bs-toggle="collapse"
                    className="btn-close close-accordion"
                    data-bs-target={'#additional_track'}
                    aria-expanded="true"
                    style={{borderRadius:"12px"}}
                    aria-controls="collapseOne">
            </button>
            <div className="card background-accordion ps-4 container">

                <h5 className="text-white position-relative" style={{right:"33%", top:"10px"}}>Добавить трек к
                    программе</h5>
                <div className=" imgblock-accordion">
                <img src='assets/icons/price-tag.png' className='price-icon-accordion'/>
                <span>{price} ₽</span>
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
                                   placeholder="формат mp3, mpeg"
                                   className="form-control input-box mt-3"
                                   onChange={(e) =>
                                       setValueFile(e.target.files)}
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
                        <>
                        {item.map((itemObj, index) =>

                                <div className="col-12 float-start">
                                <div className="row">
                                        <div className="buttons d-grid pt-4">
                                            <input label="Удалить отрезок" type="radio" name="segment1" value="delete_segment1"
                                                   onClick={deleteSegment}/>
                                            <input label="Добавить отрезок" type="radio" name="segment1" value="add_segment1"
                                                   onClick={addSegment}/>
                                        </div>
                                    {DeleteSegment ?
                                        <span className="font-weight-bold ms-3 text-start d-block col pt-5">от
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
                                            <button type="button" className="btn mb-2" onClick={addElem}>
                                                <img src="assets/icons/plus-purple.png" height="25px"/>
                                            </button>
                                        </span>
                                        :
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
                                            <button type="button" className="btn mb-2" onClick={addElem}>
                                                <img src="assets/icons/plus-purple.png" height="25px"/>
                                            </button>
                                            <button id={'btn_delete_segment_' + index} type="button"
                                                    className="btn mb-2"
                                                    onClick={(event) => deleteElem(event)}>
                                                <img src="assets/icons/minus-pink.png" height="25px"/>
                                            </button>
                                        </span>
                                    }
                                </div>
                            </div>
                            )}
                        </>


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
        </div>
    )
}
export default AdditionalTrackBody;
