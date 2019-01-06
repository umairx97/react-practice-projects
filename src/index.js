import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import App3 from './app3';

class Display extends Component {
    render(){
        return ( 
            <div>
                <App/>

                {/* <App3 value = {'hello'}/> */}
            </div>
            
        )
    } 

}
// const Display = () => { 
//     return ( 
//         <div>
//             hello
//         </div>
//         // <App/>
//     )
// }

ReactDOM.render(<Display/>, document.getElementById('root'));

if (module.hot) { 
    module.hot.accept();
}

