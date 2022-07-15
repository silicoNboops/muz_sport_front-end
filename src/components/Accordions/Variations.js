import React from "react";

const Variations = (props) => {
    const {product} = props
    const variants = product.variants

    return(
        <div className="row variations-btn card col-4">
            <div>
                <button type="button"
                        className="btn btn-sm shadow-none dropdown-toggle-split "
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

                {variants.map(variant =>
                    <li>
                        <a href={"/track/" + variant.id} className='text-black'>{variant.title} - {variant.author}</a>
                    </li>
                )}
            </div>
        </div>
    )
}
export default Variations;
