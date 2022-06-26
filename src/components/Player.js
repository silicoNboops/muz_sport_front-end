import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';
import styled from "styled-components";
import FinishedTrackBtn from "./FinishedTrack/FinishedTrackBtn";
import FinishedTrackBody from "./FinishedTrack/FinishedTrackBody";


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





class Waveform extends Component {

    state = {
        tracks: [],
        playing: false,
    };

componentDidMount() {
        const track = document.querySelector('#track');


        this.waveform = WaveSurfer.create({
            barWidth: 2,
            cursorWidth: 1,
            container: document.querySelector('#wave'),
            backend: 'MediaElement',
            height: 60,
            progressColor: '#000000',
            responsive: true,
            waveColor: '#EFEFEF',
            cursorColor: 'transparent',
        });


        this.waveform.load(track);
    };

    // componentDidMount() {
    //     fetch(process.env.REACT_APP_MUZSPORT_API + `/tracks/1`)
    //         .then(res => res.json())
    //         .then(tracks => {
    //             this.setState({
    //                 tracks: []
    //             });
    //         });
    // }

    handlePlay = () => {
        this.setState({ playing: !this.state.playing });
        this.waveform.playPause();
    };


    render() {
        const url = 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track4.mp3';

        return (
            <div className="container pt-2 pb-2">
                <div className="row">
                    <h4 className="text-white track-title">The Weekend - False Alarm</h4>

                    <div className="col-1" style={{paddingTop: '35px'}}>
                        <PlayButton onClick={this.handlePlay} >
                            {!this.state.playing ?
                                <img src="assets/icons/play-button-arrowhead.png" height="80px"/>
                                :
                                <img src="assets/icons/pause.png" height="80px"/>
                            }
                        </PlayButton>
                    </div>

                        <div className="card mt-5 mb-5 p-3 col-9" style={{borderRadius: '12px'}}>
                            <WaveformContainer>
                                <Wave id="wave" />
                                <audio id="track" src={url} />
                            </WaveformContainer>
                        </div>

                    <div className="col-2 imgblock-track">
                        <a href="#" className="link-unstyled">
                            <img src='assets/icons/price-tag.png' className='price-icon'/>
                            <span className="text-start text-white">330 ₽</span>
                            <h6 className="text-white me-4">Купить</h6>
                        </a>
                    </div>

                    <div className="row track-description">
                        <p className="card col-2 me-2 text-white">Худ.гимнастика</p>
                        <p className="card col-2 me-2 text-white">Электронная</p>
                        <p className="card col-2 me-2 text-white">Энергичная</p>
                        <p className="card col-2 text-white">Америка</p>
                        <div className="col-4 text-end">
                            <FinishedTrackBtn/>
                        </div>
                        <FinishedTrackBody/>
                    </div>
                </div>
            </div>
    );
    }
};
export default Waveform
