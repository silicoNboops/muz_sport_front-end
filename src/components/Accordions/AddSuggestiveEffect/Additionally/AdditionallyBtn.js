import React, {useState} from "react";

const AdditionallyBtn = (props) => {
    const {product} = props

    return (
        <div className="text-start">
            <button type="button"
                    className="btn btn-lg dropdown-toggle-split text-start pt-4"
                    data-bs-toggle="collapse"
                    data-bs-target={'#additionally' + product.id}
                    aria-expanded="true"
                    style={{borderRadius: "12px"}}
                    aria-controls="collapseOne">
                                <span>
                                    <img src="assets/icons/plus.png" className="pe-3" width="50px"/>
                                    Дополнительно</span>
            </button>
        </div>
    )
}
export default AdditionallyBtn;
