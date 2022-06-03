import React from 'react';

const DataBlock = ({value, valueChanger, type, placeholder, label}) => {
    return (
        <div className="col-md-6 mt-3">
            <p>{label}</p>
            <input type={type} required
                   placeholder={placeholder}
                   value={value}
                   className="form-control input-muz"
                   onChange={(e) =>
                        valueChanger(e.target.value)}
            />
        </div>
    );
};

export default DataBlock;
