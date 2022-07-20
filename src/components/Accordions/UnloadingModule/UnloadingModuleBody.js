import React, {useState, useEffect} from "react";
import { Form} from "react-bootstrap";

const UnloadingModuleBody = ({product, setUnloadingModule}) => {
    const [directionEffect, setDirectionEffect] = useState([])
    const [link, setLink] = useState(true)
    const [file, setFile] = useState(false)
    const [trackLink, setTrackLink] = useState('');
    const [trackFile, setTrackFile] = useState(null);

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

    useEffect(() => {
        // создаем объект в соответствии с полями на беке
        // direction_effect_track будем парсить на стороне сервера
        setUnloadingModule({
            'direction_effect': directionEffect,
            // 'direction_effect_track': directionEffectTrack
        });
        // if (file) {
        //     additionaTrackObj['file'] = trackFile;
        // }
        // if (link) {
        //     additionaTrackObj['link'] = trackLink;
        // }
    },[directionEffect, setUnloadingModule])


    return(
            <div id={'unloading_module' + product.id} className="accordion-collapse collapse" aria-labelledby="headingOne"
                 data-bs-parent="#accordionExample">
                <div className="col-2 imgblock-accordion">
                    <img src='assets/icons/price-tag.png' className='price-icon-accordion'/>
                    <span>{product.price} ₽</span>
                </div>
                <div className="accordion-body row justify-content-center" >
                    <div className=" card col-8 p-5" style={{borderRadius:"12px"}}>
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
                            <button className="btn btn-sm" onClick={handleLink}>
                                <img src="assets/icons/www.png" className="card p-1" height="50px"/>
                            </button>
                            <button className="btn btn-sm" onClick={handleFile}>
                                <img src="assets/icons/download.png" className="card p-1" height="50px"/>
                            </button>
                        </div>
                        {link ?
                            <div className="col-6 pt-3 pb-2">
                                <input type="url" required
                                    // value={link}
                                       placeholder="Ссылка на файл..."
                                       className="form-control input-box"
                                    // onChange={(e) =>
                                    //     setLink(e.target.value)}
                                />
                            </div>
                            :
                            null
                        }

                        {file ?
                            <div className="col-6 pb-2">
                                <input type="file"
                                    // value={file}
                                       placeholder="формат mp3, mpeg"
                                       className="form-control input-box mt-3"
                                    // onChange={(e) =>
                                    //     setFile(e.target.value)}
                                />
                            </div>
                            :
                            null
                        }

                            </div>
                        </div>
                    </div>
    )
}
export default UnloadingModuleBody
