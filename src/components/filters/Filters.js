import {Form} from "react-bootstrap";
import React from "react";
import {TableRow} from "@mui/material";


const Filters = React.memo(({filterVariants, selectedValues, handlerChangeSelect}) => {
    const filterNameSequence = ['sport', 'len', 'direction', 'character', 'words', 'country']

    let filters = []

    console.log(Object.entries(filterVariants));

    for (const [filterName, filter] of Object.entries(filterVariants)) {
        console.log([filterName, filter]);
    }

    filterNameSequence.map(filterName => {
        // console.log(filterName);
        // console.log(filterVariants[filterName]);
        // console.log(Object.values(filterVariants))

        let filter = filterVariants[filterName];
        console.log(filter.type);

        if (filter.type === 'select') {
            filters.push(
                <FilterSelect
                    key={filter.product_prop + '_' + filter.type + '_' + filter.name}
                    handler={handlerChangeSelect}
                    product_prop={filter.product_prop}
                    name={filter.name}
                    values={filter.values}
                    selectedValue={selectedValues ? selectedValues[filter.product_prop] : ''}
                />
            )
        } else {
            filters.push(
                <Form.Group className="col-2 container-fluid pt-5 text-white" as={TableRow}
                    key={filter.db_name + '_' + filter.verbose_name}
                    controlId={filter.db_name}
                >
                    {/* TODO - styled for checkbox */}

                    <Form.Check name={filter.db_name}
                                inline
                                className="checkbox-ex"
                                type='checkbox'
                                id={filter.db_name + '_' + filter.verbose_name}
                                label={filter.verbose_name}
                                onChange={handlerChangeSelect}
                    />
                </Form.Group>
            )
        }
    });

    console.log(filters);

    return filters;

    // return filterVariants.map((filter, index) => {
    //     if (filter.type === 'select') {
    //         return(
    //             <FilterSelect
    //                 key={filter + '_' + index}
    //                 handler={handlerChangeSelect}
    //                 product_prop={filter.product_prop}
    //                 name={filter.name}
    //                 values={filter.values}
    //                 selectedValue={selectedValues ? selectedValues[filter.product_prop] : ''}
    //             />);
    //     } else {
    //         return(
    //             <Form.Group
    //                 key={filter.db_name + '_' + index}
    //                 controlId={filter.db_name}
    //             >
    //                 <Form.Check name={filter.db_name}
    //                             inline
    //                             type='checkbox'
    //                             id={filter.db_name + '_' + index}
    //                             label={filter.verbose_name}
    //                 />
    //             </Form.Group>);
    //     }
    // });
});


const FilterSelect = React.memo((props) => {
    const {selectedValue, product_prop, name, values, handler} = props;

    // TODO подумать как тут предотвращать рендеры ВСЕХ затронутых элементов, мб через хендлер
    return (

        <Form.Group className="col-2 container-fluid p-3" as={TableRow} controlId={product_prop}>
            <Form.Label className="text-white">{name}</Form.Label>
            <Form.Control
                as='select'
                name={name}
                className="filters"
                value={selectedValue}
                onChange={handler}
            >
                <option value=''>
                    {name}
                </option>
                {/* в key добавил индекс чтоб при ресете фильтров менялись значения */}
                {values.map((filter, index) => {
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

export default Filters;
