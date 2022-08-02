import React from "react";
import {useContext} from "react";
import LanguageContext from "../../../LanguageProvider/LanguageProvider";

const AddSuggestiveEffectBtn = () => {
    const {language} = useContext(LanguageContext)

    return(
        <>
            {language === 'Russian' ?
                <div className="text-start ms-5">
                    <button type=" button"
                            className="btn shadow-none ms-4 ps-5 btn-sm dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="collapse"
                            data-bs-target={'#suggestive_effect'}
                            aria-expanded="true"
                            style={{borderRadius:"12px"}}
                            aria-controls="collapseOne">
                <span className="text-white">
                    <img src="/assets/icons/blockchain.png" className="pe-3" width="50px"/>
                    Добавление суггестивного эффекта к программе</span>
                    </button>
                </div>
                :
                <div className="text-start ms-5">
                    <button type=" button"
                            className="btn shadow-none ms-4 ps-5 btn-sm dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="collapse"
                            data-bs-target={'#suggestive_effect'}
                            aria-expanded="true"
                            style={{borderRadius:"12px"}}
                            aria-controls="collapseOne">
                <span className="text-white">
                    <img src="/assets/icons/blockchain.png" className="pe-3" width="50px"/>
                    Adding a suggestive effect to the program</span>
                    </button>
                </div>
            }

        </>
    )
}
export default AddSuggestiveEffectBtn
