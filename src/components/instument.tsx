import * as React from 'react';
import { Kick } from 'src/engines/kick';

export class Instrument extends React.Component<any, any> {
    private kick: Kick
    private ctx: AudioContext
    
    constructor(props: any) {
        super(props)
        this.ctx = new AudioContext
        this.kick = new Kick(this.ctx)
    }
    public handleClick = () => {
        this.kick.trigger(this.ctx.currentTime)
    }

    render() {
        const InstrumentStyle = {
            height: '3em',
            margin: '0.2em',
            borderRadius: 10,
            padding: 5,
            backgroundColor: this.props.selected ? '#2AC7DC' : '#696969',
            color: 'white',
            boxShadow: '2px 2px 5px #222',
        } 
        return (
        <div style={InstrumentStyle} onClick={this.handleClick}>
            instrument
            </div >)

    }
}

