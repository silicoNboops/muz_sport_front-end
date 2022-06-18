import React, {useState} from "react";
import {Dropdown} from "react-bootstrap";

const UnloadingModule = () => {
    const [link, setLink] = useState('')
    const [file, setFile] = useState('')

    const initData = () => {
        setFile('');
        setLink('');
    }

    return(
        <div className="container-fluid p-5">
            <button type="button"
                    className="btn btn-lg dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    style={{borderRadius:"12px"}}
                    aria-controls="collapseOne">
                <span className="text-white">
                    <img src="assets/icons/relax.png" className="pe-3" width="70px"/>
                    Создание разгрузочного модуля:</span>
            </button>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingOne"
                 data-bs-parent="#accordionExample">
                <div className="accordion-body" >
                    <div className="container card col-8 p-5" style={{borderRadius:"12px"}}>
                        <p className="text-start">Разгрузочный модуль окажет психологическое расслабление после спортивного выступления
                        (соревнования), а также в перерывах между интенсивными тренировками</p>
                        <figcaption className="card-props-column">
                            <div className="card-props card-text">
                                <span className="font-weight-bolder ">Направление воздействия эффекта:</span>
                                <span className="font-weight-bold container pt-3">
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
                                <h5 className="text-start pt-5">Материал (трек) для создания разгрузочного модуля*:</h5>
                                <h6 className="pt-3 text-start">Рекомендуется выбирать для эмоциональной разгрузки спокойную
                                композицию в стиле: классика, неоклассика, эмбиент, чиллаут, чилстеп или иную, которая
                                вызывает у обычного человека чувство расслабления. Рекомендуемая продолжительность: 5-12
                                мин.
                                </h6>
                                <div className=" d-inline-flex pt-3">
                                    <img src="assets/icons/www.png" className="card me-3 p-1" height="50px"/>
                                    <img src="assets/icons/download.png" className="card p-1" height="50px"/>
                                </div>
                                <div className="col-6 pt-3">
                                    <input type="url" required
                                           value={link}
                                           placeholder="Ссылка на файл..."
                                           className="form-control input-box"
                                           onChange={(e) =>
                                               setLink(e.target.value)}
                                    />
                                    <input type="file"
                                           value={file}
                                           placeholder="формат mp3, mpeg"
                                           className="form-control input-box mt-3"
                                           onChange={(e) =>
                                               setFile(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
export default UnloadingModule
