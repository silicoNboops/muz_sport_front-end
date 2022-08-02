import React, {useState} from "react";
import {useContext} from "react";
import LanguageContext from "../../../LanguageProvider/LanguageProvider";

const UnloadingModuleBtn = ({product}) => {
    const {language} = useContext(LanguageContext)

    return (
        <>
            {language === 'Russian' ?
                <div className="text-start ms-5">
                    <button type="button"
                            className="btn btn-sm dropdown-toggle dropdown-toggle-split shadow-none"
                            data-bs-toggle="collapse"
                            data-bs-target={'#unloading_module' + product.id}
                            aria-expanded="true"
                            style={{borderRadius:"12px"}}
                            aria-controls="collapseOne">
                <span className="text-white">
                    <img src="/assets/icons/relax.png" className="pe-3" width="50px"/>
                    Создание разгрузочного модуля</span>
                    </button>
                </div>
                :
                <div className="text-start ms-5">
                    <button type="button"
                            className="btn btn-sm dropdown-toggle dropdown-toggle-split shadow-none"
                            data-bs-toggle="collapse"
                            data-bs-target={'#unloading_module' + product.id}
                            aria-expanded="true"
                            style={{borderRadius:"12px"}}
                            aria-controls="collapseOne">
                <span className="text-white">
                    <img src="/assets/icons/relax.png" className="pe-3" width="50px"/>
                    Creating an unloading module</span>
                    </button>
                </div>
            }

        </>
    )
}
export default UnloadingModuleBtn;
