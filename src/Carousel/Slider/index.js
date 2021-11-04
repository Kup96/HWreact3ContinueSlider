import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiPlayOutline , mdiPause , mdiSkipNextOutline , mdiSkipPrevious , mdiOverscan , mdiFullscreenExit } from '@mdi/react'; 

export class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlay: false,
            isFullScreen: false,
        };
        this.timerId = null;        
    }
    handlerPlay = () => {
        const {isPlay} = this.state;
        this.setState({ isPlay: !isPlay});
    }
    handleFullScreen = () => {
        const {isFullScreen} = this.state;
        const {setFullScreenMode} = this.props;
        this.setState({isFullScreen: !isFullScreen});
        setFullScreenMode(isFullScreen);
    }

    render() {
        const {isPlay, isFullScreen} = this.state;
        const {next, prev} = this.props;
        return (
            <div>
                <div>
                    <Icon onClick={prev} path={mdiSkipPrevious}/>
                    <Icon onClick={next} path={mdiSkipNextOutline}/>
                </div>
                <div>
                    <Icon onClick={this.handlerPlay} path={isPlay ? mdiPause : mdiPlayOutline}/>
                    <Icon onClick={this.handleFullScreen} path={isFullScreen ? mdiFullscreenExit  : mdiOverscan }/>
                </div>                
            </div>
        );
    }
}

export default Slider;