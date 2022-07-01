import React, {useState} from "react";

const UnloadingModuleBtn = (props) => {
    const {product} = props

    return (
        <div className="text-start">
            <button type="button"
                    className="btn btn-lg dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="collapse"
                    data-bs-target={'#unloading_module' + product.id}
                    aria-expanded="true"
                    style={{borderRadius:"12px"}}
                    aria-controls="collapseOne">
                <span className="text-white">
                    <img src="assets/icons/relax.png" className="pe-3" width="70px"/>
                    Создание разгрузочного модуля</span>
            </button>
        </div>
    )
}
export default UnloadingModuleBtn;
