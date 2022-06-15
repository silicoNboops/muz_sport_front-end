import {Form} from "react-bootstrap";
import React from "react";
import {TableContainer} from "@mui/material";


const Selects = React.memo(({fieldList, selectedValues, handlerChangeSelect}) => {

    return fieldList.map((filterSelect, index) =>
            <SelectFilter
                key={filterSelect + '_' + index}
                handler={handlerChangeSelect}
                product_prop={filterSelect.product_prop}
                name={filterSelect.name}
                values={filterSelect.values}
                selectedValue={selectedValues ? selectedValues[filterSelect.product_prop] : ''}
            />
    );
});


const SelectFilter = React.memo((props) => {
    console.log('SELECT_INPUT');

    const {selectedValue, product_prop, name, values, handler} = props;

    // TODO подумать как тут предотвращать рендеры ВСЕХ затронутых элементов
    // TODO мб через хендлер
    return (
        <Form.Group className="col-2" as={TableContainer} controlId={product_prop}>
            <Form.Label>{name}</Form.Label>
            <Form.Control
                as='select'
                name={name}
                value={selectedValue}
                onChange={handler}
            >
                <option value=''>
                    Все
                </option>
                {/*TODO и вот тут я в кейс добавил индекс чтоб при ресете менялись значения*/}
                {values.map((filter, index) =>
                    <option key={filter + '_' + index + '_' + selectedValue} value={filter}>
                        {filter}
                    </option>
                )}
            </Form.Control>
        </Form.Group>
    )
});

export default Selects;
