import React from 'react'; 
import ListContacts from './ListContact';

const contacts = [
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
    }
   ];



class App extends React.Component { 
    render() { 
      

        return ( 
            <div>
                <ListContacts contacts = {contacts}/>
            </div>
        )
    }
}

export default App;