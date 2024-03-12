import React, { Component } from 'react'

import UpdatedComp from './HigherOrder';

export class Counter extends Component{

    constructor(props) {
        super(props);

        this.state = {
            count1: 0
        }
    }

    IncrementCount = ()=> {
        this.setState({ count1: this.state.count1 + 1 });
    };

    render() {
        const { count1 } = this.state; 

        return (
            <div>
                <button onMouseEnter={this.IncrementCount}>{this.props.name} Incremented to { count1 } </button>
            </div>
        )
    }
}

export default UpdatedComp(Counter);