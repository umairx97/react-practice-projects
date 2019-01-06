import React, {Component} from 'react'; 

class App2 extends Component {
	
	state = { 
		name: '', 
		fname: ''
	}

	whenChange = (event) => { 
		const {name, value} = event.target
		this.setState({ 
			[name]: value

		})
		

	}


	render(){
		return ( 
			<div>
				<input type = "text"
				name = "name"
				onChange = {this.whenChange}
				value = {this.state.name}/> {`The First Output is: ${this.state.name}`}
				<br/>
				
				

				<input type = "text"
				name = "fname"
				onChange = {this.whenChange}
				value = {this.state.fname} /> {`The Second Output is: ${this.state.fname}`}

			</div>

		)
	}
}

export default App2;