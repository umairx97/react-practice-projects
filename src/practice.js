import React, { Component } from 'react'


class App2 extends Component {
    
    
    state = { 
        text: this.props.num
    }


    static getDerivedFromProps(props){ 
        return ({ 
            text: props.num
        })
    }

    render() { 

        return ( 
            <div>
                <h2>This is the 2nd Component</h2>
                {`the State number is ${this.state.text}`}
            </div>
        )
    }
}


class Practice extends Component {



    state = {
       number: 0, 
    }


    // constructor(){ 
    //     super()
    //     this.state.number = 100
    // }
    componentDidMount = () => {
        setTimeout(() => { 
            this.setState(() => ({ 
                number: Math.floor(Math.random() * 1000)
            }))
        }, 1000)

        // this.setState(() => ({ 
        //     number: Math.ceil(Math.random() * 1000),
        // }))
      
    }
    


    render() {

        return (
            <div> 
                <App2 num = {this.state.number}/>
            </div>
        )
    }
}

export default Practice;