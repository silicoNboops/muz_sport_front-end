import React from 'react';
import DataBlock from './DataBlock';


// description, submitButton (text, handler, icon),
// dataBlocks (name, label, type, value, placeholder, valuesList, isDisabled, size, valueChanger)
const SectionData = ({dataBlocks, submitButton, description}) => {

    const fillDescription = () => {
        return (
            <p className="col-md-12">
                {description}
            </p>
        )
    }

    const fillDataBlocks = () => {
        return (
            dataBlocks.map((dataBlock, index) =>
                <DataBlock
                    key={dataBlock + '_' + index}
                    value={dataBlock.value}
                    valueChanger={dataBlock.valueChanger}
                    type={dataBlock.type}
                    placeholder={dataBlock.placeholder}
                    label={dataBlock.label}
                    size={dataBlock.size ? dataBlock.size : 'sml'}
                    isDisabled={dataBlock.isDisabled}
                    // for selects
                    valuesList={dataBlock.valuesList}
                />))
    }


    return (
        <>
            {submitButton ? (
                <form onSubmit={submitButton.handler}>

                    <div className="row">
                        {fillDescription()}
                        {fillDataBlocks()}

                        <div className="col-md-12 mt-5">
                            <div className="float-end">
                                <button className="btn btn-muz m-3"
                                        type="submit">

                                    <img src={"assets/icons/" + submitButton.icon} width="28px"
                                         alt={submitButton.text}
                                         className='me-3'
                                    />
                                    {submitButton.text}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            ) : (
                <div className="row">
                    {fillDescription()}
                    {fillDataBlocks()}
                </div>
            )}
        </>
    );
};

export default SectionData;
