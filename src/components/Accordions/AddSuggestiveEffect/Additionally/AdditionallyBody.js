import React, {useState} from "react";
import UnloadingModuleBtn from "../../UnloadingModule/UnloadingModuleBtn";
import UnloadingModuleBody from "../../UnloadingModule/UnloadingModuleBody";

const AdditionallyBody = (props) => {
    const {product} = props
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

    return (
        <div id={'additionally' + product.id} className="accordion-collapse row justify-content-center collapse"
             aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="p-3 style-accordion text-white" style={{borderRadius: "12px", backgroundColor: "#66647c"}}>
                <h6 className="text-start">Для повышения эффективности суггестивного воздействия вы также можете
                    загрузить
                    слова одобрения, поддержки и другие положительно подкрепляемые эмоциональные фразы
                    тренера и/или хореографа. Данные также будут добавлены в программу выступления</h6>
                <h6 className="pt-3 text-start">Запись должна быть в хорошем качестве без посторонних шумов и сильных
                    перепадов
                    по громкости. Постарайтесь голос и интонацию сделать максимально естественную (не
                    наигранную). Это значительно повысит результат.</h6>

                    <div className="float-start pb-3">
                        <button className="btn btn-sm shadow-none" onClick={handleLink}>
                            <img src="assets/icons/www.png" className="card p-1" height="50px"/>
                        </button>
                        <button className="btn btn-sm shadow-none" onClick={handleFile}>
                            <img src="assets/icons/download.png" className="card p-1" height="50px"/>
                        </button>
                    </div>
                {link ?
                    <div className="col-6 pb-2">
                        <input type="url" required
                            // value={valueLink}
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
    )
}
export default AdditionallyBody;
