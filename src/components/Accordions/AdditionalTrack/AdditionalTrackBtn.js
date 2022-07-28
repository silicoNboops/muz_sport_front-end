import React from "react";

const AdditionalTrackBtn = ({product}) => {
    return(
        <div className="text-start ms-5">
            <button type="button"
                    className="btn btn-sm dropdown-toggle dropdown-toggle-split shadow-none"
                    data-bs-toggle="collapse"
                    data-bs-target={'#additional_track' + product.id}
                    aria-expanded="true"
                    style={{borderRadius:"12px"}}
                    aria-controls="collapseOne">
                <span className="text-white">
                    <img src="/assets/icons/plus.png" className="pe-3" width="50px"/>
                    Добавить трек к программе</span>
            </button>
        </div>
    )
}
export default AdditionalTrackBtn;
