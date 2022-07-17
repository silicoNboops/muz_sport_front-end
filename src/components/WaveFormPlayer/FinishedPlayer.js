import React, {useContext} from 'react';
import WaveSurfer from '../../../node_modules/wavesurfer.js/dist/wavesurfer';
import styled from "styled-components";
import FinishedTrackBtn from "../Accordions/FinishedTrack/FinishedTrackBtn";
import FinishedTrackBody from "../Accordions/FinishedTrack/FinishedTrackBody";
import {useEffect, useState} from "react";
import Variations from "../Variations/Variations";
import API from "../../api/API";

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

const NewPlayer = ({product, isWished}) => {
    const [select, setSelect] = useState(false);
    const [waver, setWaver] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [price, setPrice] = useState([])

    const createWish = () => {
        API.createWishlist({id : product.id});
        setSelect(true);
    }
    const deleteWish = () => {
        API.deleteWishlist({track_id : product.id});
        setSelect(false);
    }

    useEffect(() => {
        async function fetchData() {
            await fetch(process.env.REACT_APP_MUZSPORT_API + '/price/1')
                .then(response => response.json())
                .then(data => setPrice(data))
        }
        fetchData();

        const track = document.querySelector('#track' + product.id);

        const wavesurfer = WaveSurfer.create({
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

        if (isWished) {
            setSelect(true);
        }
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
                            <img src="/assets/icons/play-button-arrowhead.png" height="80px"/>
                            :
                            <img src="/assets/icons/pause.png" height="80px"/>
                        }
                    </PlayButton>
                </div>

                <div className="card mt-5 mb-5 p-3 col-9" style={{borderRadius: '12px'}}>
                    <WaveformContainer>
                        <Variations product={product} variants={product.variants}/>
                        <Wave id={'wave' + product.id}/>
                        <audio id={'track' + product.id} src={product.file} />
                    </WaveformContainer>
                </div>

                <div className="col-2 imgblock-track">
                    <a href="#" className="link-unstyled">
                        <img src="/assets/icons/price-tag.png" className='price-icon'/>
                        <span className="text-start text-white">{product.price} ₽</span>
                        <h6 className="text-white me-4">Купить</h6>

                    </a>
                </div>

                <div className="row track-description">
                    <p className="card col-2 me-2 text-white marquee"><span>{product.sports_name}</span></p>
                    {/* TODO track_length */}
                    <p className="card col-2 me-2 text-white marquee">
                        <span>
                        {product.direction_music.map((dir, index) =>
                            <>{dir} {index < product.direction_music.length - 1 ? ", " : ""}</>
                        )}
                        </span>
                    </p>
                    <p className="card col-2 me-2 text-white marquee">
                        <span>
                        {product.mood_name.map((mood, index) =>
                            <>{mood} {index < product.mood_name.length - 1 ? ", " : ""}</>
                        )}
                        </span>
                    </p>
                    {/* TODO with_words*/}
                    <p className="card col-2 text-white marquee">
                        <span>{product.country_name}</span>
                    </p>
                    {select?
                        <button type="button" className="btn shadow-none col-1" onClick={deleteWish}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" style={{color: "red"}} height="28"
                                 fill="currentColor" className="bi bi-heart-fill " viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                            </svg>
                        </button>
                        :
                        <button type="button" className="btn shadow-none col-1" onClick={createWish}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                 fill="currentColor" className="bi bi-heart-fill heart-style" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                            </svg>
                        </button>
                    }
                    <div className="col-4 row">
                        <div className="position-relative" style={{right: "15%"}}>
                            <FinishedTrackBtn product={product}/></div>
                    </div>
                    <FinishedTrackBody product={product} price={price}/>
                </div>
            </div>
        </div>
    );
}
export default NewPlayer;
