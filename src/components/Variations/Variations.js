import React, {useContext} from "react";
import LanguageContext from "../../LanguageProvider/LanguageProvider";

const Variations = ({variants, product}) => {
   const {language} = useContext(LanguageContext)

    return(
        <>
        {!variants.length == 0 ?
                <div className="row variations-btn card col-4">
                    <div>
                        <button type="button"
                                className="btn btn-sm shadow-none dropdown-toggle-split"
                                data-bs-toggle="collapse"
                                data-bs-target={'#variations' + product.id}
                                aria-expanded="true"
                                style={{borderRadius:"12px"}}
                                aria-controls="collapseOne">
                            {language === 'Russian' ?
                                <span>Вариации данного трека</span>
                                :
                                <span>Variations of this track</span>
                            }
                        </button>
                    </div>
                    <div id={'variations' + product.id} className="accordion-collapse collapse text-start"
                         aria-labelledby="headingOne" data-bs-parent="#accordionExample">

                        {language === 'Russian' ?
                            <a href={"/track/" + product.id + "/variations/"} style={{fontSize: '12px'}} className="d-block text-muted">
                                Сравнить все
                            </a>
                            :
                            <a href={"/track/" + product.id + "/variations/"} style={{fontSize: '12px'}} className="d-block text-muted">
                                Compare all
                            </a>
                        }

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
