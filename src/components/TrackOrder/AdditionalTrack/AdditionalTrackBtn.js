import React from "react";
import {useContext} from "react";
import LanguageContext from "../../../LanguageProvider/LanguageProvider";

const AdditionalTrackBtn = () => {
    const {language} = useContext(LanguageContext)

    return(
        <>
            {language === 'Russian' ?
                <div className="text-start ps-5">
                    <button type="button"
                            className="btn btn-sm dropdown-toggle ms-4 ps-5 shadow-none dropdown-toggle-split"
                            data-bs-toggle="collapse"
                            data-bs-target={'#additional_track'}
                            aria-expanded="true"
                            style={{borderRadius:"12px"}}
                            aria-controls="collapseOne">
                <span className="text-white">
                    <img src="/assets/icons/plus.png" className="pe-3" width="50px"/>
                    Добавить трек к программе</span>
                    </button>
                </div>
                :
                <div className="text-start ps-5">
                    <button type="button"
                            className="btn btn-sm dropdown-toggle ms-4 ps-5 shadow-none dropdown-toggle-split"
                            data-bs-toggle="collapse"
                            data-bs-target={'#additional_track'}
                            aria-expanded="true"
                            style={{borderRadius:"12px"}}
                            aria-controls="collapseOne">
                <span className="text-white">
                    <img src="/assets/icons/plus.png" className="pe-3" width="50px"/>
                    Add a track to the program</span>
                    </button>
                </div>
            }

        </>
    )
}
export default AdditionalTrackBtn;
