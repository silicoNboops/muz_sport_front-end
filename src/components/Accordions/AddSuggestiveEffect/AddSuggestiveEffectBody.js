import {Dropdown, Form} from "react-bootstrap";
import React, {useState, useEffect} from "react";
import AdditionallyBtn from "./Additionally/AdditionallyBtn";
import AdditionallyBody from "./Additionally/AdditionallyBody";


const AddSuggestiveEffectBody = ({product, setSuggestiveEffect}) => {
    const [directionEffectList, setDirectionEffectList] = useState([]);
    const [athleteName, setAthleteName] = useState('');
    const [directionEffect, setDirectionEffect] = useState('');
    const [directionEffectTrack, setDirectionEffectTrack] = useState(null);

    useEffect(() => {
        async function fetchInitData() {
            await fetch(process.env.REACT_APP_MUZSPORT_API + '/direction_effect/')
                .then(response => response.json())
                .then(data => setDirectionEffectList(data))
        }

        fetchInitData();
    },[])

    useEffect(() => {
        // console.log(directionEffectTrack);

        // создаем объект в соответствии с полями на беке
        // direction_effect_track будем парсить на стороне сервера
        setSuggestiveEffect({
            'athlete_name': athleteName,
            'direction_effect': directionEffect,
            'direction_effect_track': directionEffectTrack
        });
    },[athleteName, directionEffect, directionEffectTrack, setSuggestiveEffect])

    return(
        <div id={'suggestive_effect' + product.id} className="accordion-collapse collapse" aria-labelledby="headingOne"
             data-bs-parent="#accordionExample">
            <div className="col-2 imgblock-accordion">
                <img src='assets/icons/price-tag.png' className='price-icon-accordion'/>
                <span>{product.price} ₽</span>
            </div>
            <div className="accordion-body row justify-content-center">
                <div className="card col-8 p-5" style={{borderRadius:"12px"}}>
                    <h6 className="text-start pb-4">Добавление суггестивного эффекта в спортивную программу позволит повысить концетрацию и
                        мобилизацию спортсмена на соревновании, а так же окажет психологическую поддержку спортсмена во
                        время выступления</h6>
                    <figcaption className="card-props-column">
                        <div className="card-props card-text">
                            <span className="font-weight-bolder">Имя спортсмена:</span>
                            <span className="font-weight-bold container col-7">
                                        <input type="text" required
                                               value={athleteName}
                                               placeholder="Указать имя (опционально)"
                                               className="form-control input-box"
                                               onChange={(e) =>
                                                   setAthleteName(e.target.value)}
                                        />
                                    </span>
                        </div>
                        <div className="card-props card-text">
                            <span className="font-weight-bolder ">Направление воздействия эффекта:</span>
                            <span className="font-weight-bold container pt-4 pb-2">
                                    <Form.Group className="col-8 container">
                                        <Form.Control
                                            className="text-center"
                                            required
                                            style={{backgroundColor:"rgba(153,147,196,0.73)", borderRadius:"16px"}}
                                            as='select'
                                            name='name'
                                            value={directionEffect}
                                            onChange={(e) => setDirectionEffect(e.target.value)}
                                        >
                                            <option>
                                                Выберите направление
                                            </option>
                                            {directionEffectList.map(directionEffectObj => {
                                                return(
                                                    <option id={directionEffectObj.id}>
                                                        {directionEffectObj.direction_effect}
                                                    </option>
                                                );
                                            })}

                                        </Form.Control>
                                    </Form.Group>
                                </span>
                            </div>
                    </figcaption>
                    <AdditionallyBtn product={product}/>
                </div>
                <AdditionallyBody product={product}
                                  setDirectionEffectTrack={setDirectionEffectTrack}/>
            </div>
        </div>
    )
}
export default AddSuggestiveEffectBody;
