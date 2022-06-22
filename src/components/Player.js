import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';
import styled from "styled-components";

const WaveformContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;  width: 100%;
  background: transparent;
`;

const Wave = styled.div`
  width: 100%;
  height: 80px;
`;

const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: #EFEFEF;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  padding-bottom: 3px;
  
  &:hover {
    background: #DDD;
  }
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
            height: 80,
            progressColor: '#000000',
            responsive: true,
            waveColor: '#EFEFEF',
            cursorColor: 'transparent',
        });


        this.waveform.load(track);
    };

    // componentDidMount() {
    //     fetch(process.env.REACT_APP_MUZSPORT_API + `/tracks`)
    //         .then(res => res.json())
    //         .then(tracks => {
    //             this.setState({
    //                 tracks: []
    //             });
    //             console.log(tracks)
    //         });
    // }

    handlePlay = () => {
        this.setState({ playing: !this.state.playing });
        this.waveform.playPause();
    };

    render() {
        const url = 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3';

        return (
            <div className="container pt-5 pb-5">
                <div className="row">
                    <h4 className="text-white track-title">The Weekend - False Alarm</h4>
                    <img src="assets/images/baetman.jpg" className="track-image"/>
                        <div className="card mt-5 mb-5 p-3 col-8" style={{borderRadius: '12px'}}>
                            <WaveformContainer>
                                <PlayButton onClick={this.handlePlay} >
                                    {!this.state.playing ? 'Play' : 'Pause'}
                                </PlayButton>
                                <Wave id="wave" />
                                <audio id="track" src={url} />
                            </WaveformContainer>
                        </div>
                    <img src='assets/icons/price-tag.png' className='price-icon col'/>
                    <div className="row track-description">
                        <p className="card col-2 me-2 text-white" style={{backgroundColor: '#6d669a',
                            borderRadius: '12px'}}>Худ.гимнастика
                        </p>
                        <p className="card col-2 me-2 text-white" style={{backgroundColor: '#6d669a',
                            borderRadius: '12px'}}>Энергичная
                        </p>
                        <p className="card col-2 text-white" style={{backgroundColor: '#6d669a',
                            borderRadius: '12px'}}>Америка
                        </p>
                    </div>
                </div>
            </div>
    );
    }
};
export default Waveform
