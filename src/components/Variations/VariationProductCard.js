import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import NewPlayer from "../WaveFormPlayer/FinishedPlayer";
import {useParams} from "react-router-dom";


const VariationProductCard = () => {
    const params = useParams();
    const [track, setTrack] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchInitData() {
            const resTrack = await fetch(process.env.REACT_APP_MUZSPORT_API + `/tracks/${params.id}`);
            const trackData = await resTrack.json();

            setTrack(trackData);
            setLoading(false);
        }

        fetchInitData();
    }, []);

    return (
        <Row>
            <Col xxl={12} lg={12} md={12} sm={12} className='padding-bottom-sm'>
                <div>
                    {!loading && (
                        <NewPlayer product={track}/>
                    )}
                </div>
            </Col>
        </Row>
    );
};

export default VariationProductCard;
