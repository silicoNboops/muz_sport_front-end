import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import {Col, Row} from "react-bootstrap";
import NewPlayer from "../PlayerBlya/FinishedPlayer";


const Products = ({productsCurrent}) => {

    return (
        <Row>
            {productsCurrent.map((product) => (
                <Col xxl={12} lg={12} md={12} sm={12} className='padding-bottom-sm'>
                    <div>
                        <NewPlayer product={product}/>
                    </div>
                </Col>
            ))}
        </Row>
    );
};


const ProductsPaginated = ({itemsReqUrl}) => {
    const [currentProducts, setCurrentProducts] = useState([]);
    const [pageOffset, setPageOffset] = useState(0);
    const [productsPerPage, setProductsPerPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        getItems(itemsReqUrl);
        setPageOffset(0);
    }, [itemsReqUrl]);

    useEffect(() => {
        let pageParamSeparator = '';
        if (itemsReqUrl.charAt(itemsReqUrl.length - 1) === '/') {
            pageParamSeparator = '?';
        } else {
            pageParamSeparator = '&';
        }
        const paginatedUrl = itemsReqUrl + pageParamSeparator + `page=${pageOffset + 1}`

        getItems(paginatedUrl);
    }, [itemsReqUrl, pageOffset]);

    const getItems = (itemsReqUrl) => {
        console.log(itemsReqUrl);
        fetch(itemsReqUrl)
            .then(res => res.json())
            .then((itemsData) => {
                setCurrentProducts(itemsData.results);
                setProductsPerPage(itemsData.per_page);
                setPageCount(itemsData.page_count);
            }, (error) => {
                setCurrentProducts([]);
                console.log('Не удалось получить товары');
            })
    };

    // TODO переделать под пагинацию при скролле
    const handlePageChange = (event) => {
        setPageOffset(event.selected);
    };

    // заглушка когда нет товаров
    if ((!currentProducts) || (currentProducts.length === 0)) {
        return (
            <div className="alert alert-warning" role="alert">
                Нет товаров по заданным фильтрам
            </div>
        );
    }

    return (
        <>
            {/* TODO юзать другую пагинацию */}
            {/*<ReactPaginate*/}
            {/*    nextLabel="> Следующая"*/}
            {/*    onPageChange={handlePageChange}*/}
            {/*    pageRangeDisplayed={5}*/}
            {/*    marginPagesDisplayed={2}*/}
            {/*    pageCount={pageCount}*/}
            {/*    previousLabel="Предыдущая <"*/}
            {/*    pageClassName="page-item"*/}
            {/*    pageLinkClassName="page-link"*/}
            {/*    previousClassName="page-item"*/}
            {/*    previousLinkClassName="page-link"*/}
            {/*    nextClassName="page-item"*/}
            {/*    nextLinkClassName="page-link"*/}
            {/*    breakLabel="..."*/}
            {/*    breakClassName="page-item"*/}
            {/*    breakLinkClassName="page-link"*/}
            {/*    containerClassName="navigationButtons"*/}
            {/*    activeClassName="active"*/}
            {/*    renderOnZeroPageCount={null}*/}
            {/*    forcePage={pageOffset}*/}
            {/*/>*/}

            <Products productsCurrent={currentProducts} />

            {/*<ReactPaginate*/}
            {/*    nextLabel="> Следующая"*/}
            {/*    onPageChange={handlePageChange}*/}
            {/*    pageRangeDisplayed={5}*/}
            {/*    marginPagesDisplayed={2}*/}
            {/*    pageCount={pageCount}*/}
            {/*    previousLabel="Предыдущая <"*/}
            {/*    pageClassName="page-item"*/}
            {/*    pageLinkClassName="page-link"*/}
            {/*    previousClassName="page-item"*/}
            {/*    previousLinkClassName="page-link"*/}
            {/*    nextClassName="page-item"*/}
            {/*    nextLinkClassName="page-link"*/}
            {/*    breakLabel="..."*/}
            {/*    breakClassName="page-item"*/}
            {/*    breakLinkClassName="page-link"*/}
            {/*    containerClassName="navigationButtons"*/}
            {/*    activeClassName="navigationActive"*/}
            {/*    renderOnZeroPageCount={null}*/}
            {/*    forcePage={pageOffset}*/}
            {/*/>*/}
        </>
    );
};

export default ProductsPaginated;
