import React, {useState} from "react";

const UnloadingModuleBtn = () => {

    return (
        <div className="text-start ms-5">
            <button type="button"
                    className="btn btn-sm dropdown-toggle ms-4 ps-5 dropdown-toggle-split"
                    data-bs-toggle="collapse"
                    data-bs-target={'#unloading_module'}
                    aria-expanded="true"
                    style={{borderRadius:"12px"}}
                    aria-controls="collapseOne">
                <span className="text-white">
                    <img src="/assets/icons/relax.png" className="pe-3" width="50px"/>
                    Создание разгрузочного модуля</span>
            </button>
        </div>
    )
}
export default UnloadingModuleBtn;
