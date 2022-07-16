import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import NewPlayer from "../WaveFormPlayer/FinishedPlayer";
import {useParams} from "react-router-dom";


const VariationProductDetail = () => {
    const params = useParams();
    const [track, setTrack] = useState({})

    useEffect(() => {
        async function fetchInitData() {
            const resTrack = await fetch(process.env.REACT_APP_MUZSPORT_API + `track/${params.id}`);
            const trackData = await resTrack.json();
            console.log(trackData)


            setTrack(trackData);
        }

        fetchInitData();
        console.log(track)
    }, []);

    return (
        <Row>
            <Col xxl={12} lg={12} md={12} sm={12} className='padding-bottom-sm'>
                <div>
                    <NewPlayer product={track}/>
                </div>
            </Col>
        </Row>
    );
};

export default VariationProductDetail;
