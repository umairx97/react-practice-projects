import React, { Component } from 'react'



const list = [
    {
        name: 'Umair',
        age: 20,
        position: 'Developer'
    }
]

class Practice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list,
        }

    }



    render() {

        return (
            <div>
                {this.state.list.map((item) => {

                    return <p key = {item.name}>
                        {item.name} <br/>
                        {item.age}
                    </p>
                })}
            </div>
        )
    }
}

export default Practice;