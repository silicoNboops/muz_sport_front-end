import {Form} from "react-bootstrap";
import React from "react";
import {TableRow} from "@mui/material";


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
    // console.log('SELECT_INPUT');

    const {selectedValue, product_prop, name, values, handler} = props;

    // TODO подумать как тут предотвращать рендеры ВСЕХ затронутых элементов
    // TODO мб через хендлер
    return (
        <Form.Group className="col-2 container-fluid p-3" as={TableRow} controlId={product_prop}>
            <Form.Label className="text-white">{name}</Form.Label>
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
                {values.map((filter, index) => {
                    console.log(filter)
                    return(
                        <option key={filter.id + '_' + index + '_' + product_prop} value={filter.id}>
                            {filter.title}
                        </option>
                    );
                })}
            </Form.Control>
        </Form.Group>
    )
});

export default Selects;
