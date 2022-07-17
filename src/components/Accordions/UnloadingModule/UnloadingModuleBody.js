import React, {useState, useEffect} from "react";
import { Form} from "react-bootstrap";

const UnloadingModuleBody = (props) => {
    const {product} = props
    const {price} = props
    const [directionEffect, setDirectionEffect] = useState([])
    const [link, setLink] = useState(true)
    const [file, setFile] = useState(false)
    const [valueFile, setValueFile] = useState('')
    const [valueLink, setValueLink] = useState('')

    const initData = () => {
        setValueFile('');
        setValueLink('');
    }
    const handleLink = () => {
        setLink(true)
        setFile(false)
    };
    const handleFile = () => {
        setLink(false)
        setFile(true)
    };


    useEffect(() => {
        async function fetchInitData() {
            await fetch(process.env.REACT_APP_MUZSPORT_API + '/direction_effect/')
                .then(response => response.json())
                .then(data => setDirectionEffect(data))
        }
        fetchInitData();
    },[])


    return(
            <div id={'unloading_module' + product.id} className="accordion-collapse collapse" aria-labelledby="headingOne"
                 data-bs-parent="#accordionExample">
                <button type="button"
                        data-bs-toggle="collapse"
                        className="btn-close shadow-none close-accordion"
                        data-bs-target={'#unloading_module' + product.id}
                        aria-expanded="true"
                        style={{borderRadius:"12px"}}
                        aria-controls="collapseOne">
                </button>
                <div className="card background-accordion ps-4 container">
                    <h5 className="text-white position-relative" style={{right:"31%", top:"10px"}}>Создание разгрузочного
                    модуля</h5>
                    <div className="imgblock-accordion">
                    <img src='/assets/icons/price-tag.png' className='price-icon-accordion'/>
                    <span>{price.price_unloading_module} ₽</span>
                </div>
                <div className="accordion-body row justify-content-center" >
                    <div className="card style-accordion p-5" style={{borderRadius:"12px"}}>
                        <h6 className="text-start">Разгрузочный модуль окажет психологическое расслабление после спортивного выступления
                        (соревнования), а также в перерывах между интенсивными тренировками</h6>
                        <figcaption className="card-props-column">
                            <div className="card-props card-text">
                                <span className="font-weight-bolder ">Направление воздействия эффекта:</span>
                                <span className="font-weight-bold container pt-4 pb-2">
                                    <Form.Group className="col-8 container">
                                        <Form.Control
                                            className="text-center"
                                            style={{backgroundColor:"rgba(153,147,196,0.73)", borderRadius:"16px"}}
                                            as='select'
                                        >
                                            <option className="">
                                                Выберите направление
                                            </option>

                                            {directionEffect.map(directionEffectObj => {
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
                                <h5 className="text-start pt-5">Материал (трек) для создания разгрузочного модуля*:</h5>
                                <h6 className="pt-3 text-start">Рекомендуется выбирать для эмоциональной разгрузки спокойную
                                композицию в стиле: классика, неоклассика, эмбиент, чиллаут, чилстеп или иную, которая
                                вызывает у обычного человека чувство расслабления. Рекомендуемая продолжительность: 5-12
                                мин.
                                </h6>
                        <div className="text-start pb-2">
                            <button className="btn btn-sm shadow-none" onClick={handleLink}>
                                <img src="/assets/icons/www.png" className="card p-1" height="50px"/>
                            </button>
                            <button className="btn btn-sm shadow-none" onClick={handleFile}>
                                <img src="/assets/icons/download.png" className="card p-1" height="50px"/>
                            </button>
                        </div>
                        {link ?
                            <div className="col-6 pt-3 pb-2">
                                <input type="url" required
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

                            <div className="col-6 pb-2">
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

                            </div>
                        </div>
                    </div>
                </div>
    )
}
export default UnloadingModuleBody
