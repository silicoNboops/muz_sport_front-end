import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import ProductsPaginated from "./ProductsPaginated";
import Selects from "./SelectFilter";
import {toast} from "react-toastify";


const CatalogTemplate = React.memo(() => {
    // в пропсы передаем тип товаров и его потом в ссылки толкаем - чтоб код по сто раз не писать
    const itemsReqUrlDefault = process.env.REACT_APP_MUZSPORT_API + 'tracks' + '/';

    const [productsData, setProductsData] = useState({});
    const [filterVariants, setFilterVariants] = useState({});
    // TODO через пропсы засовывать сюда уже selectedFiltersValues когда будем на страницах разных продуктов делать
    const [selectedFiltersValues, setSelectedFiltersValues] = useState({});
    const [loading, setLoading] = useState(true);
    const [filtersError, setFiltersError] = useState(null);
    const [productsError, setProductsError] = useState(null);
    const [itemsReqUrl, setItemsReqUrl] = useState(itemsReqUrlDefault);

    // передавать вторым аргументом state, при изменении которого должна вызываться функция чтоб не было лишних
    useEffect(() => {
        async function fetchInitData() {
            // TODO сделать на беке получение фильтров для каждого из типов продуктов
            await fetch(process.env.REACT_APP_MUZSPORT_API + `tracks/filtersAll`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    // 'Origin': 'http://nksgroup33.ru:8000'
                }
            })
                .then(res => res.json())
                .then((filters) => {
                    setFilterVariants(filters);
                    setFiltersError(null);
                }, (error) => {
                    console.log('Не удалось получить список фильтров');
                    setFiltersError(error);
                });

            // TODO заменить на слэш! /products -> и в остальных местах тоже
            await fetch(process.env.REACT_APP_MUZSPORT_API + 'tracks/', {
            })
                .then(res => res.json())
                .then((products) => {
                    setProductsError(null);
                    setProductsData(products);
                }, (error) => {
                    console.log('Не удалось получить продукты');
                    setProductsError(error);
                })
                .then(() => setLoading(false));
        }

        fetchInitData();
    }, []);

    const getProducts = async (filtersQueryParams) => {
        if (!filtersQueryParams) {
            filtersQueryParams = '';
        }

        await fetch(process.env.REACT_APP_MUZSPORT_API + `tracks/?${filtersQueryParams}`)
            .then(res => res.json())
            .then((products) => {
                setProductsData(products);
                setProductsError(null);
                return products;
            }, (error) => {
                console.log('Не удалось получить продукты');
                setProductsError(error);
                return null;
            })
    };

    const generateItemsReqUrl = (filtersQueryParams) => {
        if (!filtersQueryParams) {
            filtersQueryParams = '';
        }

        const reqUrl = process.env.REACT_APP_MUZSPORT_API + `tracks/?${filtersQueryParams}`;
        setItemsReqUrl(reqUrl);
    };

    const handleSubmitFiltered = (event) => {
        // Event: Cancels Event (Stops HTML Default Form Submit)
        event.preventDefault();
        // Event: Prevents Event Bubbling To Parent Elements
        event.stopPropagation();

        let convertedQueryParams = '';

        // const formData = new FormData(event.target)

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

        reset();
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

    const runCallback = (cb) => {
        console.log('RUN_CALLBACK');
        return cb();
    }

    const handlerCHANGER = (event) => {
        setSelectedFiltersValues({...selectedFiltersValues, [event.target.id]: event.target.value});

        // console.log(selectedFiltersValues);
    }

    // TODO переделать по аналогии с селектами, сделать компоненты
    const checkboxList = () => {
        console.log('CHECKBOXES');

        return (
            <Row className="mb-3">
                {
                    runCallback(() => {
                        const checkboxFilters = filterVariants.checkbox;

                        const checkbox = [];
                        const checkboxBlock = [];

                        console.log('adad');

                        checkboxFilters.map((checkboxFilter, index) =>
                            // TODO col-lg and etc. for adaptive design (4 to 2 elems in row)
                            checkbox.push(
                                <Form.Group
                                    key={checkboxFilter + '_' + index}
                                    controlId={checkboxFilter}
                                >
                                    <Form.Check name={checkboxFilter}
                                                inline
                                                type='checkbox'
                                                id={checkboxFilter + '_' + index}
                                                label={checkboxFilter}
                                    />
                                </Form.Group>)
                        );

                        checkboxBlock.push(
                            <Row className="mb-3">
                                {checkbox}
                            </Row>);

                        console.log('RUN');

                        return checkboxBlock;
                    })
                }
            </Row>
        );
    };

    const content = (loading) => {
        if (loading) {
            return (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
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
                        <Selects fieldList={filterVariants.select}
                            // resetValues={resetSelectsKey}
                                 selectedValues={selectedFiltersValues}
                                 handlerChangeSelect={handlerCHANGER}
                        />
                    </Row>

                    <Row>
                        <Col xs={{offset: 8}}>
                            <Button type="submit" className='btn btn-nks'>
                                {/*TODO сделать из нее Spinner Buttons bootstrap*/}
                                Применить фильтры
                            </Button>
                        </Col>
                        <Col xs={{order: 'last'}}>
                            <Button variant="primary" className='btn btn-nks float-right'
                                    onClick={clearFilters}>
                                Сбросить фильтры
                            </Button>
                        </Col>
                    </Row>

                    {/* TODO хз как юзать */}
                    <Form.Control.Feedback type="invalid">НЕПРАВ</Form.Control.Feedback>
                </Form>

                <div className="padding-y-sm" style={{minHeight: '200px'}}>
                    {productsError ?
                        <div className="alert alert-danger" role="alert">
                            {productsError}
                        </div>
                        : <ProductsPaginated itemsReqUrl={itemsReqUrl}/>
                    }
                </div>
            </>
        );
    }

    return (
        <>
            <div className="padding-y-sm" style={{minHeight: '900px'}}>
                {content(loading)}
            </div>
        </>
    )
});

export default CatalogTemplate;
