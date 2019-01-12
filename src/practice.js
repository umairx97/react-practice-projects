import React, {Component} from 'react'
import axios from 'axios';

class Practice extends Component {

    state = {
        persons: [],
      }
    
      componentDidMount() {
        axios.get(`http://localhost:3001/posts`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })

      }
    
      render() {
        return (
          <ul>

            { this.state.persons.map(person => <li key = {person.id}>{person.title}</li>)}
          </ul>
        )
      }
}

export default Practice;