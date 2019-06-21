import * as React from 'react'
import { Instrument } from '../components/instument'

export class Transport extends React.Component<any, any> {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div>
            <h1 style={{ color: 'black'}}>Web-808</h1>
            <Instrument />
        </div>)
    }
}