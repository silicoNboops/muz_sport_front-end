import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import ProductsPaginated from "./ProductsPaginated";
import Filters from "./Filters";
import {toast} from "react-toastify";


const CatalogTemplate = React.memo(() => {
    const itemsReqUrlDefault = process.env.REACT_APP_MUZSPORT_API + '/tracks/';

    const [filterVariants, setFilterVariants] = useState({});
    const [selectedFiltersValues, setSelectedFiltersValues] = useState({});
    const [loading, setLoading] = useState(true);
    const [filtersError, setFiltersError] = useState(null);
    const [itemsReqUrl, setItemsReqUrl] = useState(itemsReqUrlDefault);

    // передавать вторым аргументом state, при изменении которого должна вызываться функция чтоб не было лишних
    useEffect(() => {
        async function fetchInitData() {
            await fetch(process.env.REACT_APP_MUZSPORT_API + `/tracks/filtersAll`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then((filters) => {
                    setFilterVariants(filters);
                    setFiltersError(null);
                }, (error) => {
                    console.log('Не удалось получить список фильтров');
                    setFiltersError(error);
                })
                .then(() => setLoading(false));
        }

        fetchInitData();
    }, []);

    const generateItemsReqUrl = (filtersQueryParams) => {
        if (!filtersQueryParams) {
            filtersQueryParams = '';
        }

        const reqUrl = process.env.REACT_APP_MUZSPORT_API + `/tracks/?${filtersQueryParams}`;
        setItemsReqUrl(reqUrl);
    };

    const handleSubmitFiltered = (event) => {
        // Event: Cancels Event (Stops HTML Default Form Submit)
        event.preventDefault();
        // Event: Prevents Event Bubbling To Parent Elements
        event.stopPropagation();

        let convertedQueryParams = '';

        Object.entries(selectedFiltersValues).forEach(([fieldName, value]) => {
            if (value !== '') {
                convertedQueryParams += `${fieldName}=${value}&`;
            }
        })

        convertedQueryParams = convertedQueryParams.substring(0, convertedQueryParams.length - 1);
        console.log(convertedQueryParams);

        // все отображение продуктов в компоненте-ребенке пагинационном - там все запросы к АПИ
        generateItemsReqUrl(convertedQueryParams);

        toast.success('Фильтры применены', {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    }

    const clearFilters = () => {
        async function reset() {
            await setSelectedFiltersValues({});
            await setItemsReqUrl(itemsReqUrlDefault);
        }

        reset().then(r =>
            console.log(r)
        );

        toast.success('Фильтры сброшены', {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    }

    const handlerCHANGER = (event) => {
        let value;

        if (event.target.type === 'checkbox') {
            value = event.target.checked;
            value = value.toString();
            value = value.charAt(0).toUpperCase() + value.slice(1)
        } else {
            value = event.target.value;
        }

        // console.log(value);

        setSelectedFiltersValues({...selectedFiltersValues, [event.target.id]: value});
    }

    // TODO переделать по аналогии с селектами, сделать компоненты
    // const checkboxList = () => {
    //     console.log('CHECKBOXES');
    //
    //     return (
    //         <Row className="mb-3">
    //             {
    //                 runCallback(() => {
    //                     const checkboxFilters = filterVariants.checkbox;
    //
    //                     const checkbox = [];
    //                     const checkboxBlock = [];
    //
    //                     checkboxFilters.map((checkboxFilter, index) =>
    //                         checkbox.push(
    //                             <Form.Group
    //                                 key={checkboxFilter.db_name + '_' + index}
    //                                 controlId={checkboxFilter.db_name}
    //                             >
    //                                 <Form.Check name={checkboxFilter.db_name}
    //                                             inline
    //                                             className="text-white"
    //                                             type='checkbox'
    //                                             id={checkboxFilter.db_name + '_' + index}
    //                                             label={checkboxFilter.verbose_name}
    //                                 />
    //                             </Form.Group>)
    //                     );
    //
    //                     checkboxBlock.push(
    //                         <Row className="mb-3">
    //                             {checkbox}
    //                         </Row>);
    //
    //                     return checkboxBlock;
    //                 })
    //             }
    //         </Row>
    //     );
    // };

    const filters = (loading) => {
        if (loading) {
            return (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Загрузка...</span>
                    </div>
                </div>
            );
        }

        if (filtersError) {
            return (
                <div className="alert alert-danger" role="alert">
                    {filtersError}
                </div>);
        }

        return (
            <>
                <Form onSubmit={handleSubmitFiltered}>
                    <Row className="mb-3">
                        <Filters filterVariants={filterVariants}
                                 selectedValues={selectedFiltersValues}
                                 handlerChangeSelect={handlerCHANGER}
                        />
                    </Row>

                    <Row>
                        <Col xs={{offset: 7}}>
                            <Button type="submit" className='btn btn_filter shadow-none'>
                                {/*TODO сделать из нее Spinner Buttons bootstrap*/}
                                Применить фильтры
                            </Button>
                        </Col>
                        <Col xs={{order: 'last'}}>
                            <Button variant="primary" className='btn btn_filter float-right shadow-none'
                                    onClick={clearFilters}>
                                Сбросить фильтры
                            </Button>
                        </Col>
                    </Row>

                    {/* TODO можно поюзать, для обратной отдачи юзеру при неправильном вводе данных формы */}
                    <Form.Control.Feedback type="invalid">НЕПРАВ</Form.Control.Feedback>
                </Form>
            </>
        );
    }

    return (
        <>
            <div className="padding-y-sm" style={{minHeight: '900px'}}>
                {filters(loading)}

                {!loading && (
                    <div className="padding-y-sm" style={{minHeight: '200px'}}>
                        <ProductsPaginated itemsReqUrl={itemsReqUrl}/>
                    </div>)
                }
            </div>
        </>
    )
});

export default CatalogTemplate;
