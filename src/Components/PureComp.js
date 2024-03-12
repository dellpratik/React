import React, { PureComponent } from 'react'

class PureComp extends PureComponent {

    render() {

        console.log("Pure Component Rendered !!!");

        return (

            <div>
                <p>I am the Pure Component {this.props.name}!!!</p>
            </div>
        );
    }
}

export default PureComp;