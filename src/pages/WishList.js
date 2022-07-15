import React, {useEffect, useState} from "react";
import API from "../api/API";
import Variations from "../components/Accordions/Variations";
import FinishedTrackBtn from "../components/Accordions/FinishedTrack/FinishedTrackBtn";
import FinishedTrackBody from "../components/Accordions/FinishedTrack/FinishedTrackBody";
import WaveSurfer from "wavesurfer.js";
import styled from "styled-components";
import WishedProducts from '../components/filters/WishedProducts';

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


const WishList = () => {
    const [wishes, setWishes] = useState([]);
    const [pending, setPending] = useState(true);
    const [select, setSelect] = useState(true);
    const [waver, setWaver] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [price, setPrice] = useState([])


    useEffect(() => {
        API.getWishlist()
            .then((res) => {
                setPending(false)
                setWishes(res.data);
            });
        async function fetchInitData() {
            await fetch(process.env.REACT_APP_MUZSPORT_API + '/price/1')
                .then(response => response.json())
                .then(data => setPrice(data))
        }
        fetchInitData()

        // wishes.map((wished_track, index) =>
        //     // TODO сейчас удаляет все продукты
        //     API.deleteWishlist({track_id : wishes.id})
        // )

        // const track = document.querySelector('#track' + wishes.id);
        //
        // const wavesurfer = WaveSurfer.create({
        //     barWidth: 2,
        //     cursorWidth: 1,
        //     container: document.querySelector('#wave' + wishes.id),
        //     backend: 'MediaElement',
        //     height: 60,
        //     progressColor: '#000000',
        //     responsive: true,
        //     waveColor: '#EFEFEF',
        //     cursorColor: 'transparent',
        // });
        //
        // wavesurfer.load(track);
        // setWaver(wavesurfer);
    },[]);


    const deleteWish = () => {
        wishes.map(wishes =>
            // TODO сейчас удаляет все продукты
            API.deleteWishlist({track_id : wishes.id})
        )

        setSelect(!select);
    }

    const handlePlay = () => {
        setPlaying(!playing);
        waver?.playPause();
    };

    if(pending) return <div></div>

    return(
        <WishedProducts wishedProducts={wishes} />


        // <div>
        //     {wishes.map((wishes, index) => {
        //
        //         return(
        //             <div className="container pt-2 pb-2">
        //                 <div className="row">
        //
        //                     <h4 className="text-white track-title">{wishes.wished_track.author} - {wishes.wished_track.title}</h4>
        //                     <div className="col-1" style={{paddingTop: '35px'}}>
        //                         <PlayButton onClick={handlePlay} >
        //                             {!playing ?
        //                                 <img src="assets/icons/play-button-arrowhead.png" height="80px"/>
        //                                 :
        //                                 <img src="assets/icons/pause.png" height="80px"/>
        //                             }
        //                         </PlayButton>
        //                     </div>
        //
        //                     <div className="card mt-5 mb-5 p-3 col-9" style={{borderRadius: '12px'}}>
        //                         <WaveformContainer>
        //                             <Variations product={wishes.wished_track}/>
        //                             <Wave id={'wave' + wishes.id}/>
        //                             <audio id={'track' + wishes.id} src={wishes.wished_track.file} />
        //                         </WaveformContainer>
        //                     </div>
        //
        //                     <div className="col-2 imgblock-track">
        //                         <a href="#" className="link-unstyled">
        //                             <img src='assets/icons/price-tag.png' className='price-icon'/>
        //                             <span className="text-start text-white">{wishes.wished_track.price} ₽</span>
        //                             <h6 className="text-white me-4">Купить</h6>
        //
        //                         </a>
        //                     </div>
        //
        //                     <div className="row track-description">
        //                         <p className="card col-2 me-2 text-white marquee">
        //                         <span>
        //                             {wishes.wished_track.sports_name}
        //                         </span>
        //                         </p>
        //
        //                         {/* TODO track_length */}
        //                         <p className="card col-2 me-2 text-white marquee">
        //                             <span>
        //                             {wishes.wished_track.direction_music.map((dir, index) =>
        //                                 <>{dir} {index < wishes.wished_track.direction_music.length - 1 ? ", " : ""}</>
        //                             )}
        //                             </span>
        //                         </p>
        //                         <p className="card col-2 me-2 text-white marquee">
        //                             <span>
        //                             {wishes.wished_track.mood_name.map((mood, index) =>
        //                                 <>{mood} {index < wishes.wished_track.mood_name.length - 1 ? ", " : ""}</>
        //                             )}
        //                             </span>
        //                         </p>
        //                         {/* TODO with_words*/}
        //                         <p className="card col-2 text-white marquee">
        //                         <span>
        //                             {wishes.wished_track.country_name}
        //                         </span>
        //                         </p>
        //                         {select?
        //                             <button type="button" className="btn col-1" onClick={deleteWish}>
        //                                 <svg xmlns="http://www.w3.org/2000/svg" width="28" style={{color: "red"}} height="28"
        //                                      fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
        //                                     <path fillRule="evenodd"
        //                                           d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
        //                                 </svg>
        //                             </button>
        //                             :
        //                             <button type="button" className="btn col-1">
        //                                 <svg xmlns="http://www.w3.org/2000/svg" width="28" style={{color: "rgba(255, 0, 0, 0.45)"}} height="28"
        //                                      fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
        //                                     <path fillRule="evenodd"
        //                                           d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
        //                                 </svg>
        //                             </button>
        //                         }
        //
        //                         <div className="col-4 row">
        //                             <div className="position-relative" style={{right: "15%"}}>
        //                                 <FinishedTrackBtn product={wishes.wished_track}/></div>
        //                         </div>
        //                         <FinishedTrackBody product={wishes.wished_track} price={price}/>
        //                     </div>
        //                 </div>
        //             </div>
        //         );
        //     })}
        // </div>
)
}
export default WishList;
