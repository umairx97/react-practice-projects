import React, { Component } from 'react'

let a = 'foo', b = 42, c = {prop: 'abc'}; 




class Practice extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            a, 
            b, 
            c,
        }

    }



    render() {

        return (
            <div>
                {this.state.a}
            </div>
        )
    }
}

export default Practice;