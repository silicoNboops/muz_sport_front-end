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
    const [sportList, setSportList] = useState([])
    const [compositionAuto, setCompositionAuto] = useState(true)
    const [compositionManual, setCompositionManual] = useState(false)

    // TODO приходит с из пропсов с бека, но обновляется при доработке тут
    const [currentPrice, setCurrentPrice] = useState(0);
    const [sport, setSport] = useState('');
    const [trackId, setTrackId] = useState('');
    // TODO сделать чтобы принимал время
    const [timeStart, setTimeStart] = useState('');
    // TODO сделать чтобы принимал время
    const [timeEnd, setTimeEnd] = useState('');
    const [beginningPeak, setBeginningPeak] = useState(false);
    const [end, setEnd] = useState('smooth');
    const [compositionSegment1, setCompositionSegment1] = useState('');
    const [compositionSegment2, setCompositionSegment2] = useState('');

    // заполняется в компоненте AdditionalTrackBody и передается сюда, если пустое - null
    // если не пустое делать проверку и добавлять в корзину такой
    // массив из двух МАКСИМУМ двух дополнительных треков
    const [additionalTracks, setAdditionalTracks] = useState(() => []);
    const [suggestiveEffect, setSuggestiveEffect] = useState(null);
    const [unloadingModule, setUnloadingModule] = useState(null);

    // TODO объявить стейты и прокидывать их, а также метод setState для каждого в нижние компоненты

    useEffect(() => {
        async function fetchInitData() {
            await fetch(process.env.REACT_APP_MUZSPORT_API + '/sports_name/')
                .then(response => response.json())
                .then(data => setSportList(data))
        }

        fetchInitData();
        setCurrentPrice(product.price);
    },[]);

    // TODO отслеживать все вложенные блоки и засовывать в один большой объект заказа
    useEffect(() => {
        console.log(additionalTracks);
        console.log(suggestiveEffect);
        console.log(unloadingModule);
    },[additionalTracks, suggestiveEffect, unloadingModule]);

    const initData = () => {
        setCommentary('');
    }

    const handleCompositionAuto = () => {
        setCompositionManual(false)
    };
    const handleCompositionManual = () => {
        setCompositionManual(true)
    };

    // TODO далее засовывать эти стейты в метод оформления заказа
    const placeOrder = (e) => {
        e.preventDefault();

        // TODO цена заказа
        // const price = cartTotal
        // TODO составляющие заказа
        // const order = {name, phone, email, city, commentary, price, delivery, items};
        // const order_new = {trackId, sport}
        const order = {}

        // TODO засовывать заказ в сессию на день

        fetch(process.env.REACT_APP_NKS_API + 'order/', {
            method: 'POST',
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then((result) => {
                    // emptyCart();
                    initData();
                    // notifyOrderSuccess(result);

                    setTimeout(function(){
                        window.location.href = "/";

                    }, 3500);
                },
                (error) => {
                    // notifyOrderError();
                })
    };

    // TODO form to sent order to back
    return (
        <div id={'finished_track' + product.id} className="accordion-collapse collapse " aria-labelledby="headingOne"
             data-bs-parent="#accordionExample">
            <form onSubmit={placeOrder}>

                <div className="col-2 imgblock-accordion">
                    <img src='assets/icons/price-tag.png' className='price-icon-accordion'/>
                    <span className="text-white">{product.price} ₽</span>
                </div>

                <div className="accordion-body row justify-content-center">
                    <div className="card col-8 p-5" style={{borderRadius: "12px"}}>
                        <figcaption className="card-props-column">

                            <div className="card-props card-text">
                                <span className="font-weight-bolder">Название трека:</span>
                                <span className="font-weight-bold container col-6 pb-4">{product.author} - {product.title}</span>
                            </div>

                            <div className="card-props card-text">
                                <span className="font-weight-bolder ">Программа для*:</span>

                                <Form.Group className="col-6 container mb-5" controlId="sports_name">
                                    {/*TODO либо так, либо span сверху - ПРОТЕСТИТЬ*/}
                                    {/*<Form.Label className="font-weight-bolder">Программа для:</Form.Label>*/}
                                    <Form.Control
                                        className="text-center"
                                        style={{backgroundColor: "rgba(153,147,196,0.73)", borderRadius:"16px"}}
                                        as='select'
                                        name='sport'
                                        value={sport}
                                        onChange={(e) => setSport(e.target.value)}
                                    >
                                        <option value=''>
                                            Вид спорта
                                        </option>

                                        {sportList.map((sport, index) =>
                                            <option key={sport.id + '_' + index} value={sport.id}>
                                                {sport.sports_name}
                                            </option>
                                        )}
                                    </Form.Control>
                                </Form.Group>
                            </div>

                            <div className="card-props card-text">
                                    <span className="font-weight-bolder">
                                        <img src="assets/icons/info.png" className="mb-1 me-1" width="12px"/>
                                        Хронометраж*:</span>
                                <span className="font-weight-bold container col-6 pb-4">
                                    от
                                        <input type="time" required id="appt" name="appt"
                                               placeholder="hrs:mins"
                                               style={{ backgroundColor: "#948eba", borderRadius: "10px"}}
                                               min="00:00:00" max="00:60:00"
                                               className="me-2 ms-2 text-white"
                                               defaultValue='00:00'
                                               onChange={(e) =>
                                                   setTimeStart(e.target.value)}/>
                                    до
                                    <input type="time" id="appt" name="appt" required
                                           style={{backgroundColor: "#948eba", borderRadius: "10px"}}
                                           min="00:00" max="24:00"
                                           className="me-2 ms-2 text-white"
                                           value={product.track_length}
                                           onChange={(e) =>
                                               setTimeEnd(e.target.value)}/>
                                    </span>
                            </div>

                            <div className="card-props card-text">
                                <span className="font-weight-bolder">Пик в начале:</span>
                                <span className="font-weight-bold">
                                        <div className="form-check">
                                          <input className="form-check-input checkbox-accordion"
                                                 type="checkbox"
                                                 id="flexCheckDefault"
                                                 onChange={() => setBeginningPeak(!beginningPeak)}
                                          />
                                          <label className="form-check-label"
                                                 htmlFor="flexCheckDefault">
                                              Добавить
                                          </label>
                                        </div>
                                    </span>
                            </div>

                            <div className="card-props card-text">
                                <span className="font-weight-bolder">Окончание*:</span>
                                <span className="font-weight-bold col-8 ps-4">
                                        <div className="buttons d-grid">
                                                <input label="Плавное" type="radio" name="end" value="smooth"
                                                       checked={end === 'smooth'}
                                                       onChange={(e) => {
                                                           setEnd(e.target.value)
                                                       }}
                                                />
                                                <input label="Резкое" type="radio" name="end" value="sharp"
                                                       checked={end === 'sharp'}
                                                       onChange={(e) => {
                                                           setEnd(e.target.value)
                                                       }}
                                                />
                                        </div>
                                    </span>
                            </div>

                            <h5 className="text-start">
                                <img src="assets/icons/info.png" className="mb-1 me-1" width="12px"/>
                                Компоновка*:</h5>

                            <div className="float-start">
                                <button className="btn btn-sm" onClick={handleCompositionAuto}>
                                    <img src="assets/icons/auto.png" className="float-start" height="50px"/>
                                </button>
                                <button className="btn btn-sm" onClick={handleCompositionManual}>
                                    <img src="assets/icons/palm-of-hand.png" className="float-start" height="50px"/>
                                </button>
                            </div>

                            {compositionAuto ?
                                null
                            :
                                null
                            }

                            {compositionManual ?
                                <div className="float-start">
                                    <div className="row">
                                        <div className="buttons d-grid pt-4">
                                            <input label="Удалить отрезок" type="radio" name="segment-1" value="delete"
                                                   checked={compositionSegment1 === 'delete'}
                                                   onChange={(e) => {
                                                       setCompositionSegment1(e.target.value)
                                                   }}
                                            />
                                            <input label="Добавить отрезок" type="radio" name="segment-1" value="add"
                                                   checked={compositionSegment1 === 'add'}
                                                   onChange={(e) => {
                                                       setCompositionSegment1(e.target.value)
                                                   }}
                                            />
                                        </div>
                                        <span className="font-weight-bold col-6 pt-5">от
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
                                    <div className="row col-12">
                                        <div className="buttons d-grid pt-4">
                                            <input label="Удалить отрезок" type="radio" name="segment-2" value="delete"
                                                   checked={compositionSegment2 === 'delete'}
                                                   onChange={(e) => {
                                                       setCompositionSegment2(e.target.value)
                                                   }}
                                            />
                                            <input label="Добавить отрезок" type="radio" name="segment-2" value="add"
                                                   checked={compositionSegment2 === 'add'}
                                                   onChange={(e) => {
                                                       setCompositionSegment2(e.target.value)
                                                   }}
                                            />
                                        </div>
                                        <span className="font-weight-bold col-7 pt-5">от
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
                    <AdditionalTrackBody product={product}
                                         setAdditionalTracks={setAdditionalTracks} />

                    <AddSuggestiveEffectBtn product={product}/>
                    <AddSuggestiveEffectBody product={product}
                                             setSuggestiveEffect={setSuggestiveEffect}/>

                    <UnloadingModuleBtn product={product}/>
                    <UnloadingModuleBody product={product}
                                            setUnloadingModule={setUnloadingModule}/>
                </div>
            </form>
        </div>
    )
}
export default FinishedTrackBody;
