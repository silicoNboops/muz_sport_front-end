import {Dropdown} from "react-bootstrap";
import React, {useState} from "react";
import AddSuggestiveEffectBtn from "../AddSuggestiveEffect/AddSuggestiveEffectBtn";
import AddSuggestiveEffectBody from "../AddSuggestiveEffect/AddSuggestiveEffectBody";
import UnloadingModuleBtn from "../UnloadingModule/UnloadingModuleBtn";
import UnloadingModuleBody from "../UnloadingModule/UnloadingModuleBody";
import AdditionalTrackBtn from "../AdditionalTrack/AdditionalTrackBtn";
import AdditionalTrackBody from "../AdditionalTrack/AdditionalTrackBody";

const FinishedTrackBody = (props) => {
    const {product} = props;
    const [commentary, setCommentary] = useState('');

    const initData = () => {
        setCommentary('');
    }

    return (
        <div id={'finished_track' + product.id} className="accordion-collapse collapse" aria-labelledby="headingOne"
             data-bs-parent="#accordionExample">
            <div className="col-2 imgblock-accordion">
                <img src='assets/icons/price-tag.png' className='price-icon-accordion'/>
                <span>{product.price} ₽</span>
            </div>
            <div className="accordion-body">
                <div className="card col-11 p-5" style={{borderRadius: "12px"}}>
                    <figcaption className="card-props-column">
                        <div className="card-props card-text">
                            <span className="font-weight-bolder">Название трека:</span>
                            <span className="font-weight-bold container col-6 pb-4">{product.author} - {product.title}</span>
                        </div>
                        <div className="card-props card-text">
                            <span className="font-weight-bolder ">Программа для*:</span>
                            <span className="font-weight-bold container col-6 pb-4">
                                    <Dropdown>
                                      <Dropdown.Toggle style={{backgroundColor: "#948eba"}} id="dropdown-basic">
                                        Вид спорта...
                                      </Dropdown.Toggle>

                                      <Dropdown.Menu className="dropdown-menu">
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                </span>
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
                                    <div className="form-check">
                                      <input className="form-check-input" type="checkbox" id="flexCheckDefault"/>
                                      <label className="form-check-label" htmlFor="flexCheckDefault">Добавить</label>
                                    </div>
                                </span>
                        </div>

                        <div className="card-props card-text">
                            <span className="font-weight-bolder">Окончание*(пока так):</span>
                            <span className="font-weight-bold">
                                    <div className="custom-control custom-radio">
                                          <input type="radio" className="custom-control-input" id="defaultGroupExample1"
                                                 name="groupOfDefaultRadios" checked/>
                                          <label className="custom-control-label" htmlFor="defaultGroupExample1">Плавное
                                          </label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                      <input type="radio" className="custom-control-input" id="defaultGroupExample2"
                                             name="groupOfDefaultRadios"/>
                                      <label className="custom-control-label" htmlFor="defaultGroupExample2">Резкое
                                      </label>
                                    </div>
                                </span>
                        </div>
                        <h5 className="text-start">
                            <img src="assets/icons/info.png" className="mb-1 me-1" width="12px"/>
                            Компоновка*</h5>
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
