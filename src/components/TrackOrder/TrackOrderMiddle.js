import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import AddSuggestiveEffectBtn from "./AddSuggestiveEffect/AddSuggestiveEffectBtn";
import AddSuggestiveEffectBody from "./AddSuggestiveEffect/AddSuggestiveEffectBody";
import AdditionalTrackBtn from "./AdditionalTrack/AdditionalTrackBtn";
import AdditionalTrackBody from "./AdditionalTrack/AdditionalTrackBody";
import UnloadingModuleBtn from "./UnloadingModule/UnloadingModuleBtn";
import UnloadingModuleBody from "./UnloadingModule/UnloadingModuleBody";


const TrackOrderMiddle = () => {

    const [commentary, setCommentary] = useState('');
    const [sportsName, setSportsName] = useState([])
    const [auto, setAuto] = useState(true)
    const [manual, setManual] = useState(false)
    const [AddSegment, setAddSegment] = useState(false)
    const [DeleteSegment, setDeleteSegment] = useState(false)
    const [CountSegment, setCountSegment] = (useState(1))
    const [valueFile, setValueFile] = useState('')
    const [valueLink, setValueLink] = useState('')
    const [link, setLink] = useState(false)
    const [file, setFile] = useState(false)
    const [catalog, setCatalog] = useState(false)


    useEffect(() => {
        async function fetchInitData() {
            await fetch(process.env.REACT_APP_MUZSPORT_API + '/sports_name/')
                .then(response => response.json())
                .then(data => setSportsName(data))
        }
        fetchInitData();
    },[])

    const initData = () => {
        setCommentary('');
    }
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

    const handleAuto = () => {
        setManual(false)
    };
    const handleManual = () => {
        setManual(true)
    };
    const addSegment = () => {
        setAddSegment(true)
        setDeleteSegment(false)

    };
    const deleteSegment = () => {
        setDeleteSegment(true)
        setAddSegment(false)
    };

    const addCount = () => {
        setCountSegment(CountSegment + 1)
    }

    const deleteCount = () => {
        if (CountSegment >= 2) {
            setCountSegment(CountSegment - 1)
        }
    }

    return(
        <div className="container pt-4 pb-5">
            <div className="container-fluid">
                <button type="button"
                    //#TODO dropdown-toggle - стрелочка , а нужно 'X'. хз как))
                        className="btn btn-light btn-sm col-2 dropdown-toggle-split"
                        data-bs-toggle="collapse"
                        data-bs-target={'#track_order'}
                        aria-expanded="true"
                        style={{borderRadius:"12px"}}
                        aria-controls="collapseOne">
                    <span style={{fontSize: '15px'}}>Заказ трека</span>
                </button>
            </div>
            <div id={'track_order'} className="accordion-collapse collapse pe-5" aria-labelledby="headingOne"
                 data-bs-parent="#accordionExample">
                <button type="button"
                        data-bs-toggle="collapse"
                        className="btn-close close-accordion"
                        data-bs-target={'#track_order'}
                        aria-expanded="true"
                        style={{borderRadius:"12px"}}
                        aria-controls="collapseOne">
                </button>

                <div className="card background-accordion ps-5 container">
                    <h5 className="text-white position-absolute mt-2" style={{right:"83%"}}>Заказ трека</h5>
                    <div className=" imgblock-accordion">
                        <img src='assets/icons/price-tag.png' style={{left: "750px"}} className='price-icon-accordion'/>
                        <span className="text-black" style={{left:"800px"}}>1500 ₽</span>
                    </div>
                    <div className="accordion-body row container justify-content-center mt-4">
                        <div className="card style-accordion p-5" style={{borderRadius: "12px"}}>
                            <figcaption className="card-props-column">
                                <div className="card-props card-text">
                                    <span className="font-weight-bolder ">Программа для*:</span>
                                    <Form.Group className="col-6  container mb-5 ">
                                        <Form.Control
                                            className="text-center"
                                            style={{backgroundColor: "rgba(153,147,196,0.73)", borderRadius:"16px"}}
                                            as='select'
                                        >
                                            <option className="">
                                                Вид спорта
                                            </option>

                                            {sportsName.map(sportsNameObj => {
                                                return(
                                                    <option id={sportsNameObj.id}>
                                                        {sportsNameObj.sports_name}
                                                    </option>
                                                );
                                            })}

                                        </Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="card-props card-text">
                                <span className="font-weight-bolder">
                                    <img src="assets/icons/info.png" className="mb-1 me-1" width="12px"/>
                                    Хронометраж*:</span>
                                    <span className="font-weight-bold container col-6 pb-4">от
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
                                </span>
                                </div>
                                <div className="card-props card-text">
                                    <span className="font-weight-bolder">Пик в начале:</span>
                                    <span className="font-weight-bold">
                                <div className="position-relative" style={{right: "200%"}}>
                                  <input type="checkbox" id="label"/>
                                  <label id="label" htmlFor="label">Добавить</label>
                                </div>
                            </span>
                                </div>

                                <div className="card-props card-text">
                                    <span className="font-weight-bolder">Окончание*:</span>
                                    <span className="font-weight-bold col-8 ps-4">
                                    <div className="buttons d-grid">
                                            <input label="Плавное" type="radio" name="end" value="smooth"/>
                                            <input label="Резкое" type="radio" name="end" value="sharp"/>
                                    </div>
                                </span>
                                </div>
                                <h5 className="text-start">Материал (трек) для компановки программы*:</h5>
                                <div className="pt-3 row">
                                    <div className="float-start pb-3">
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
                                    <div className="text-start card-text">
                                        <Form.Group className="col-6  container mb-5 ">
                                            <Form.Control
                                                className="text-center"
                                                style={{backgroundColor: "rgba(153,147,196,0.73)", borderRadius:"16px"}}
                                                as='select'
                                            >
                                                <option className="">
                                                    Вид спорта
                                                </option>

                                                {sportsName.map(sportsNameObj => {
                                                    return(
                                                        <option id={sportsNameObj.id}>
                                                            {sportsNameObj.sports_name}
                                                        </option>
                                                    );
                                                })}

                                            </Form.Control>
                                        </Form.Group>
                                    </div>
                                    :
                                    null
                                }
                                <h5 className="text-start">
                                    <img src="assets/icons/info.png" className="mb-1 me-1" width="12px"/>
                                    Компоновка*</h5>

                                <div className=" container">
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
                                    <div className="col-12 float-start">
                                        <div className="row">

                                            <div className="buttons d-grid pt-4">
                                                <input label="Удалить отрезок" type="radio" name="segment1"
                                                       value="delete_segment" onClick={deleteSegment}/>
                                                <input label="Добавить отрезок" type="radio" name="segment1"
                                                       value="add_segment" onClick={addSegment}/>
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
                                            <button type="button" className="btn mb-2" >
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
                                            <button type="button" className="btn mb-2" onClick={addCount}>
                                                <img src="assets/icons/plus-purple.png" height="25px"/>
                                            </button>
                                            <button type="button" className="btn mb-2" onClick={deleteCount}>
                                                <img src="assets/icons/minus-pink.png" height="25px"/>
                                            </button>
                                        </span>
                                            }
                                        </div>
                                    </div>
                                    :
                                    null
                                }
                            </figcaption>



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
                <AdditionalTrackBtn/>
                <AdditionalTrackBody/>

                <AddSuggestiveEffectBtn/>
                <AddSuggestiveEffectBody/>

            </div>
        </div>
    )
}
export default TrackOrderMiddle;
