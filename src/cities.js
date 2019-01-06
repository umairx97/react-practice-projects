import React, {Component} from 'react'; 

class Cities extends Component { 
    render(){
        console.log()
        return ( 
           <div>
                {this.props.anyname.map((item) => 
                        <li key = {item}>{item}</li> 
                    
                        )}
                    <button onClick = {this.props.changethestate}> 
                            Press this button to change state for list 
                    </button>

            </div>
        )
    }
}

export default Cities;