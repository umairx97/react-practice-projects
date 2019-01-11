import React from 'react';
import ListContacts from './ListContact';

class App extends React.Component {

    state = {
        contacts: [
            {
                id: '1',
                name: 'Umair Ahmed Bajwa',
                Occupation: 'Developer',
                handle: '@umairx97',
                Age: 21,
                Location: 'Karachi',
                avatarURL: 'http://localhost:5001/michael.jpg'
            },
            {
                id: '2',
                name: 'Asad Ikhlas',
                handle: '@asadIkhlas03',
                Occupation: 'Developer',
                Age: 22,
                Location: 'Karachi',
                avatarURL: 'http://localhost:5001/ryan.jpg'
            },
            {
                id: '3',
                name: 'Shahbaz Hussain',
                Occupation: 'Developer',
                handle: '@Shahbazhussain97',
                Age: 23,
                Location: 'Karachi',
                avatarURL: 'http://localhost:5001/tyler.jpg'
            },

        ]
    }
    
    
    removeContact = (contacts) => {
        this.setState((currentState) => ({
            contacts: currentState.contacts.filter((c) => {
                return c.id !== contacts.id
            })

        }))

    }

    render() {


        return (
            <div>
                <ListContacts contacts = {this.state.contacts}
                onDelete = {this.removeContact}
                />


            </div>
        )
    }
}

export default App;