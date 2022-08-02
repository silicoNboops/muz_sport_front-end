import React from "react";

const AddSuggestiveEffectBtn = () => {

    return(
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
    )
}
export default AddSuggestiveEffectBtn
