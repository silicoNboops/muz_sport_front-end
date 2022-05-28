import React, {useState} from "react";
import {Dropdown} from "react-bootstrap";

const FinishedTrack = () => {
    const [commentary, setCommentary] = useState('');

    const initData = () => {
        setCommentary('');
    }

    return(
        <div className="container-fluid p-5">
            <button type="button"
                    //#TODO dropdown-toggle - стрелочка , а нужно 'X'. хз как))
                    className="btn btn-light btn-lg dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    style={{borderRadius:"12px"}}
                    aria-controls="collapseOne">
                <span>Доработать трек!</span>
            </button>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                 data-bs-parent="#accordionExample">
                <div className="accordion-body" >
                    <div className="container card col-8 p-5" style={{borderRadius:"12px"}}>
                        <figcaption className="card-props-column">
                            <div className="card-props card-text">
                                <span className="font-weight-bolder">Название трека:</span>
                                <span className="font-weight-bold">RuPaul - Call Me Mother</span>
                            </div>
                            <div className="card-props card-text">
                                <span className="font-weight-bolder ">Программа для*:</span>
                                <span className="font-weight-bold">
                                    <Dropdown>
                                      <Dropdown.Toggle style={{backgroundColor:"#948eba"}} id="dropdown-basic">
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
                                <span className="font-weight-bold">от
                                    <input type="time" id="appt" name="appt" style={{backgroundColor:"#948eba",
                                        borderRadius:"10px"}} min="00:00" max="24:00" className="me-2 ms-2 text-white"
                                           required/>до
                                <input type="time" id="appt" name="appt" style={{backgroundColor:"#948eba",
                                    borderRadius:"10px"}} min="00:00" max="24:00" className="me-2 ms-2 text-white"
                                       required/>
                                </span>
                            </div>
                            <div className="card-props card-text">
                                <span className="font-weight-bolder">Пик в начале:</span>
                                <span className="font-weight-bold">
                                    <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
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
                            <p className="text-start">Здесь будут кнопки доработок(Подумать, как она будет закрываться,
                                если человек нажмет на AUTO)</p>
                        </div>

                        <div className="text-start pt-3">
                            <h5>Комментарии к данному треку:</h5>
                            <h6>По желанию. Только если остались какие-то неуточненные моменты</h6>
                            <textarea type="text"
                                   value={commentary}
                                   className="form-control input-box"
                                   placeholder="Пример:
                                   -Оставить все энергичные части трека"
                                   onChange={(e) =>
                                       setCommentary(e.target.value)}/>
                        </div>
                    </div>
                </div>
            </div>


        {/*<div className="container" id="accordionExample">*/}
        {/*    <div className="accordion-item">*/}
        {/*        <h2 className="accordion-header" id="headingOne">*/}
        {/*            <button className="accordion-button" type="button" data-bs-toggle="collapse"*/}
        {/*                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">*/}
        {/*                Accordion Item #1*/}
        {/*            </button>*/}
        {/*        </h2>*/}
        {/*        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"*/}
        {/*             data-bs-parent="#accordionExample">*/}
        {/*            <div className="accordion-body">*/}
        {/*                <strong>This is the first item's accordion body.</strong> It is shown by default, until the*/}
        {/*                collapse plugin adds the appropriate classes that we use to style each element. These classes*/}
        {/*                control the overall appearance, as well as the showing and hiding via CSS transitions. You can*/}
        {/*                modify any of this with custom CSS or overriding our default variables. It's also worth noting*/}
        {/*                that just about any HTML can go within the <code>.accordion-body</code>, though the transition*/}
        {/*                does limit overflow.*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
        </div>
    )
}
export default FinishedTrack
