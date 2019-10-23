import { realpathSync } from "fs";

// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
    constructor(){
    super()

    this.state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8, 
            video: {
                resolution: '1080p'
            }
        }

    }
}

    handleBitrate = () => {
        let setBitrate = {
            ...this.state.settings,
            bitrate: 12
        }
        this.setState({
            settings: setBitrate
        })
    }
    handleResolution = () => {
        let setResolution = {
            ...this.state.settings,
            video: {
                ...this.state.settings.video,
                resolution: '720p'
            }
        }
            this.setState({
                settings: setResolution
            })
    }
    

    render() {
        return (
            <div>
            <button className='resolution' onClick={this.handleResolution}> Resolution </button>
            <button className='bitrate' onClick={this.handleBitrate}> BitRate </button>
            </div>
        )
    }
}