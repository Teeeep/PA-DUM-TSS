import * as React from 'react'
import { Kick } from 'src/engines/kick'
import { Transport } from 'tone'

export class Instrument extends React.Component<any, any> {
    private kick: Kick
    private ctx: AudioContext
    
    constructor(props: any) {
        super(props)
        this.ctx = new AudioContext
        this.kick = new Kick(this.ctx)
        console.log(Transport)

        Transport.bpm.value = 120
        Transport.schedule(this.startLoop, "0")

        Transport.loop = true
        Transport.loopEnd = '1m'
    }
    public startLoop = ( time: number ) => {
            // this values represent 120BPM, fix later!
            console.log('start loop ', time)
            this.kick.trigger(time)
            this.kick.trigger(time + 0.5)
            this.kick.trigger(time + 1)
            this.kick.trigger(time + 1.5)
            
    }

    public handleClick = () => {
        Transport.start();
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

