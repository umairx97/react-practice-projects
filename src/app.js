import React from 'react'; 
import ListContacts from './ListContact';

class App extends React.Component { 

    state = { 
        contacts: [
            {
              "id": "Michael",
              "name": "Michael Isgrigg",
              "handle": "@Michael_isgrigg",
              "avatarURL": "http://localhost:5001/michael.jpg"
            },
            {
              "id": "ryan",
              "name": "ryan Kalehoff",
              "handle": "@ryan_kalehoff",
              "avatarURL": "http://localhost:5001/ryan.jpg"
            },
            {
              "id": "tyler",
              "name": "Tyler McGinnis",
              "handle": "@tylermcginnis",
              "avatarURL": "http://localhost:5001/tyler.jpg"
            }, 

        ]
    }


    // removeContact = (contacts) => {
    //     this.setState((currentState)=> ({ 
    //         contacts: currentState.contacts.filter((c)=> {
    //             return c.id !== contacts.id
    //         })

    //     }))

    // }

    render() { 
      

        return ( 
            <div>
                {/* <ListContacts contacts = {this.state.contacts}
                onDelete = {this.removeContact}
                /> */}


            </div>
        )
    }
}

export default App;