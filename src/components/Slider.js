import React from "react";

const Slider = () => {
    return(
    <div className="container">
        <label className="text-white" htmlFor="agitated">1:12</label>
            <input type="range" min="0" max="100" id="fader"/>
        <label className="text-white" htmlFor="tired">2:23</label>
    </div>
    )
}
export default Slider;





