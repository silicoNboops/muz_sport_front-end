import React from "react";

const Variations = (props) => {
    const {product} = props
    const [variants] = product.variants
    console.log(variants)

    return(
        <div className="row text-end variations-btn card col-3">
            <div>
                <button type="button"
                        className="btn btn-sm  dropdown-toggle-split "
                        data-bs-toggle="collapse"
                        data-bs-target={'#variations' + product.id}
                        aria-expanded="true"
                        style={{borderRadius:"12px"}}
                        aria-controls="collapseOne">
                    <span className="text-black">Вариации данного трека</span>
                </button>
            </div>
            <div id={'variations' + product.id} className="accordion-collapse collapse text-start"
                 aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <a href="#" className='text-black'>hello</a>
            </div>
        </div>
    )
}
export default Variations;
