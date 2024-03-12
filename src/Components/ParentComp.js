import React, { Component } from 'react' 

import PureComp from './PureComp';
import RegularComp from './RegularComp';

class ParentComp extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: "Maruti"
        }
    }

    componentDidMount() {

        setInterval(()=> {
            this.setState({
                name: "Maruti Car"
            });
        }, 10000);
    }

    render() {
        console.log("Parent Component Rendered !!!");
        return (

            <div>
                <p>I am the Parent Component</p>
                <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        );
    }
}

export default ParentComp;