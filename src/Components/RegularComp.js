import React, { Component } from 'react' 

class RegularComp extends Component {

    render() {
        console.log("Regular Component Rendered !!!")
        return (

            <div>
                <p>I am the Regular Component {this.props.name} !!!</p>
            </div>
        );
    }
}

export default RegularComp;