import React from 'react';

const DataBlock = ({value, valueChanger, type, placeholder, label, size, valuesList, isDisabled}) => {
    console.log(size);

    return (
        // TODO sml, med, big for col-3 col-6 col-12 or textarea!
        <div className="col-md-6 mt-3">
            <p className='text-white'>{label}</p>

            {type !== 'select' ? (
                <>
                    <input type={type}
                           required
                           disabled={isDisabled}
                           placeholder={placeholder}
                           value={value}
                           className={"form-control input-muz"}
                           onChange={(e) => valueChanger(e.target.value)}
                    />
                </>
            ) : (
                <>
                    <select className="form-select input-muz"
                            required
                            aria-label=".form-select"
                            defaultValue=''
                            value={value}
                            onChange={(e) => valueChanger(e.target.value)}
                    >
                        <option value='' disabled className='text-muted'>
                            {placeholder}
                        </option>

                        {/*TODO и вот тут я в кейс добавил индекс чтоб при ресете менялись значения*/}
                        {valuesList.map((sport, index) =>
                            <option key={sport.value + '_' + index} value={sport.value}>
                                {sport.name}
                            </option>
                        )}
                    </select>
                </>
            )}
        </div>
    );
};

export default DataBlock;
