import * as React from 'react'
import { Instrument } from '../components/instument'
import { Steps } from './steps'

export class Transport extends React.Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {
            steps: [false, false, false, false, false, false, false, false, 
                false, false, false, false, false, false, false, false]
        }
    }

    private handleStepChange = (id: number) => {
        const s = this.state.steps
        s[id] = !s[id]
        this.setState({
            step: s,
        })
    }

    render() {
        return (
        <div>
            <h1>Web-808</h1>
            <Instrument />
            <Steps handleStepChange={this.handleStepChange} steps={this.state.steps} />
        </div>
        )
    }
}