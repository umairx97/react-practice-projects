import React from 'react'; 

class App extends React.Component { 
    render() { 
        const contacts = [
            {
              "id": "karen",
              "name": "Karen Isgrigg",
              "handle": "karen_isgrigg",
              "avatarURL": "http://localhost:5001/karen.jpg"
            },
            {
              "id": "richard",
              "name": "Richard Kalehoff",
              "handle": "richardkalehoff",
              "avatarURL": "http://localhost:5001/richard.jpg"
            },
            {
              "id": "tyler",
              "name": "Tyler McGinnis",
              "handle": "tylermcginnis",
              "avatarURL": "http://localhost:5001/tyler.jpg"
            }
           ];


        return ( 
            <div>
                hello
            </div>
        )
    }
}

export default App;