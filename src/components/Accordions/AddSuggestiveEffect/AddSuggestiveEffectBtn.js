import React from "react";

const AddSuggestiveEffectBtn = (props) => {
    const {product} = props

    return(
        <div className="text-start">
            <button type="button"
                    className="btn btn-lg dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="collapse"
                    data-bs-target={'#suggestive_effect' + product.id}
                    aria-expanded="true"
                    style={{borderRadius:"12px"}}
                    aria-controls="collapseOne">
                <span className="text-white">
                    <img src="assets/icons/blockchain.png" className="pe-3" width="70px"/>
                    Добавление суггестивного эффекта к программе</span>
            </button>
        </div>
    )
}
export default AddSuggestiveEffectBtn