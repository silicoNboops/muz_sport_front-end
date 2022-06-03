import React, {useEffect, useState} from 'react';
import DataBlock from './DataBlock';


// TODO description, dataBlocks (name, label, type, value, placeholder),
//  submitButton (text, handler, icon)
const SectionData = (props) => {
    return (
        <div className="row">
            <p className="col-md-12">
                {props.description}
            </p>
            <form onSubmit={props.submitButton.handler}>
                {props.dataBlocks.map((dataBlock, index) =>
                    <DataBlock
                        key={dataBlock + '_' + index}
                        value={dataBlock.value}
                        valueChanger={dataBlock.valueChanger}
                        type={dataBlock.type}
                        placeholder={dataBlock.placeholder}
                        label={dataBlock.label}
                        // selectedValue={selectedValues ? selectedValues[dataBlock.product_prop] : ''}
                    />
                )}

                <div className="col-md-12 mt-5">
                    <div className="float-end">
                        {/* TODO props.submitButton.icon*/}
                        <button className="btn btn-muz m-3"
                                type="submit">
                            {props.submitButton.text}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SectionData;
