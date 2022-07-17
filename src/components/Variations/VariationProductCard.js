import React from "react";
import {Col, Row} from "react-bootstrap";
import NewPlayer from "../WaveFormPlayer/FinishedPlayer";

const VariationProductCard = ({variants}) => {

    return (
        <Row>
            {variants.map((variant) => (
                <Col xxl={12} lg={12} md={12} sm={12} className='padding-bottom-sm'>
                    <div>
                        <NewPlayer product={variant.id}/>
                    </div>
                </Col>
            ))}
        </Row>
    );
};

export default VariationProductCard;
