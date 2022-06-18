import React, {useState} from "react";
import {Dropdown} from "react-bootstrap";

const AddSuggestiveEffect = () => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('')
    const [file, setFile] = useState('')

    const initData = () => {
        setName('');
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
                    <img src="assets/icons/blockchain.png" className="pe-3" width="70px"/>
                    Добавление суггестивного эффекта к программе:</span>
            </button>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingOne"
                 data-bs-parent="#accordionExample">
                <div className="accordion-body " >
                    <div className="container card col-8 p-5" style={{borderRadius:"12px"}}>
                        <p className="text-start">Добавление суггестивного эффекта в спортивную программу позволит повысить концетрацию и
                        мобилизацию спортсмена на соревновании, а так же окажет психологическую поддержку спортсмена во
                        время выступления</p>
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

                        <button type="button"
                                className="btn btn-lg dropdown-toggle-split text-start pt-4"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="true"
                                style={{borderRadius:"12px"}}
                                aria-controls="collapseOne">
                <span>
                    <img src="assets/icons/plus.png" className="pe-3" width="50px"/>
                    Дополнительно</span>
                        </button>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingOne"
                             data-bs-parent="#accordionExample">
                                <div className="p-3 text-white" style={{borderRadius:"12px", backgroundColor:"#66647c"}}>
                                    <h6 className="text-start">Для повышения эффективности суггестивного воздействия вы также можете загрузить
                                    слова одобрения, поддержки и другие положительно подкрепляемые эмоциональные фразы
                                    тренера и/или хореографа. Данные также будут добавлены в программу выступления</h6>
                                    <h6 className="pt-3 text-start">Запись должна быть в хорошем качестве без посторонних шумов и сильных перепадов
                                    по громкости. Постарайтесь голос и интонацию сделать максимально естественную (не
                                    наигранную). Это значительно повысит результат.</h6>
                                    <div className="container d-inline-flex pt-3">
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
            </div>
        </div>
    )
}
export default AddSuggestiveEffect
