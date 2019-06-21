import * as React from 'react'

export class Instruments extends React.Component<any> {
    constructor(props: any) {
        super(props)
    }

    render () {
        return (
            <div style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                {this.props.children}
            </div>
        )
    }
}