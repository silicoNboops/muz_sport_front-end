import React, {useState} from "react";
import UnloadingModuleBtn from "../../UnloadingModule/UnloadingModuleBtn";
import UnloadingModuleBody from "../../UnloadingModule/UnloadingModuleBody";

const AdditionallyBody = (props) => {
    const {product} = props
    const [link, setLink] = useState('')
    const [file, setFile] = useState('')

    return (
        <div id={'additionally' + product.id} className="accordion-collapse collapse" aria-labelledby="headingOne"
             data-bs-parent="#accordionExample">
            <div className="p-3 col-11 text-white" style={{borderRadius: "12px", backgroundColor: "#66647c"}}>
                <h6 className="text-start">Для повышения эффективности суггестивного воздействия вы также можете
                    загрузить
                    слова одобрения, поддержки и другие положительно подкрепляемые эмоциональные фразы
                    тренера и/или хореографа. Данные также будут добавлены в программу выступления</h6>
                <h6 className="pt-3 text-start">Запись должна быть в хорошем качестве без посторонних шумов и сильных
                    перепадов
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
    )
}
export default AdditionallyBody;
