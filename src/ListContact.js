import React, { Component } from 'react';

class ListContacts extends Component {
    render() {

        return (
            <ol className="contact-list ">
                {this.props.contacts.map(item =>
                    <li key={item.id} className="contact-list-item">

                        <div className="contact-avatar" style={{
                            backgroundImage: `url(${item.avatarURL})`
                        }}></div>

                        <div className="contact-detais">
                            <p>{item.name}</p>
                            <p>{item.handle}</p>
                        </div>

                        <button className="contact-remove">remove</button>



                    </li>)}
            </ol>
        )
    }
}

export default ListContacts;