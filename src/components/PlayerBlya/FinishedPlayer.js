import React from 'react';
import WaveSurfer from '../../../node_modules/wavesurfer.js/dist/wavesurfer';
import styled from "styled-components";
import FinishedTrackBtn from "../FinishedTrack/FinishedTrackBtn";
import FinishedTrackBody from "../FinishedTrack/FinishedTrackBody";
import {useEffect, useState} from "react";
import {useCart} from "react-use-cart";


const WaveformContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 30px;  width: 100%;
  background: transparent;
`;

const Wave = styled.div`
  width: 97%;
  height: 60px;
`;

const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: rgba(37, 36, 64, 0.01);
  padding-bottom: 3px;

`;

const NewPlayer = (props) => {
    const {product} = props;
    const {items, emptyCart, removeItem, isEmpty, updateItemQuantity,totalItems, cartTotal,} = useCart();
    const [waver, setWaver] = useState(null);
    const [playing, setPlaying] = useState(false);
    // const [product, setProduct] = useState({});


    console.log(product.file)

    useEffect(() => {
        const track = document.querySelector('#track' + product.id);

        // async function fetchInitData() {
        //     await fetch(process.env.REACT_APP_MUZSPORT_API + `/tracks/`)
        //     .then(response => response.json())
        //     // 4. Setting *dogImage* to the image url that we received from the response above
        //     .then(data => console.log(data.results))
        // }

        let wavesurfer = WaveSurfer.create({
            barWidth: 2,
            cursorWidth: 1,
            container: document.querySelector('#wave' + product.id),
            backend: 'MediaElement',
            height: 60,
            progressColor: '#000000',
            responsive: true,
            waveColor: '#EFEFEF',
            cursorColor: 'transparent',
        });

        wavesurfer.load(track);
        setWaver(wavesurfer);
        // fetchInitData();


    }, []);

    const handlePlay = () => {
        setPlaying(!playing);
        waver?.playPause();
    };

    return (
        <div className="container pt-2 pb-2">
            <div className="row">

                <h4 className="text-white track-title">{product.author} - {product.title}</h4>
                <div className="col-1" style={{paddingTop: '35px'}}>
                    <PlayButton onClick={handlePlay} >
                        {!playing ?
                            <img src="assets/icons/play-button-arrowhead.png" height="80px"/>
                            :
                            <img src="assets/icons/pause.png" height="80px"/>
                        }
                    </PlayButton>
                </div>

                <div className="card mt-5 mb-5 p-3 col-9" style={{borderRadius: '12px'}}>
                    <WaveformContainer>
                        <Wave id={'wave' + product.id} />
                        <audio id={'track' + product.id} src={product.file} />
                    </WaveformContainer>
                </div>

                <div className="col-2 imgblock-track">
                    <a href="#" className="link-unstyled">
                        <img src='assets/icons/price-tag.png' className='price-icon'/>
                        <span className="text-start text-white">{product.price} ₽</span>
                        <h6 className="text-white me-4">Купить</h6>
                    </a>
                </div>

                <div className="row track-description">
                    <p className="card col-2 me-2 text-white">{product.sports_name}</p>
                    <p className="card col-2 me-2 text-white">{product.direction_music}</p>
                    <p className="card col-2 me-2 text-white">{product.mood_name}</p>
                    <p className="card col-2 text-white">{product.country_name}</p>
                    <div className="col-4 text-end">
                        <FinishedTrackBtn product={product}/>
                    </div>
                    <FinishedTrackBody product={product}/>
                </div>
            </div>
        </div>
    );
}
export default NewPlayer;
