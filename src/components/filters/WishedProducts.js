import {Col, Row} from "react-bootstrap";
import NewPlayer from "../WaveFormPlayer/FinishedPlayer";
import React from "react";

const WishedProducts = ({wishedProducts}) => {

    return (
        <Row>
            {wishedProducts.map((wishedTrackObj) => (
                <Col xxl={12} lg={12} md={12} sm={12} className='padding-bottom-sm'>
                    <div>

                        <NewPlayer product={wishedTrackObj.wished_track}
                                   isWished={true}/>
                    </div>
                </Col>
            ))}
        </Row>
    );
};

export default WishedProducts;
