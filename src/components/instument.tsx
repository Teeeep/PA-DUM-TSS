import * as React from 'react'
import { Kick } from 'src/engines/kick'
import { Transport } from 'tone'

export class Instrument extends React.Component<any, any> {
    private ctx: AudioContext
    private sound: Kick
    private loopId: number;
    
    constructor(props) {
        super(props)
        this.ctx = new AudioContext
        this.sound = new Kick(this.ctx)
        Transport.loop = true
        Transport.loopEnd = '1m'
    }
    
    createLoop = () => {
        Transport.clear(this.loopId)
        const loop = (time: number) => {
            console.log('start loop ', time)
            this.sound.trigger(time)
            this.sound.trigger(time + 0.5)
            this.sound.trigger(time + 1)
            this.sound.trigger(time + 1.5)
        }
        this.loopId = Transport.schedule(loop, '0')
            
    }

    public handleClick = () => {
        this.createLoop()
        Transport.start()
    }

    render() {
        const InstrumentStyle = {
            height: '3em',
            width: '8em',
            margin: '0.2em',
            borderRadius: 10,
            padding: 5,
            backgroundColor: this.props.selected ? '#2AC7DC' : '#696969',
            color: 'white',
            boxShadow: '2px 2px 5px #222',
        } 
        return (
            <div>
                <button style={InstrumentStyle} onClick={this.handleClick}>
                    KICK
                </button >
            </div> )

    }
}

