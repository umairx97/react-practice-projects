import React, { Component } from "react";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  }
];

class Practice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: list
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.list.map(item => (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>Title: {item.title} </a>
            </span>
            <br />
            <span>Author: {item.author}</span> <br />
            <span>Comments: {item.num_comments}</span><br/>
            <span>Upvotes: {item.points}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Practice;
