import React, {Component} from 'react'; 
import App2 from './app2';
import Cities from './cities'



class App extends Component { 
    
    state = { 
        CityName: ['Karachi', 'Quetta', 'Lahore']
    }



    // state = { 
    //     CityName: ['karachi', 'quetta', 'lahore'],
    //     address: 'axiom'
    // }

    // ChangeState = this.setState(
    //     (ps) => ({ 
    //         CityName: ['abc']
    //     })
    // )


    ChangeState = () => { 
        this.setState({
            CityName: ['Umair', 'Asad', 'Shahbaz']
        })
    }
    // ChangeState = () => { 
    //     this.setState({
    //         CityName: ['abc'],
    //     })
    // }
    

    render(){
    
        return ( 
            <div>

                <Cities anyname = {this.state.CityName} changethestate = {this.ChangeState} />
                {/* <App2/> */}
                
            </div>
        )
    }
}
export default App;

// import React from 'react'; 

// const App = () => { 
//     return ( 
//         <div>
//             hello
//         </div>
//     )
// }

// export default App;