import React, {useState} from "react";


const FinishedTrackBtn = (props) => {
    const {product} = props
    const [commentary, setCommentary] = useState('');

    const initData = () => {
        setCommentary('');
    }

    return(
        <div className="container-fluid">
            <button type="button"
                    //#TODO dropdown-toggle - стрелочка , а нужно 'X'. хз как))
                    className="btn finished_track_btn btn-sm col-9 dropdown-toggle-split"
                    data-bs-toggle="collapse"
                    data-bs-target={'#finished_track' + product.id}
                    aria-expanded="true"
                    style={{borderRadius:"12px"}}
                    aria-controls="collapseOne">
                <span style={{fontSize: '15px'}}>Доработать этот трек</span>
            </button>
        </div>
    )
}
export default FinishedTrackBtn
