import React from "react";

const Variations = (props) => {
    const {product} = props
    const {variants} = props

    return(
        <>
        {!variants.length == 0 ?
                <div className="row variations-btn card col-4">
                    <div>
                        <button type="button"
                                className="btn btn-sm shadow-none dropdown-toggle-split "
                                data-bs-toggle="collapse"
                                data-bs-target={'#variations' + product.id}
                                aria-expanded="true"
                                style={{borderRadius:"12px"}}
                                aria-controls="collapseOne">
                            <span>Вариации данного трека</span>
                        </button>
                    </div>
                    <div id={'variations' + product.id} className="accordion-collapse collapse text-start"
                         aria-labelledby="headingOne" data-bs-parent="#accordionExample">

                        {variants.map(variant =>
                            <a href={"/track/" + variant.id} className='text-black' style={{fontSize: '14px'}}>
                                {variant.title} - {variant.author}
                                <br/>
                            </a>
                        )}
                    </div>
                </div>
                :
                null
        }
        </>
    )
}
export default Variations;
