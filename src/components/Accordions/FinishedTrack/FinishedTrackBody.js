import {Dropdown, Form} from "react-bootstrap";
import React, {useState, useEffect} from "react";
import AddSuggestiveEffectBtn from "../AddSuggestiveEffect/AddSuggestiveEffectBtn";
import AddSuggestiveEffectBody from "../AddSuggestiveEffect/AddSuggestiveEffectBody";
import UnloadingModuleBtn from "../UnloadingModule/UnloadingModuleBtn";
import UnloadingModuleBody from "../UnloadingModule/UnloadingModuleBody";
import AdditionalTrackBtn from "../AdditionalTrack/AdditionalTrackBtn";
import AdditionalTrackBody from "../AdditionalTrack/AdditionalTrackBody";

const FinishedTrackBody = (props) => {
    const {product} = props;
    const [commentary, setCommentary] = useState('');
    const [sportsName, setSportsName] = useState([])
    const [auto, setAuto] = useState(true)
    const [manual, setManual] = useState(false)


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

    const handleAuto = () => {
        setManual(false)
    };
    const handleManual = () => {
        setManual(true)
    };


    return (
        <div id={'finished_track' + product.id} className="accordion-collapse collapse" aria-labelledby="headingOne"
             data-bs-parent="#accordionExample">
            <div className=" imgblock-accordion">
                <img src='assets/icons/price-tag.png' className='price-icon-accordion'/>
                <span className="text-white">{product.price} ₽</span>
            </div>
            <div className="accordion-body row container justify-content-center">
                <div className="card style-accordion p-5" style={{borderRadius: "12px"}}>
                    <figcaption className="card-props-column">
                        <div className="card-props card-text">
                            <span className="font-weight-bolder">Название трека:</span>
                            <span className="font-weight-bold container col-6 pb-4">{product.author} - {product.title}</span>
                        </div>
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
                                <div className="position-relative" style={{right: "250%"}}>
                                  <input type="checkbox" id="coffee"/>
                                  <label id="label" htmlFor="coffee">Coffee</label>
                                </div>
                            </span>
                        </div>

                        <div className="card-props card-text">
                            <span className="font-weight-bolder">Окончание*:</span>
                            <span className="font-weight-bold col-8 ps-4">
                                    <div className="buttons d-grid">
                                            <input label="Плавное" type="radio" name="end" value="smooth" checked/>
                                            <input label="Резкое" type="radio" name="end" value="sharp"/>
                                    </div>
                                </span>
                        </div>
                        <h5 className="text-start">
                            <img src="assets/icons/info.png" className="mb-1 me-1" width="12px"/>
                            Компоновка*</h5>

                    <div className="float-start">
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
                                        <input label="Удалить отрезок" type="radio" name="segment1" value="delete_segment" checked/>
                                        <input label="Добавить отрезок" type="radio" name="segment1" value="add_segment"/>
                                    </div>
                                    <span className="font-weight-bold ms-2 text-start d-block col pt-5">от
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
                                        <input label="Удалить отрезок" type="radio" name="segment2" value="smooth" checked/>
                                        <input label="Добавить отрезок" type="radio" name="segment2" value="sharp"/>
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
                <AdditionalTrackBtn product={product}/>
                <AdditionalTrackBody product={product}/>

                <AddSuggestiveEffectBtn product={product}/>
                <AddSuggestiveEffectBody product={product}/>

                <UnloadingModuleBtn product={product}/>
                <UnloadingModuleBody product={product}/>

            </div>
        </div>
    )
}
export default FinishedTrackBody;
