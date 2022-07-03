import {Dropdown} from "react-bootstrap";
import React, {useState} from "react";
import AdditionallyBtn from "./Additionally/AdditionallyBtn";
import AdditionallyBody from "./Additionally/AdditionallyBody";

const AddSuggestiveEffectBody = (props) => {
    const {product} = props
    const [name, setName] = useState('');


    const initData = () => {
        setName('');
    }

    return(
        <div id={'suggestive_effect' + product.id} className="accordion-collapse collapse" aria-labelledby="headingOne"
             data-bs-parent="#accordionExample">
            <div className="col-2 imgblock-accordion">
                <img src='assets/icons/price-tag.png' className='price-icon-accordion'/>
                <span>{product.price} ₽</span>
            </div>
            <div className="accordion-body">
                <div className="card col-11 p-5" style={{borderRadius:"12px"}}>
                    <h6 className="text-start pb-4">Добавление суггестивного эффекта в спортивную программу позволит повысить концетрацию и
                        мобилизацию спортсмена на соревновании, а так же окажет психологическую поддержку спортсмена во
                        время выступления</h6>
                    <figcaption className="card-props-column">
                        <div className="card-props card-text">
                            <span className="font-weight-bolder">Имя спортсмена:</span>
                            <span className="font-weight-bold container col-7">
                                        <input type="text" required
                                               value={name}
                                               placeholder="Указать имя (опционально)"
                                               className="form-control input-box"
                                               onChange={(e) =>
                                                   setName(e.target.value)}
                                        />
                                    </span>
                        </div>
                        <div className="card-props card-text">
                            <span className="font-weight-bolder ">Направление воздействия эффекта:</span>
                            <span className="font-weight-bold container pt-4 pb-4">
                                        <Dropdown>
                                          <Dropdown.Toggle style={{backgroundColor:"#948eba"}} id="dropdown-basic">
                                            Выберите направление
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu className="dropdown-menu">
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                    </span>
                            </div>
                    </figcaption>
                    <AdditionallyBtn product={product}/>
                </div>
                <AdditionallyBody product={product}/>
            </div>
        </div>
    )
}
export default AddSuggestiveEffectBody;
