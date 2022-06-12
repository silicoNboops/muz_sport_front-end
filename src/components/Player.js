import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';

// import { WaveformContianer, Wave, PlayButton } from './Waveform.styled';

class Waveform extends Component {

    state = {
        playing: false,
    };

    componentDidMount() {
        const track = document.querySelector('#track');

        this.waveform = WaveSurfer.create({
            barWidth: 3,
            cursorWidth: 1,
            container: '#waveform',
            backend: 'WebAudio',
            height: 80,
            progressColor: '#000000',
            responsive: true,
            waveColor: '#EFEFEF',
            cursorColor: 'transparent',
        });

        this.waveform.load(track);
    };

    handlePlay = () => {
        this.setState({ playing: !this.state.playing });
        this.waveform.playPause();
    };

    render() {
        const url = 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3';

        return (
            <div className="wave-form-container">
                <div className="wave-play-btn" onClick={this.handlePlay} >
                    {!this.state.playing ? 'Play' : 'Pause'}
                </div>
                <div className="wave" id="waveform" />
                <audio id="track" src={url} />
            </div>
        );
    }
};

export default Waveform;
